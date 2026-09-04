/**
 * REVO6 SOLUTIONS PAGE (/solutions)
 * 4-Chapter Connected Storytelling & Who We Are
 */

import { siteContent } from '../utils/content.js';

export function renderSolutions() {
  const { solutions } = siteContent.pages;
  const { brand } = siteContent;

  const chapterVisuals = {
    'accounting-streamline': '/assets/images/accounting.jpg',
    'software-consulting': '/assets/images/software.jpg',
    'wms-optimization': '/assets/images/wms.jpg',
    'digital-change': '/assets/images/hero_abstract.jpg'
  };

  const chapterDetails = {
    'accounting-streamline': {
      deliverables: [
        'Automated closing workflows and ledger reconciliations',
        'Custom executive reporting frameworks for rapid fiscal insights',
        'Statutory compliance and precision audit preparation'
      ],
      telemetry: 'Precision Ledger / Accelerated Closings'
    },
    'software-consulting': {
      deliverables: [
        'Modern software architecture evaluation & throughput tuning',
        'Bespoke integrations linking legacy with cloud infrastructure',
        'Enhanced engineering performance & friction-free digital workflows'
      ],
      telemetry: 'Cloud Architecture / High Throughput'
    },
    'wms-optimization': {
      deliverables: [
        'Revamped warehouse processes that cut fulfillment delays',
        'Real-time stock visibility and logistics orchestration',
        'Automated tracking & inventory velocity across facilities'
      ],
      telemetry: 'Zero Delay Logistics / Real-Time Tracking'
    },
    'digital-change': {
      deliverables: [
        'End-to-end change management minimizing transition friction',
        'Continuous process improvements & operational onboarding',
        'Sustainable digital velocity & high employee adoption'
      ],
      telemetry: 'Smooth Adoption / Continuous Velocity'
    }
  };

  return `
    <div class="page-container page-transition-enter">
      <!-- ===================================================================
           01. SOLUTIONS HERO
           =================================================================== -->
      <section class="section section-hero-subpage">
        <div class="bg-ambient-layer">
          <div class="ambient-grid"></div>
          <div class="ambient-orb orb-2" data-parallax-speed="0.12"></div>
        </div>

        <div class="container" style="position: relative; z-index: 1;">
          <div class="home-hero-layout">
            <!-- Left: Headline & Subtitle -->
            <div class="reveal-on-scroll">
              <h1 class="hero-main-title" style="margin-top: 0; margin-bottom: 20px;">
                ${solutions.hero.title}
              </h1>
              <p class="hero-sub-copy" style="margin-bottom: 32px;">
                ${solutions.hero.subtitle}
              </p>
              <div class="hero-cta-group">
                <a href="#accounting-streamline" class="btn btn-primary">
                  <span>Explore Chapters</span>
                  <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M19 9l-7 7-7-7"/>
                  </svg>
                </a>
                <a href="#who-we-are" class="btn btn-secondary">
                  <span>Who We Are</span>
                </a>
              </div>
            </div>

            <!-- Right: Parallax Visual -->
            <div class="reveal-on-scroll reveal-stagger-2">
              <div class="parallax-visual-card" data-parallax-speed="0.14">
                <img src="/assets/images/software.jpg" alt="Digital Solutions That Bring Accuracy, Efficiency, and Clarity" />
                <div class="floating-glass-pill bottom-left">
                  <span class="tag-badge-pulse"></span>
                  <span>Accuracy / Efficiency / Clarity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===================================================================
           02. FOUR CONNECTED VISUAL CHAPTERS (STORYTELLING SCROLL)
           =================================================================== -->
      <section class="solutions-storytelling-wrap">
        <div class="container">
          <div class="solutions-story-layout">
            <!-- Sticky Left Sidebar Index (Desktop) -->
            <aside class="solutions-sticky-sidebar">
              <div class="solutions-sidebar-card">
                <div style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: var(--brand-cyan); letter-spacing: 0.08em; text-transform: uppercase;">INDEX</div>
                <h3 style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 700; margin-top: 8px;">
                  Solution Chapters
                </h3>
                
                <nav class="solutions-nav-timeline">
                  ${solutions.solutionsGrid.map((sol, idx) => `
                    <a href="#${sol.id}" class="solutions-timeline-btn js-solution-nav-btn ${idx === 0 ? 'active' : ''}" data-target="${sol.id}">
                      <span class="timeline-btn-num">${sol.number}</span>
                      <span>${sol.title}</span>
                    </a>
                  `).join('')}
                </nav>

                <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
                  <button class="btn btn-primary js-open-contact-modal" style="width: 100%; font-size: 0.875rem; padding: 10px 16px;">
                    <span>Deploy Solutions</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </aside>

            <!-- Right Side Chapters Stream -->
            <div class="solutions-chapters-stream">
              ${solutions.solutionsGrid.map((sol, idx) => `
                <article id="${sol.id}" class="solution-story-panel js-solution-chapter reveal-on-scroll">
                  <div>
                    <h2 class="solution-story-title">${sol.title}</h2>
                    <p class="solution-story-lead" style="margin-top: 14px;">
                      ${sol.summary}
                    </p>
                    <p class="text-body" style="margin-top: 18px; line-height: 1.7; font-size: 1.05rem;">
                      ${sol.description}
                    </p>
                  </div>

                  <!-- Strategic Deliverables -->
                  <div class="solution-deliverables-list" style="margin-top: 8px;">
                    ${(chapterDetails[sol.id]?.deliverables || []).map(del => `
                      <div class="solution-deliverable-item">
                        <span class="check-icon">✓</span>
                        <span>${del}</span>
                      </div>
                    `).join('')}
                  </div>

                  <!-- Visual Layer -->
                  <div class="solution-story-visual-wrap">
                    <img src="${chapterVisuals[sol.id]}" alt="${sol.title} - ${sol.summary}" />
                    <div class="floating-glass-pill bottom-left">
                      <span class="tag-badge-pulse"></span>
                      <span>${chapterDetails[sol.id]?.telemetry || sol.focus}</span>
                    </div>
                  </div>

                  <!-- Action Bar -->
                  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
                    <div style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--text-muted);">
                      Consulting Blueprint / Revolution 6
                    </div>
                    <button class="btn btn-secondary js-open-contact-modal" data-solution="${sol.title}">
                      <span>Inquire on ${sol.title}</span>
                      <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                </article>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <!-- ===================================================================
           03. WHO WE ARE SECTION
           =================================================================== -->
      <section id="who-we-are" class="section section-who-we-are" style="scroll-margin-top: 80px;">
        <div class="container">
          <div class="about-grid">
            <!-- Left: Text & Stats -->
            <div class="reveal-on-scroll">
              <h2 class="section-title" style="margin-top: 0; margin-bottom: 20px;">
                ${solutions.whoWeAre.title}
              </h2>
              <p class="text-lead" style="line-height: 1.7; margin-bottom: 32px;">
                ${solutions.whoWeAre.body}
              </p>

              <div class="about-stats-row">
                ${solutions.whoWeAre.stats.map(st => `
                  <div>
                    <div class="stat-number editorial-accent">${st.value}</div>
                    <div class="stat-label">${st.label}</div>
                    <div style="font-size: 0.8125rem; color: var(--text-muted); margin-top: 4px;">${st.highlight}</div>
                  </div>
                `).join('')}
              </div>

              <div style="margin-top: 36px;">
                <a href="${solutions.whoWeAre.ctaLink}" class="btn btn-primary">
                  <span>${solutions.whoWeAre.ctaText}</span>
                  <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>

            <!-- Right: 3D Visual -->
            <div class="reveal-on-scroll reveal-stagger-2">
              <div class="parallax-visual-card" data-parallax-speed="0.14">
                <img src="/assets/images/hero_abstract.jpg" alt="Revolution 6 Who We Are" />
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
           04. FINAL CTA
           =================================================================== -->
      <section class="section-contact-cta">
        <div class="bg-ambient-layer">
          <div class="ambient-orb orb-2" style="opacity: 0.16; top: 10%;"></div>
        </div>

        <div class="container">
          <div class="contact-cta-content reveal-on-scroll">
            <h2 class="contact-cta-headline">
              ${brand.contact.subtitle}
            </h2>
            <p style="color: #94A3B8; font-size: 1.25rem; margin-bottom: 40px; max-width: 640px; margin-left: auto; margin-right: auto;">
              Explore how Revolution 6 digital solutions bring accuracy, efficiency, and clarity to your enterprise.
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

export function initSolutionsEvents() {
  // Sticky left sidebar chapter tracking via IntersectionObserver
  const navBtns = document.querySelectorAll('.js-solution-nav-btn');
  const chapters = document.querySelectorAll('.js-solution-chapter');

  if (chapters.length > 0 && navBtns.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navBtns.forEach(btn => {
            if (btn.getAttribute('data-target') === id) {
              btn.classList.add('active');
            } else {
              btn.classList.remove('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    });

    chapters.forEach(c => observer.observe(c));
  }
}
