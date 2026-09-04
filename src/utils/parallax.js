/**
 * REVO6 PARALLAX & MOTION CONTROLLER
 * GPU-accelerated, RAF-throttled layered depth and reveal engine.
 */

export function initParallaxEngine() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    // Immediately reveal all elements without motion
    document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('is-revealed'));
    return { destroy: () => {} };
  }

  // 1. Scroll Reveal Observer
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
      }
    });
  }, {
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  });

  const registerReveals = () => {
    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      revealObserver.observe(el);
    });
  };

  registerReveals();

  // 2. Parallax Layer Scroll Loop
  let lastScrollY = window.scrollY;
  let isTicking = false;

  const updateParallax = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // Header scroll state
    const header = document.querySelector('.site-header');
    if (header) {
      if (scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Parallax layers
    const parallaxElements = document.querySelectorAll('[data-parallax-speed]');
    parallaxElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      // Only compute if within or near viewport
      if (rect.top < windowHeight + 100 && rect.bottom > -100) {
        const speed = parseFloat(el.getAttribute('data-parallax-speed') || '0.2');
        const offset = (windowHeight / 2 - (rect.top + rect.height / 2)) * speed;
        el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
      }
    });

    isTicking = false;
  };

  const onScroll = () => {
    if (!isTicking) {
      window.requestAnimationFrame(updateParallax);
      isTicking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  updateParallax();

  // 3. Mouse 3D Tilt for Hero Graphic
  const tiltCard = document.querySelector('.js-tilt-card');
  let onMouseMove = null;
  let onMouseLeave = null;

  if (tiltCard && window.innerWidth >= 1024) {
    onMouseMove = (e) => {
      const rect = tiltCard.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const tiltX = (y / (rect.height / 2)) * -6;
      const tiltY = (x / (rect.width / 2)) * 6;
      tiltCard.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg)`;
    };

    onMouseLeave = () => {
      tiltCard.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    };

    tiltCard.addEventListener('mousemove', onMouseMove);
    tiltCard.addEventListener('mouseleave', onMouseLeave);
  }

  return {
    reinit: () => {
      registerReveals();
      updateParallax();
    },
    destroy: () => {
      window.removeEventListener('scroll', onScroll);
      revealObserver.disconnect();
      if (tiltCard && onMouseMove) {
        tiltCard.removeEventListener('mousemove', onMouseMove);
        tiltCard.removeEventListener('mouseleave', onMouseLeave);
      }
    }
  };
}
