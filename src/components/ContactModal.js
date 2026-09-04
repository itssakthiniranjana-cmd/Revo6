/**
 * CONTACT MODAL & PROJECT DRAWER COMPONENT
 */

import { siteContent } from '../utils/content.js';

export function renderContactModal() {
  const { brand } = siteContent;

  return `
    <div class="modal-backdrop js-contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
      <div class="modal-dialog">
        <button class="modal-close js-close-contact-modal" aria-label="Close dialog">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div style="margin-bottom: 24px;">
          <h2 id="contact-modal-title" class="section-title" style="font-size: 1.85rem; margin-top: 0; margin-bottom: 8px;">
            Get In Touch
          </h2>
          <p class="text-body">${brand.contact.subtitle}</p>
        </div>

        <form class="js-modal-form">
          <div class="form-group">
            <label class="form-label" for="modal-name">Your Full Name</label>
            <input type="text" id="modal-name" class="form-input" placeholder="Enter name" required />
          </div>

          <div class="form-group">
            <label class="form-label" for="modal-email">Email Address</label>
            <input type="email" id="modal-email" class="form-input" placeholder="Enter email" required />
          </div>

          <div class="form-group">
            <label class="form-label" for="modal-message">Your Message</label>
            <textarea id="modal-message" class="form-textarea" placeholder="Type message" required></textarea>
          </div>

          <button type="submit" class="btn btn-cyan" style="width: 100%;">
            <span>Send Message</span>
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>

          <div class="form-success-banner js-modal-success">
            Thanks for reaching out! We’ll be in touch shortly.
          </div>
        </form>

        <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid var(--border-subtle); display: flex; flex-direction: column; gap: 8px;">
          <div style="font-size: 0.8125rem; color: var(--text-muted);">Direct Reach:</div>
          <div style="font-size: 0.9375rem; font-weight: 600; color: var(--text-primary);">
            <a href="mailto:${brand.contact.email}">${brand.contact.email}</a> <span style="margin: 0 8px; color: var(--text-muted);">/</span> 
            <a href="tel:${brand.contact.phone.replace(/[^+\d]/g, '')}">${brand.contact.phone}</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function initModalEvents() {
  const modal = document.querySelector('.js-contact-modal');
  if (!modal) return;

  const openBtns = document.querySelectorAll('.js-open-contact-modal');
  const closeBtn = modal.querySelector('.js-close-contact-modal');
  const form = modal.querySelector('.js-modal-form');
  const successBanner = modal.querySelector('.js-modal-success');

  const openModal = () => {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    const firstInput = modal.querySelector('input');
    if (firstInput) setTimeout(() => firstInput.focus(), 100);
  };

  const closeModal = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  openBtns.forEach(btn => btn.addEventListener('click', openModal));
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Sending...</span>`;
      }
      setTimeout(() => {
        if (successBanner) successBanner.classList.add('active');
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `<span>Send Message</span>`;
        }
        setTimeout(() => {
          closeModal();
          if (successBanner) successBanner.classList.remove('active');
        }, 2200);
      }, 600);
    });
  }
}
