/**
 * REVO6 HOMEPAGE (/)
 * 10-Section Master Editorial Experience (Clean Typography, No Badges)
 */

import { siteContent } from '../utils/content.js';

export function renderHome() {
  const { home } = siteContent.pages;
  const { brand } = siteContent;

  return `
    <div class="page-container page-transition-enter">
      <!-- ===================================================================
           01. HERO SECTION
           =================================================================== -->
      <section class="home-hero">
        <!-- Parallax Ambient Depth Layers -->
        <div class="bg-ambient-layer">
          <div class="ambient-grid"></div>
          <div class="ambient-orb orb-1" data-parallax-speed="0.14" style="opacity: 0.25; top: -5%; right: 20%;"></div>
          <div class="ambient-orb orb-2" data-parallax-speed="-0.18" style="opacity: 0.20; top: 30%; left: 15%;"></div>
        </div>

        <div class="container" style="position: relative; z-index: 2;">
          <div class="home-hero-center-wrap">
            <div class="hero-content-col reveal-on-scroll">
              <h1 class="hero-main-title">
                ${home.hero.title}
              </h1>

              <p class="hero-sub-copy">
                ${home.hero.subtitle}
              </p>

              <div class="hero-cta-group">
                <a href="/services" class="btn btn-primary" style="padding: 16px 36px; font-size: 1.05rem;">
                  <span>${home.hero.ctaText}</span>
                  <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
                <button class="btn btn-secondary js-open-contact-modal" style="padding: 16px 30px; font-size: 1.05rem;">
                  <span>Inquire Directly</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Subtle Scroll Down Indicator -->
        <a href="#transformation" class="hero-scroll-indicator" aria-label="Scroll to next section">
          <div class="scroll-indicator-mouse">
            <div class="scroll-indicator-dot"></div>
          </div>
          <span>Scroll</span>
        </a>
      </section>

      <!-- ===================================================================
           02. SECTION 02 — BUSINESS TRANSFORMATION
           =================================================================== -->
      <section id="transformation" class="section section-transformation" style="scroll-margin-top: 60px;">
        <div class="container">
          <div class="transformation-statement-grid">
            <div class="reveal-on-scroll">
              <h2 class="transformation-headline">
                ${home.hero.title}
              </h2>
              <p class="transformation-thesis">
                ${home.hero.subtitle}. At Revolution 6, we bridge the gap between strategic accounting, enterprise software engineering, and supply chain logistics to build resilient, high-velocity operational foundations.
              </p>
            </div>

            <div class="reveal-on-scroll reveal-stagger-2">
              <div class="transformation-visual-wrap" data-parallax-speed="0.14">
                <img src="/assets/images/software.jpg" alt="Revolution 6 software engineering and transformation" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===================================================================
           03. SECTION 03 — SERVICES ASYMMETRICAL PREVIEW
           =================================================================== -->
      <section class="section">
        <div class="container">
          <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 24px;" class="reveal-on-scroll">
            <div style="max-width: 640px;">
              <h2 class="section-title" style="margin-bottom: 12px;">
                ${home.servicesOverview.title}
              </h2>
              <p class="text-lead">
                ${home.servicesOverview.subtitle}
              </p>
            </div>
            <div>
              <a href="/services" class="btn btn-secondary">
                <span>View All Practices</span>
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Asymmetrical 3-Card Grid -->
          <div class="services-asymmetric-grid">
            <!-- 1. Wide Asymmetrical Hero Card: Accounting -->
            <div class="asymmetric-card-wide reveal-on-scroll">
              <div>
                <h3 class="card-title" style="font-size: 2rem; margin-bottom: 16px;">Accounting</h3>
                <p class="text-lead" style="margin-bottom: 16px; color: var(--text-primary); font-weight: 600;">
                  Accurate financial management tailored to your business needs.
                </p>
                <p class="text-body" style="margin-bottom: 28px;">
                  Simplify financial operations with expert bookkeeping, statutory compliance, and executive reporting frameworks.
                </p>
                <a href="/services#accounting" class="btn btn-primary">
                  <span>Explore Accounting</span>
                  <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
              <div class="service-card-media">
                <img src="/assets/images/accounting.jpg" alt="Accounting Intelligence" />
              </div>
            </div>

            <!-- 2. Tall Card: Software -->
            <div class="asymmetric-card-tall reveal-on-scroll reveal-stagger-1">
              <div>
                <div class="service-card-media" style="margin-bottom: 24px;">
                  <img src="/assets/images/software.jpg" alt="Software Consulting" />
                </div>
                <h3 class="card-title" style="margin-bottom: 12px;">Software</h3>
                <p class="text-body" style="margin-bottom: 24px;">
                  Consulting to optimize your software and enhance performance.
                </p>
              </div>
              <a href="/services#software" class="btn btn-secondary" style="justify-content: space-between;">
                <span>Software Practice</span>
                <span class="btn-icon">→</span>
              </a>
            </div>

            <!-- 3. Tall Card: WMS -->
            <div class="asymmetric-card-tall reveal-on-scroll reveal-stagger-2">
              <div>
                <div class="service-card-media" style="margin-bottom: 24px;">
                  <img src="/assets/images/wms.jpg" alt="Warehouse Management Systems" />
                </div>
                <h3 class="card-title" style="margin-bottom: 12px;">WMS</h3>
                <p class="text-body" style="margin-bottom: 24px;">
                  Streamlining workflows with smart technology solutions.
                </p>
              </div>
              <a href="/services#wms" class="btn btn-secondary" style="justify-content: space-between;">
                <span>WMS Practice</span>
                <span class="btn-icon">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- ===================================================================
           04. SECTION 04 — ACCOUNTING SPLIT-SCREEN STICKY
           =================================================================== -->
      <section class="section section-accounting-split">
        <div class="container">
          <div class="accounting-split-grid">
            <!-- Left: Exact Accounting Messaging -->
            <div class="reveal-on-scroll">
              <h2 class="section-title" style="margin-bottom: 18px;">
                Streamline your financial operations efficiently
              </h2>
              <p class="text-lead" style="margin-bottom: 24px;">
                Accurate reporting tailored to your needs. We provide full-spectrum accounting and financial clarity so leadership can execute with complete confidence.
              </p>

              <div class="accounting-pillars-list">
                <div class="accounting-pillar-item">
                  <div style="font-family: var(--font-display); font-size: 1.1rem; font-weight: 700; color: var(--text-primary); margin-bottom: 4px;">
                    Streamline your financial operations efficiently
                  </div>
                  <div style="font-size: 0.9375rem; color: var(--text-secondary);">
                    Modernized workflows that accelerate closing cycles and enhance accuracy.
                  </div>
                </div>

                <div class="accounting-pillar-item">
                  <div style="font-family: var(--font-display); font-size: 1.1rem; font-weight: 700; color: var(--text-primary); margin-bottom: 4px;">
                    Accurate reporting tailored to your needs
                  </div>
                  <div style="font-size: 0.9375rem; color: var(--text-secondary);">
                    Customized reporting structures delivering instant fiscal intelligence.
                  </div>
                </div>

                <div class="accounting-pillar-item">
                  <div style="font-family: var(--font-display); font-size: 1.1rem; font-weight: 700; color: var(--text-primary); margin-bottom: 4px;">
                    Expert support for complex accounting challenges
                  </div>
                  <div style="font-size: 0.9375rem; color: var(--text-secondary);">
                    High-level advisory navigating regulatory nuances and enterprise scale.
                  </div>
                </div>
              </div>
            </div>

            <!-- Right: 3D Visual -->
            <div class="reveal-on-scroll reveal-stagger-2">
              <div class="parallax-visual-card" data-parallax-speed="0.14">
                <img src="/assets/images/accounting.jpg" alt="Accounting Intelligence and Data Precision" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===================================================================
           05. SECTION 05 — COMPANY / ABOUT
           =================================================================== -->
      <section class="section">
        <div class="container">
          <div class="about-quote-box reveal-on-scroll">
            <p class="about-editorial-text">
              “${home.about.body}”
            </p>

            <div style="margin-top: 36px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; border-top: 1px solid var(--border-subtle); padding-top: 24px;">
              <span style="font-family: var(--font-mono); font-size: 0.8125rem; letter-spacing: 0.12em; color: var(--brand-cyan); text-transform: uppercase;">
                Revolution 6 Advisory Group
              </span>
              <a href="/solutions#who-we-are" class="btn btn-secondary">
                <span>Learn More About Us</span>
                <span style="margin-left: 4px;">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- ===================================================================
           06. SECTION 06 — TRUST / NUMBERS (ANIMATED COUNTERS)
           =================================================================== -->
      <section class="section section-trust-numbers">
        <div class="bg-ambient-layer">
          <div class="ambient-orb orb-1" style="opacity: 0.12; top: -20%;"></div>
        </div>

        <div class="container" style="position: relative; z-index: 1;">
          <div style="max-width: 680px; margin-bottom: 48px;" class="reveal-on-scroll">
            <h2 class="section-title" style="color: #FFFFFF; margin-bottom: 12px;">
              Trusted Performance
            </h2>
            <p style="color: #94A3B8; font-size: 1.15rem;">
              Measurable impact delivered across modern business consulting, financial engineering, and supply chains.
            </p>
          </div>

          <div class="trust-stats-grid">
            <!-- Stat 1: 150+ -->
            <div class="trust-stat-card reveal-on-scroll reveal-stagger-1">
              <div class="trust-stat-label">Trusted Globally</div>
              <div class="trust-stat-number" data-counter="150" data-suffix="+">
                0+
              </div>
              <div class="trust-stat-subtext">
                100+ Clients across high-growth and enterprise industries.
              </div>
            </div>

            <!-- Stat 2: 15 -->
            <div class="trust-stat-card reveal-on-scroll reveal-stagger-2">
              <div class="trust-stat-label">Partnership Network</div>
              <div class="trust-stat-number" data-counter="15" data-suffix="">
                0
              </div>
              <div class="trust-stat-subtext">
                15 Trusted Partners collaborating across modern tech ecosystems.
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===================================================================
           07. SECTION 07 — SOLUTIONS MASTER SHOWCASE
           =================================================================== -->
      <section class="section">
        <div class="container">
          <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 24px;" class="reveal-on-scroll">
            <div style="max-width: 680px;">
              <h2 class="section-title" style="margin-bottom: 12px;">
                Our Solutions
              </h2>
              <p class="text-lead">
                Digital Solutions That Bring Accuracy, Efficiency, and Clarity
              </p>
            </div>
            <div>
              <a href="/solutions" class="btn btn-primary">
                <span>View Full Solutions Page</span>
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Master Showcase Layout -->
          <div class="solutions-master-showcase reveal-on-scroll">
            <!-- Left Rail: Chapter Selectors -->
            <div class="solutions-rail-list" role="tablist" aria-label="Solutions Chapters">
              <div class="solution-rail-item js-solution-tab active" data-target="panel-accounting" role="tab" aria-selected="true" tabindex="0">
                <span class="solution-rail-title">Accounting Streamline</span>
                <span class="solution-rail-summary">Simplified financial processes for clarity.</span>
              </div>

              <div class="solution-rail-item js-solution-tab" data-target="panel-software" role="tab" aria-selected="false" tabindex="0">
                <span class="solution-rail-title">Software Consulting</span>
                <span class="solution-rail-summary">Tailored tech solutions boosting efficiency.</span>
              </div>

              <div class="solution-rail-item js-solution-tab" data-target="panel-wms" role="tab" aria-selected="false" tabindex="0">
                <span class="solution-rail-title">WMS Optimization</span>
                <span class="solution-rail-summary">Enhanced warehouse processes saving time.</span>
              </div>

              <div class="solution-rail-item js-solution-tab" data-target="panel-digital" role="tab" aria-selected="false" tabindex="0">
                <span class="solution-rail-title">Digital Change</span>
                <span class="solution-rail-summary">Driving smooth tech transitions daily.</span>
              </div>
            </div>

            <!-- Right Stage: Interactive Chapter Content -->
            <div class="solutions-stage-wrap">
              <!-- Panel 01: Accounting Streamline -->
              <div id="panel-accounting" class="solution-stage-panel js-solution-panel active" role="tabpanel">
                <div>
                  <div class="solution-stage-header">
                    <h3 class="solution-stage-title">Accounting Streamline</h3>
                  </div>
                  <div class="solution-stage-quote">
                    “Simplified financial processes for clarity.”
                  </div>
                  <p class="solution-stage-desc">
                    Reconstructing fragmented accounting structures into unified, compliant frameworks. By simplifying and optimizing financial processes, we help you maintain accuracy and make informed executive decisions with complete clarity.
                  </p>
                  <div class="solution-deliverables-list">
                    <div class="solution-deliverable-item">
                      <span class="check-icon">✓</span>
                      <span>Automated closing workflows and ledger reconciliations</span>
                    </div>
                    <div class="solution-deliverable-item">
                      <span class="check-icon">✓</span>
                      <span>Custom executive reporting frameworks for rapid fiscal insights</span>
                    </div>
                    <div class="solution-deliverable-item">
                      <span class="check-icon">✓</span>
                      <span>Statutory compliance and precision audit preparation</span>
                    </div>
                  </div>
                  <div style="display: flex; gap: 16px; flex-wrap: wrap;">
                    <a href="/solutions#accounting-streamline" class="btn btn-primary">
                      <span>Explore Chapter 01</span>
                      <span class="btn-icon">→</span>
                    </a>
                    <button class="btn btn-secondary js-open-contact-modal" data-solution="Accounting Streamline">
                      <span>Inquire on Accounting</span>
                    </button>
                  </div>
                </div>
                <div class="solution-stage-media">
                  <img src="/assets/images/accounting.jpg" alt="Accounting Streamline Solution" />
                  <div class="solution-stage-telemetry">
                    <span>Precision Ledger / Accelerated Closings</span>
                  </div>
                </div>
              </div>

              <!-- Panel 02: Software Consulting -->
              <div id="panel-software" class="solution-stage-panel js-solution-panel" role="tabpanel">
                <div>
                  <div class="solution-stage-header">
                    <h3 class="solution-stage-title">Software Consulting</h3>
                  </div>
                  <div class="solution-stage-quote">
                    “Tailored tech solutions boosting efficiency.”
                  </div>
                  <p class="solution-stage-desc">
                    Maximize your operational efficiency with our Software Consulting services. We provide tailored technology strategies and custom software architectures that eliminate legacy bottlenecks and scale with your growth.
                  </p>
                  <div class="solution-deliverables-list">
                    <div class="solution-deliverable-item">
                      <span class="check-icon">✓</span>
                      <span>Modern software architecture evaluation & throughput tuning</span>
                    </div>
                    <div class="solution-deliverable-item">
                      <span class="check-icon">✓</span>
                      <span>Bespoke integrations linking legacy with cloud infrastructure</span>
                    </div>
                    <div class="solution-deliverable-item">
                      <span class="check-icon">✓</span>
                      <span>Enhanced engineering performance & friction-free digital workflows</span>
                    </div>
                  </div>
                  <div style="display: flex; gap: 16px; flex-wrap: wrap;">
                    <a href="/solutions#software-consulting" class="btn btn-primary">
                      <span>Explore Chapter 02</span>
                      <span class="btn-icon">→</span>
                    </a>
                    <button class="btn btn-secondary js-open-contact-modal" data-solution="Software Consulting">
                      <span>Inquire on Software</span>
                    </button>
                  </div>
                </div>
                <div class="solution-stage-media">
                  <img src="/assets/images/software.jpg" alt="Software Consulting Solution" />
                  <div class="solution-stage-telemetry">
                    <span>Cloud Architecture / High Throughput</span>
                  </div>
                </div>
              </div>

              <!-- Panel 03: WMS Optimization -->
              <div id="panel-wms" class="solution-stage-panel js-solution-panel" role="tabpanel">
                <div>
                  <div class="solution-stage-header">
                    <h3 class="solution-stage-title">WMS Optimization</h3>
                  </div>
                  <div class="solution-stage-quote">
                    “Enhanced warehouse processes saving time.”
                  </div>
                  <p class="solution-stage-desc">
                    Refining warehouse management systems to eliminate fulfillment delays and automate inventory tracking across facilities. We engineer end-to-end operational clarity ensuring a responsive supply chain.
                  </p>
                  <div class="solution-deliverables-list">
                    <div class="solution-deliverable-item">
                      <span class="check-icon">✓</span>
                      <span>Revamped warehouse processes that cut fulfillment delays</span>
                    </div>
                    <div class="solution-deliverable-item">
                      <span class="check-icon">✓</span>
                      <span>Real-time stock visibility and logistics orchestration</span>
                    </div>
                    <div class="solution-deliverable-item">
                      <span class="check-icon">✓</span>
                      <span>Automated tracking & inventory velocity across facilities</span>
                    </div>
                  </div>
                  <div style="display: flex; gap: 16px; flex-wrap: wrap;">
                    <a href="/solutions#wms-optimization" class="btn btn-primary">
                      <span>Explore Chapter 03</span>
                      <span class="btn-icon">→</span>
                    </a>
                    <button class="btn btn-secondary js-open-contact-modal" data-solution="WMS Optimization">
                      <span>Inquire on WMS</span>
                    </button>
                  </div>
                </div>
                <div class="solution-stage-media">
                  <img src="/assets/images/wms.jpg" alt="WMS Optimization Solution" />
                  <div class="solution-stage-telemetry">
                    <span>Zero Delay Logistics / Real-Time Tracking</span>
                  </div>
                </div>
              </div>

              <!-- Panel 04: Digital Change -->
              <div id="panel-digital" class="solution-stage-panel js-solution-panel" role="tabpanel">
                <div>
                  <div class="solution-stage-header">
                    <h3 class="solution-stage-title">Digital Change</h3>
                  </div>
                  <div class="solution-stage-quote">
                    “Driving smooth tech transitions daily.”
                  </div>
                  <p class="solution-stage-desc">
                    Navigate digital transitions smoothly with Revolution 6. We guide your business through every phase of digital change, ensuring continuous improvements, seamless tech adoption, and long-term success.
                  </p>
                  <div class="solution-deliverables-list">
                    <div class="solution-deliverable-item">
                      <span class="check-icon">✓</span>
                      <span>End-to-end change management minimizing transition friction</span>
                    </div>
                    <div class="solution-deliverable-item">
                      <span class="check-icon">✓</span>
                      <span>Continuous process improvements & operational onboarding</span>
                    </div>
                    <div class="solution-deliverable-item">
                      <span class="check-icon">✓</span>
                      <span>Sustainable digital velocity & high employee adoption</span>
                    </div>
                  </div>
                  <div style="display: flex; gap: 16px; flex-wrap: wrap;">
                    <a href="/solutions#digital-change" class="btn btn-primary">
                      <span>Explore Chapter 04</span>
                      <span class="btn-icon">→</span>
                    </a>
                    <button class="btn btn-secondary js-open-contact-modal" data-solution="Digital Change">
                      <span>Inquire on Digital Change</span>
                    </button>
                  </div>
                </div>
                <div class="solution-stage-media">
                  <img src="/assets/images/hero_abstract.jpg" alt="Digital Change Solution" />
                  <div class="solution-stage-telemetry">
                    <span>Smooth Adoption / Continuous Velocity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===================================================================
           08. SECTION 08 — NEWSLETTER
           =================================================================== -->
      <section class="section" style="background: #FFFFFF; border-top: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle);">
        <div class="container">
          <div class="newsletter-editorial-container reveal-on-scroll">
            <h2 class="section-title" style="margin-bottom: 12px;">
              ${home.newsletter.title}
            </h2>
            <p class="text-lead" style="margin-bottom: 36px;">
              ${home.newsletter.subtitle}
            </p>

            <form class="newsletter-form js-newsletter-form" style="margin: 0 auto;">
              <input 
                type="email" 
                class="form-input" 
                placeholder="Your Email" 
                required 
                aria-label="Your Email"
              />
              <button type="submit" class="btn btn-cyan" style="flex-shrink: 0;">
                <span>${home.newsletter.buttonText}</span>
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </form>

            <div class="form-success-banner js-newsletter-success">
              ${home.newsletter.successMessage}
            </div>
          </div>
        </div>
      </section>

      <!-- ===================================================================
           09. SECTION 09 — CONTACT CTA
           =================================================================== -->
      <section class="section-contact-cta">
        <div class="bg-ambient-layer">
          <div class="ambient-orb orb-2" style="opacity: 0.18; top: 10%;"></div>
        </div>

        <div class="container">
          <div class="contact-cta-content reveal-on-scroll">
            <h2 class="contact-cta-headline">
              ${brand.contact.subtitle}
            </h2>
            <p style="color: #94A3B8; font-size: 1.25rem; margin-bottom: 40px; max-width: 640px; margin-left: auto; margin-right: auto;">
              Connect with Revolution 6 for modern accounting, custom software engineering, and supply chain excellence.
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

export function initHomeEvents() {
  // Solutions Master Showcase Tab Switching
  const solutionTabs = document.querySelectorAll('.js-solution-tab');
  const solutionPanels = document.querySelectorAll('.js-solution-panel');

  if (solutionTabs.length > 0 && solutionPanels.length > 0) {
    solutionTabs.forEach(tab => {
      const activateTab = () => {
        const targetId = tab.getAttribute('data-target');
        solutionTabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        solutionPanels.forEach(p => p.classList.remove('active'));

        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        const targetPanel = document.getElementById(targetId);
        if (targetPanel) {
          targetPanel.classList.add('active');
        }
      };

      tab.addEventListener('click', activateTab);
      tab.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activateTab();
        }
      });
    });
  }

  // Newsletter Form Handler
  const form = document.querySelector('.js-newsletter-form');
  const banner = document.querySelector('.js-newsletter-success');

  if (form && banner) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      banner.classList.add('active');
      form.reset();
      setTimeout(() => {
        banner.classList.remove('active');
      }, 4000);
    });
  }

  // Animated Counter Logic for Section 06 (Trust / Numbers)
  const counters = document.querySelectorAll('[data-counter]');
  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-counter'), 10);
          const suffix = el.getAttribute('data-suffix') || '';
          const duration = 1600;
          const startTime = performance.now();

          const animate = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeProgress * target);
            el.textContent = `${current}${suffix}`;
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              el.textContent = `${target}${suffix}`;
            }
          };

          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.2 });

    counters.forEach(c => counterObserver.observe(c));
  }
}
