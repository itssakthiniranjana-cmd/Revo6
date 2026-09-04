/**
 * REVO6 CLIENT-SIDE ROUTER & METADATA CONTROLLER
 */

import { siteContent } from './content.js';

export class Router {
  constructor(routes, onPageChange) {
    this.routes = routes;
    this.onPageChange = onPageChange;
    this.currentPath = null;

    this.init();
  }

  init() {
    // Intercept clicks on links
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href]');
      if (!link) return;

      const href = link.getAttribute('href');
      // Ignore external or mailto / tel links
      if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        return;
      }

      // Handle in-page hash links
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }

      // Handle internal routes
      if (href.startsWith('/')) {
        e.preventDefault();
        const [path, hash] = href.split('#');
        this.navigate(path, hash ? `#${hash}` : null);
      }
    });

    // Handle back / forward browser navigation
    window.addEventListener('popstate', () => {
      this.navigate(window.location.pathname, window.location.hash, false);
    });

    // Initial load
    const initialPath = window.location.pathname || '/';
    const initialHash = window.location.hash;
    this.navigate(initialPath, initialHash, false);
  }

  navigate(path, hash = null, pushState = true) {
    // Normalize path
    let normalized = path;
    if (normalized.length > 1 && normalized.endsWith('/')) {
      normalized = normalized.slice(0, -1);
    }
    if (!normalized) normalized = '/';

    const renderFn = this.routes[normalized] || this.routes['/'];
    this.currentPath = normalized;

    if (pushState) {
      const url = hash ? `${normalized}${hash}` : normalized;
      window.history.pushState({}, '', url);
    }

    // Update active state on nav links
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href === normalized || (normalized === '/' && href === '/')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Update Meta Title & Description
    this.updateMetadata(normalized);

    // Render Page
    if (this.onPageChange) {
      this.onPageChange(renderFn, normalized, hash);
    }
  }

  updateMetadata(path) {
    let pageKey = 'home';
    if (path === '/services') pageKey = 'services';
    else if (path === '/solutions') pageKey = 'solutions';
    else if (path === '/careers') pageKey = 'careers';

    const meta = siteContent.pages[pageKey]?.meta;
    if (meta) {
      document.title = meta.title;

      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = meta.description;

      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.content = meta.keywords;
    }
  }
}
