/**
 * REVO6 SERVICES PAGE (/services)
 * Editorial Practice Chapters, Sticky Sub-Nav, & Proven Impact
 */

import { siteContent } from '../utils/content.js';

export function renderServices() {
  const { services } = siteContent.pages;
  const { brand } = siteContent;

  return `
    <div class="page-container page-transition-enter">
      <!-- ===================================================================
           01. SERVICES HERO
           =================================================================== -->
      <section class="section section-hero-subpage">
        <div class="bg-ambient-layer">
          <div class="ambient-grid"></div>
          <div class="ambient-orb orb-1" data-parallax-speed="0.1"></div>
        </div>

        <div class="container" style="position: relative; z-index: 1;">
          <div class="home-hero-layout">
            <!-- Left: Heading & Subtitle -->
            <div class="reveal-on-scroll">
              <h1 class="hero-main-title" style="margin-top: 0; margin-bottom: 20px;">
                ${services.hero.title}
              </h1>
              <p class="hero-sub-copy" style="margin-bottom: 32px;">
                ${services.hero.subtitle}
              </p>
              <div class="hero-cta-group">
                <a href="#accounting" class="btn btn-primary">
                  <span>Explore Practices</span>
                  <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M19 9l-7 7-7-7"/>
                  </svg>
                </a>
                <button class="btn btn-secondary js-open-contact-modal">
                  <span>Inquire Directly</span>
                </button>
              </div>
            </div>

            <!-- Right: Parallax Visual -->
            <div class="reveal-on-scroll reveal-stagger-2">
              <div class="parallax-visual-card" data-parallax-speed="0.14">
                <img src="/assets/images/software.jpg" alt="Revolution 6 Services and Operational Precision" />
                <div class="floating-glass-pill bottom-left">
                  <span class="tag-badge-pulse"></span>
                  <span>Transforming Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===================================================================
           02. STICKY SERVICE IN-PAGE SUB-NAVIGATION
           =================================================================== -->
      <nav class="sticky-service-nav-wrap" aria-label="Services In-page Navigation">
        <div class="container">
          <div class="service-subnav-list">
            <a href="#accounting" class="service-subnav-item js-subnav-link active" data-target="accounting">
              <span class="service-subnav-num">01</span>
              <span>Accounting</span>
            </a>
            <a href="#software" class="service-subnav-item js-subnav-link" data-target="software">
              <span class="service-subnav-num">02</span>
              <span>Software</span>
            </a>
            <a href="#wms" class="service-subnav-item js-subnav-link" data-target="wms">
              <span class="service-subnav-num">03</span>
              <span>WMS</span>
            </a>
            <a href="#projects" class="service-subnav-item js-subnav-link" data-target="projects">
              <span class="service-subnav-num">04</span>
              <span>Our Projects</span>
            </a>
          </div>
        </div>
      </nav>

      <!-- ===================================================================
           03. SERVICE 01 — ACCOUNTING CHAPTER
           =================================================================== -->
      <section id="accounting" class="service-chapter-section js-chapter-section">
        <div class="container">
          <div class="service-chapter-grid">
            <!-- Details -->
            <div class="reveal-on-scroll">
              <h2 class="chapter-large-title">Accounting</h2>

              <p class="chapter-lead-quote">
                Simplify financial operations with expert bookkeeping and reporting.
              </p>

              <p class="chapter-body-copy">
                Accurate financial management tailored to your business needs. We blend accounting expertise with modern tech savvy to streamline your financial operations efficiently.
              </p>

              <div class="chapter-capabilities-list">
                <div class="chapter-capability-card">
                  <div class="capability-icon-bullet">✓</div>
                  <div class="capability-text-content">
                    <strong>Streamline your financial operations efficiently</strong>
                    <div style="font-size: 0.8125rem; color: var(--text-muted); margin-top: 2px;">Automated closing workflows and reconciliations.</div>
                  </div>
                </div>

                <div class="chapter-capability-card">
                  <div class="capability-icon-bullet">✓</div>
                  <div class="capability-text-content">
                    <strong>Accurate reporting tailored to your needs</strong>
                    <div style="font-size: 0.8125rem; color: var(--text-muted); margin-top: 2px;">Customized executive reporting frameworks.</div>
                  </div>
                </div>

                <div class="chapter-capability-card">
                  <div class="capability-icon-bullet">✓</div>
                  <div class="capability-text-content">
                    <strong>Expert support for complex accounting challenges</strong>
                    <div style="font-size: 0.8125rem; color: var(--text-muted); margin-top: 2px;">High-level regulatory and multi-entity advisory.</div>
                  </div>
                </div>
              </div>

              <button class="btn btn-primary js-open-contact-modal" data-service="Accounting">
                <span>Consult on Accounting</span>
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>

            <!-- Parallax Visual & Telemetry -->
            <div class="reveal-on-scroll reveal-stagger-2">
              <div class="parallax-visual-card" data-parallax-speed="0.14">
                <img src="/assets/images/accounting.jpg" alt="Accounting Intelligence and Precision Data" />
                <div class="floating-glass-pill bottom-left">
                  <span class="tag-badge-pulse"></span>
                  <span>Financial Precision & Clarity</span>
                </div>
              </div>

              <div class="chapter-spec-widget" data-parallax-speed="0.08">
                <div class="spec-widget-item">
                  <span class="spec-widget-label">Practice Focus</span>
                  <span class="spec-widget-val">Bookkeeping & Reporting</span>
                </div>
                <div class="spec-widget-item">
                  <span class="spec-widget-label">Impact Metric</span>
                  <span class="spec-widget-val">Accelerated Closings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===================================================================
           04. SERVICE 02 — SOFTWARE CHAPTER
           =================================================================== -->
      <section id="software" class="service-chapter-section js-chapter-section">
        <div class="container">
          <div class="service-chapter-grid layout-reversed">
            <!-- Details -->
            <div class="reveal-on-scroll">
              <h2 class="chapter-large-title">Software</h2>

              <p class="chapter-lead-quote">
                Optimize your tech with custom software consulting and integration.
              </p>

              <p class="chapter-body-copy">
                Consulting to optimize your software and enhance performance. Modern tech integration customized to you, driving smoother workflows and resilient operations.
              </p>

              <div class="chapter-capabilities-list">
                <div class="chapter-capability-card">
                  <div class="capability-icon-bullet">✓</div>
                  <div class="capability-text-content">
                    <strong>Consulting to optimize your software and enhance performance</strong>
                    <div style="font-size: 0.8125rem; color: var(--text-muted); margin-top: 2px;">Architecture evaluation and throughput tuning.</div>
                  </div>
                </div>

                <div class="chapter-capability-card">
                  <div class="capability-icon-bullet">✓</div>
                  <div class="capability-text-content">
                    <strong>Modern tech integration customized to you</strong>
                    <div style="font-size: 0.8125rem; color: var(--text-muted); margin-top: 2px;">Bespoke integrations linking legacy with cloud.</div>
                  </div>
                </div>

                <div class="chapter-capability-card">
                  <div class="capability-icon-bullet">✓</div>
                  <div class="capability-text-content">
                    <strong>Enhanced software performance, smoother workflows</strong>
                    <div style="font-size: 0.8125rem; color: var(--text-muted); margin-top: 2px;">Eliminating friction for engineering and operations.</div>
                  </div>
                </div>
              </div>

              <button class="btn btn-primary js-open-contact-modal" data-service="Software">
                <span>Consult on Software</span>
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>

            <!-- Parallax Visual & Telemetry -->
            <div class="reveal-on-scroll reveal-stagger-2">
              <div class="parallax-visual-card" data-parallax-speed="0.14">
                <img src="/assets/images/software.jpg" alt="Software Architecture Consulting" />
                <div class="floating-glass-pill top-right">
                  <span class="tag-badge-pulse"></span>
                  <span>Modern Integrations</span>
                </div>
              </div>

              <div class="chapter-spec-widget" data-parallax-speed="0.08">
                <div class="spec-widget-item">
                  <span class="spec-widget-label">Practice Focus</span>
                  <span class="spec-widget-val">Software Consulting</span>
                </div>
                <div class="spec-widget-item">
                  <span class="spec-widget-label">Impact Metric</span>
                  <span class="spec-widget-val">Workflow Optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===================================================================
           05. SERVICE 03 — WMS (WAREHOUSE MANAGEMENT) CHAPTER
           =================================================================== -->
      <section id="wms" class="service-chapter-section js-chapter-section">
        <div class="container">
          <div class="service-chapter-grid">
            <!-- Details -->
            <div class="reveal-on-scroll">
              <h2 class="chapter-large-title">Warehouse Management (WMS)</h2>

              <p class="chapter-lead-quote">
                Streamlining workflows with smart technology solutions.
              </p>

              <p class="chapter-body-copy">
                Revamped warehouse processes that cut delays. We engineer end-to-end supply chain operational clarity, uniting automated tracking, inventory management, and rapid dispatch.
              </p>

              <div class="chapter-capabilities-list">
                <div class="chapter-capability-card">
                  <div class="capability-icon-bullet">✓</div>
                  <div class="capability-text-content">
                    <strong>Revamped warehouse processes that cut delays</strong>
                    <div style="font-size: 0.8125rem; color: var(--text-muted); margin-top: 2px;">Optimized inventory velocity and fulfillment speed.</div>
                  </div>
                </div>

                <div class="chapter-capability-card">
                  <div class="capability-icon-bullet">✓</div>
                  <div class="capability-text-content">
                    <strong>Streamline your business operations efficiently and effectively</strong>
                    <div style="font-size: 0.8125rem; color: var(--text-muted); margin-top: 2px;">Real-time stock visibility and logistics orchestration.</div>
                  </div>
                </div>
              </div>

              <button class="btn btn-primary js-open-contact-modal" data-service="WMS">
                <span>Consult on WMS</span>
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>

            <!-- Parallax Visual & Telemetry -->
            <div class="reveal-on-scroll reveal-stagger-2">
              <div class="parallax-visual-card" data-parallax-speed="0.14">
                <img src="/assets/images/wms.jpg" alt="WMS and Supply Chain Optimization" />
                <div class="floating-glass-pill bottom-left">
                  <span class="tag-badge-pulse"></span>
                  <span>Automated Supply Chains</span>
                </div>
              </div>

              <div class="chapter-spec-widget" data-parallax-speed="0.08">
                <div class="spec-widget-item">
                  <span class="spec-widget-label">Practice Focus</span>
                  <span class="spec-widget-val">WMS & Operations</span>
                </div>
                <div class="spec-widget-item">
                  <span class="spec-widget-label">Impact Metric</span>
                  <span class="spec-widget-val">Zero Delay Logistics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===================================================================
           06. OUR PROJECTS / PROVEN IMPACT SECTION
           =================================================================== -->
      <section id="projects" class="service-projects-section js-chapter-section">
        <div class="container">
          <div style="max-width: 720px;" class="reveal-on-scroll">
            <h2 class="section-title" style="margin-top: 0; margin-bottom: 12px;">
              ${services.projects.title}
            </h2>
            <p class="text-lead">
              ${services.projects.subtitle}
            </p>
          </div>

          <div class="projects-grid-wrap">
            ${services.projects.items.map((proj, idx) => `
              <div class="service-project-card js-service-project-card reveal-on-scroll reveal-stagger-${idx + 1}">
                <div>
                  <div style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: var(--brand-cyan); margin-bottom: 12px; letter-spacing: 0.05em;">${proj.category}</div>
                  <h3 class="card-title" style="font-size: 1.65rem; margin-bottom: 12px;">${proj.title}</h3>
                  <p class="text-lead" style="font-size: 1.1rem; color: var(--text-primary); font-weight: 600; margin-bottom: 12px;">
                    ${proj.summary}
                  </p>
                  <p class="text-muted" style="line-height: 1.6;">
                    ${proj.impact}
                  </p>
                </div>
                <div class="service-project-arrow">
                  →
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- ===================================================================
           07. FINAL SERVICES CTA
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
              Partner with Revolution 6 for expert accounting, custom software engineering, and streamlined warehouse management.
            </p>

            <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
              <button class="btn btn-cyan js-open-contact-modal" style="padding: 16px 36px; font-size: 1.05rem;">
                <span>Start Consultation</span>
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
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

export function initServicesEvents() {
  // Sticky in-page sub-navigation active tracking
  const subnavLinks = document.querySelectorAll('.js-subnav-link');
  const sections = document.querySelectorAll('.js-chapter-section');

  if (sections.length > 0 && subnavLinks.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          subnavLinks.forEach(link => {
            if (link.getAttribute('data-target') === id) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    });

    sections.forEach(s => observer.observe(s));
  }

  // Project cards click to open contact modal
  document.querySelectorAll('.js-service-project-card').forEach(card => {
    card.addEventListener('click', () => {
      const modal = document.querySelector('.js-contact-modal');
      if (modal) {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });
}
