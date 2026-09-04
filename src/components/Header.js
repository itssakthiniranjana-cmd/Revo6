/**
 * HEADER COMPONENT
 */

export function renderHeader() {
  return `
    <header class="site-header">
      <div class="container nav-inner">
        <!-- Logo -->
        <a href="/" class="brand-logo" aria-label="Revolution 6 Home">
          <div class="brand-logo-mark">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="42" stroke="#0088CC" stroke-width="9" stroke-linecap="round" stroke-dasharray="190 70" />
              <circle cx="50" cy="50" r="20" stroke="#0088CC" stroke-width="9" />
              <path d="M48 30C48 30 50 18 64 12" stroke="#0088CC" stroke-width="9" stroke-linecap="round" />
            </svg>
          </div>
          <span class="brand-text">REVOLUTION <span>6</span></span>
        </a>

        <!-- Desktop Nav -->
        <nav class="nav-links" aria-label="Primary Navigation">
          <a href="/" class="nav-link" data-route="/">Home</a>
          <a href="/services" class="nav-link" data-route="/services">Services</a>
          <a href="/solutions" class="nav-link" data-route="/solutions">Solutions</a>
          <a href="/careers" class="nav-link" data-route="/careers">Careers</a>
        </nav>

        <!-- Header Actions -->
        <div class="header-actions">
          <button class="btn btn-primary js-open-contact-modal" aria-label="Open Contact Form">
            <span>Get Started</span>
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        <!-- Mobile Toggle Button -->
        <button class="mobile-toggle js-mobile-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>

    <!-- Mobile Navigation Drawer outside header -->
    <div class="mobile-nav-overlay js-mobile-nav" aria-hidden="true">
      <div class="mobile-nav-content">
        <div class="mobile-nav-header">
          <span class="brand-text" style="font-size: 1.25rem;">REVOLUTION <span style="color: var(--brand-cyan);">6</span></span>
          <button class="mobile-nav-close js-mobile-close" aria-label="Close menu">✕</button>
        </div>
        <div class="mobile-nav-links">
          <a href="/" class="mobile-nav-link" data-route="/">Home</a>
          <a href="/services" class="mobile-nav-link" data-route="/services">Services</a>
          <a href="/solutions" class="mobile-nav-link" data-route="/solutions">Solutions</a>
          <a href="/careers" class="mobile-nav-link" data-route="/careers">Careers</a>
        </div>
        <div style="margin-top: auto; padding-top: 24px;">
          <button class="btn btn-cyan js-open-contact-modal mobile-cta-btn" style="width: 100%;">
            <span>Get In Touch</span>
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;
}

export function initHeaderEvents() {
  const toggle = document.querySelector('.js-mobile-toggle');
  const overlay = document.querySelector('.js-mobile-nav');
  const closeBtn = document.querySelector('.js-mobile-close');

  if (toggle && overlay) {
    const setMenuOpen = (open) => {
      toggle.classList.toggle('open', open);
      overlay.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      overlay.setAttribute('aria-hidden', open ? 'false' : 'true');
      document.body.style.overflow = open ? 'hidden' : '';
    };

    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = !overlay.classList.contains('open');
      setMenuOpen(isOpen);
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        setMenuOpen(false);
      });
    }

    // Close when link clicked
    overlay.querySelectorAll('.mobile-nav-link, .mobile-cta-btn').forEach(link => {
      link.addEventListener('click', () => {
        setMenuOpen(false);
      });
    });

    // Close when clicking on backdrop
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        setMenuOpen(false);
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('open')) {
        setMenuOpen(false);
      }
    });
  }
}
