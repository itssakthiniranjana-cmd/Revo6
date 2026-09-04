/**
 * APPLICATION ENTRY POINT
 */

// Stylesheets
import './styles/variables.css';
import './styles/reset.css';
import './styles/typography.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/parallax.css';
import './styles/pages.css';

// Components
import { renderHeader, initHeaderEvents } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { renderContactModal, initModalEvents } from './components/ContactModal.js';

// Pages
import { renderHome, initHomeEvents } from './pages/Home.js';
import { renderServices, initServicesEvents } from './pages/Services.js';
import { renderSolutions, initSolutionsEvents } from './pages/Solutions.js';
import { renderCareers, initCareersEvents } from './pages/Careers.js';

// Utilities
import { Router } from './utils/router.js';
import { initParallaxEngine } from './utils/parallax.js';

// Setup App Shell
const root = document.getElementById('app');
root.innerHTML = `
  ${renderHeader()}
  <main id="router-view" role="main"></main>
  ${renderFooter()}
  ${renderContactModal()}
`;

// Global Component Events
initHeaderEvents();
initModalEvents();

// Parallax Controller Reference
let parallaxController = null;

// Route Map
const routes = {
  '/': { render: renderHome, init: initHomeEvents },
  '/services': { render: renderServices, init: initServicesEvents },
  '/solutions': { render: renderSolutions, init: initSolutionsEvents },
  '/careers': { render: renderCareers, init: initCareersEvents }
};

// Router Callback
const handlePageChange = (routeConfig, path, hash) => {
  const routerView = document.getElementById('router-view');
  if (!routerView) return;

  // Clean up old parallax controller
  if (parallaxController) {
    parallaxController.destroy();
  }

  // Render new page
  routerView.innerHTML = routeConfig.render();

  // Initialize page-specific events
  if (routeConfig.init) {
    routeConfig.init();
  }

  // Handle hash scrolling or scroll to top
  if (hash) {
    setTimeout(() => {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  } else {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  // Initialize Parallax & Reveal Engine
  setTimeout(() => {
    parallaxController = initParallaxEngine();
  }, 50);
};

// Initialize Router
new Router(routes, handlePageChange);
