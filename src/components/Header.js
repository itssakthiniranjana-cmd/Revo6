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

      <!-- Mobile Navigation Drawer -->
      <div class="mobile-nav-overlay js-mobile-nav">
        <div class="mobile-nav-links">
          <a href="/" class="mobile-nav-link" data-route="/">Home</a>
          <a href="/services" class="mobile-nav-link" data-route="/services">Services</a>
          <a href="/solutions" class="mobile-nav-link" data-route="/solutions">Solutions</a>
          <a href="/careers" class="mobile-nav-link" data-route="/careers">Careers</a>
        </div>
        <button class="btn btn-cyan js-open-contact-modal mobile-cta-btn" style="width: 100%;">
          <span>Get In Touch</span>
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </header>
  `;
}

export function initHeaderEvents() {
  const toggle = document.querySelector('.js-mobile-toggle');
  const overlay = document.querySelector('.js-mobile-nav');

  if (toggle && overlay) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.classList.toggle('open');
      overlay.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close when link clicked
    overlay.querySelectorAll('.mobile-nav-link, .mobile-cta-btn').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('open');
        overlay.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }
}
