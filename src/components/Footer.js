/**
 * FOOTER COMPONENT
 */

import { siteContent } from '../utils/content.js';

export function renderFooter() {
  const { brand } = siteContent;

  return `
    <footer class="site-footer">
      <div class="bg-ambient-layer">
        <div class="ambient-orb orb-1" style="opacity: 0.15; top: 10%;"></div>
      </div>

      <div class="container" style="position: relative; z-index: 1;">
        <div class="footer-top">
          <!-- Brand Column -->
          <div class="footer-brand">
            <a href="/" class="brand-logo" style="color: #FFFFFF;">
              <div class="brand-logo-mark">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="42" stroke="#0088CC" stroke-width="9" stroke-linecap="round" stroke-dasharray="190 70" />
                  <circle cx="50" cy="50" r="20" stroke="#0088CC" stroke-width="9" />
                  <path d="M48 30C48 30 50 18 64 12" stroke="#0088CC" stroke-width="9" stroke-linecap="round" />
                </svg>
              </div>
              <span class="brand-text">REVOLUTION <span>6</span></span>
            </a>
            <p class="footer-subtitle">${brand.contact.subtitle}</p>
          </div>

          <!-- Navigation Column -->
          <div>
            <div class="footer-col-heading">Architecture</div>
            <ul class="footer-nav-list">
              <li><a href="/" class="footer-nav-link">Home</a></li>
              <li><a href="/services" class="footer-nav-link">Services</a></li>
              <li><a href="/solutions" class="footer-nav-link">Solutions</a></li>
              <li><a href="/careers" class="footer-nav-link">Careers</a></li>
            </ul>
          </div>

          <!-- Practices Column -->
          <div>
            <div class="footer-col-heading">Practices</div>
            <ul class="footer-nav-list">
              <li><a href="/services#accounting" class="footer-nav-link">Accounting</a></li>
              <li><a href="/services#software" class="footer-nav-link">Software Consulting</a></li>
              <li><a href="/services#wms" class="footer-nav-link">WMS & Operations</a></li>
            </ul>
          </div>

          <!-- Verified Contact Column -->
          <div>
            <div class="footer-col-heading">Contact</div>
            <div class="footer-contact-item">
              <span class="footer-contact-label">${brand.contact.emailLabel}</span>
              <a href="mailto:${brand.contact.email}" class="footer-contact-value">${brand.contact.email}</a>
            </div>
            <div class="footer-contact-item">
              <span class="footer-contact-label">${brand.contact.phoneLabel}</span>
              <a href="tel:${brand.contact.phone.replace(/[^+\d]/g, '')}" class="footer-contact-value">${brand.contact.phone}</a>
            </div>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="footer-bottom">
          <div>${brand.copyright}</div>
          <div style="display: flex; gap: 24px;">
            <span>Technology / Intelligence / Transformation</span>
          </div>
        </div>
      </div>
    </footer>
  `;
}
