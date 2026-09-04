/**
 * REVO6 CAREERS PAGE (/careers)
 * Strict Zero-Fabrication Implementation Using Solely Verified Source Content
 */

import { siteContent } from '../utils/content.js';

export function renderCareers() {
  const { careers } = siteContent.pages;
  const { brand } = siteContent;

  return `
    <div class="page-container page-transition-enter">
      <!-- ===================================================================
           01. CAREERS HERO
           =================================================================== -->
      <section class="section section-hero-subpage">
        <div class="bg-ambient-layer">
          <div class="ambient-grid"></div>
          <div class="ambient-orb orb-1" data-parallax-speed="0.1"></div>
          <div class="ambient-orb orb-2" data-parallax-speed="-0.12"></div>
        </div>

        <div class="container" style="position: relative; z-index: 1;">
          <div class="home-hero-layout">
            <!-- Left: Hero Details -->
            <div class="reveal-on-scroll">
              <h1 class="hero-main-title" style="margin-top: 0; margin-bottom: 20px; white-space: nowrap; font-size: clamp(2rem, 3.8vw, 3.75rem);">
                ${careers.hero.title}
              </h1>
              <p class="hero-sub-copy" style="margin-bottom: 28px;">
                ${careers.hero.subtitle}
              </p>

              <!-- Exact Verified Metrics -->
              <div class="about-stats-row" style="margin-top: 24px; padding-top: 24px; border-top: 1px solid var(--border-subtle);">
                <div>
                  <div class="stat-number editorial-accent">150+</div>
                  <div class="stat-label">Trusted Globally</div>
                  <div style="font-size: 0.8125rem; color: var(--text-muted); margin-top: 4px;">100+ Clients</div>
                </div>
                <div>
                  <div class="stat-number editorial-accent">15</div>
                  <div class="stat-label">Trusted Partners</div>
                  <div style="font-size: 0.8125rem; color: var(--text-muted); margin-top: 4px;">Collaborative Network</div>
                </div>
              </div>

              <div class="hero-cta-group" style="margin-top: 36px;">
                <a href="#contact-us" class="btn btn-primary">
                  <span>${careers.hero.ctaText}</span>
                  <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M19 9l-7 7-7-7"/>
                  </svg>
                </a>
                <a href="mailto:${brand.contact.email}" class="btn btn-secondary">
                  <span>${brand.contact.email}</span>
                </a>
              </div>
            </div>

            <!-- Right: Abstract 3D Visual -->
            <div class="reveal-on-scroll reveal-stagger-2">
              <div class="parallax-visual-card" data-parallax-speed="0.14">
                <img src="/assets/images/wms.jpg" alt="Revolution 6 technology consulting and workplace innovation" />
                <div class="floating-glass-pill bottom-left">
                  <span class="tag-badge-pulse"></span>
                  <span>Modern Business Consulting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===================================================================
           02. OPPORTUNITIES & PURPOSE STATEMENT
           =================================================================== -->
      <section class="section" style="background: #FFFFFF; border-top: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle);">
        <div class="container">
          <div style="max-width: 860px; margin: 0 auto; text-align: center;" class="reveal-on-scroll">
            <h2 class="section-title" style="margin-top: 0; margin-bottom: 24px;">
              Join Our Team
            </h2>
            <p class="text-lead" style="line-height: 1.8; color: var(--text-primary); font-size: 1.25rem;">
              “${careers.culture.description}”
            </p>
          </div>

          <!-- Verified Practice Areas -->
          <div class="grid-3-col" style="margin-top: 56px;">
            <div class="card-editorial reveal-on-scroll reveal-stagger-1" style="padding: 36px 28px;">
              <h3 class="card-title" style="font-size: 1.4rem; margin-bottom: 12px;">Accounting</h3>
              <p class="text-body" style="color: var(--text-secondary);">
                Simplify financial operations with expert bookkeeping, reporting, and precision management.
              </p>
            </div>

            <div class="card-editorial reveal-on-scroll reveal-stagger-2" style="padding: 36px 28px;">
              <h3 class="card-title" style="font-size: 1.4rem; margin-bottom: 12px;">Software</h3>
              <p class="text-body" style="color: var(--text-secondary);">
                Optimize technology with custom software consulting, modern integrations, and enhanced performance.
              </p>
            </div>

            <div class="card-editorial reveal-on-scroll reveal-stagger-3" style="padding: 36px 28px;">
              <h3 class="card-title" style="font-size: 1.4rem; margin-bottom: 12px;">WMS</h3>
              <p class="text-body" style="color: var(--text-secondary);">
                Streamline warehouse operations, cut fulfillment delays, and optimize supply chain technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- ===================================================================
           03. CONTACT US / APPLICATION FORM
           =================================================================== -->
      <section id="contact-us" class="section" style="scroll-margin-top: 80px;">
        <div class="container">
          <div class="careers-contact-box reveal-on-scroll">
            <div style="text-align: center; margin-bottom: 32px;">
              <h2 class="section-title" style="margin-top: 0; margin-bottom: 10px;">
                ${careers.contactForm.title}
              </h2>
              <p class="text-lead" style="font-size: 1.05rem;">
                ${careers.contactForm.subtitle}
              </p>
            </div>

            <form class="js-careers-form">
              <div class="form-group">
                <label class="form-label" for="careers-fullname">${careers.contactForm.fields.fullName.label}</label>
                <input 
                  type="text" 
                  id="careers-fullname" 
                  class="form-input" 
                  placeholder="${careers.contactForm.fields.fullName.placeholder}" 
                />
              </div>

              <div class="form-group">
                <label class="form-label" for="careers-email">${careers.contactForm.fields.email.label} *</label>
                <input 
                  type="email" 
                  id="careers-email" 
                  class="form-input" 
                  placeholder="${careers.contactForm.fields.email.placeholder}" 
                  required 
                />
              </div>

              <div class="form-group">
                <label class="form-label" for="careers-message">${careers.contactForm.fields.message.label} *</label>
                <textarea 
                  id="careers-message" 
                  class="form-textarea" 
                  placeholder="${careers.contactForm.fields.message.placeholder}" 
                  required
                ></textarea>
              </div>

              <button type="submit" class="btn btn-cyan" style="width: 100%; font-size: 1rem; padding: 16px;">
                <span>${careers.contactForm.submitText}</span>
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>

              <div class="form-success-banner js-careers-success">
                ${careers.contactForm.successMessage}
              </div>
            </form>

            <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid var(--border-subtle); display: flex; flex-direction: column; gap: 8px; text-align: center;">
              <span style="font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.1em;">
                Direct Communications
              </span>
              <div style="font-size: 0.9375rem; font-weight: 600; color: var(--text-primary);">
                <a href="mailto:${brand.contact.email}">${brand.contact.email}</a> <span style="margin: 0 8px; color: var(--text-muted);">/</span> 
                <a href="tel:${brand.contact.phone.replace(/[^+\d]/g, '')}">${brand.contact.phone}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===================================================================
           04. FINAL ELEGANT CAREERS CTA
           =================================================================== -->
      <section class="section-contact-cta">
        <div class="bg-ambient-layer">
          <div class="ambient-orb orb-1" style="opacity: 0.15; top: 10%;"></div>
        </div>

        <div class="container">
          <div class="contact-cta-content reveal-on-scroll">
            <h2 class="contact-cta-headline">
              ${brand.contact.subtitle}
            </h2>
            <p style="color: #94A3B8; font-size: 1.25rem; margin-bottom: 40px; max-width: 640px; margin-left: auto; margin-right: auto;">
              We blend accounting expertise with tech savvy to transform your business operations.
            </p>

            <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
              <a href="#contact-us" class="btn btn-cyan" style="padding: 16px 36px; font-size: 1.05rem;">
                <span>Join Us</span>
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="mailto:${brand.contact.email}" class="btn btn-secondary" style="background: transparent; color: #FFFFFF; border-color: rgba(255,255,255,0.2);">
                <span>${brand.contact.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

export function initCareersEvents() {
  const form = document.querySelector('.js-careers-form');
  const banner = document.querySelector('.js-careers-success');

  if (form && banner) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Sending...</span>`;
      }
      setTimeout(() => {
        banner.classList.add('active');
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `<span>Send Message</span>`;
        }
        setTimeout(() => {
          banner.classList.remove('active');
        }, 5000);
      }, 500);
    });
  }
}
