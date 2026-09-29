(() => {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ============ SCROLL PROGRESS BAR ============ */
  const progressBar = document.querySelector('.progress-bar');
  if (progressBar) {
    const updateProgress = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      progressBar.style.transform = `scaleX(${pct / 100})`;
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  /* ============ NAVBAR: glass + hide on scroll ============ */
  const header = document.querySelector('.header');
  if (header) {
    let lastY = 0;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      header.classList.toggle('is-scrolled', y > 40);
      if (y > 300 && y > lastY) {
        header.classList.add('is-hidden');
      } else {
        header.classList.remove('is-hidden');
      }
      lastY = y;
    }, { passive: true });
  }

  /* ============ MOBILE DRAWER ============ */
  const hamburger = document.querySelector('.header__hamburger');
  const drawer = document.querySelector('.drawer');
  const drawerOverlay = document.querySelector('.drawer__overlay');
  const drawerClose = drawer ? drawer.querySelector('.drawer__close') : null;

  const toggleDrawer = (open) => {
    if (!drawer) return;
    drawer.classList.toggle('is-open', open);
    if (drawerOverlay) drawerOverlay.classList.toggle('is-visible', open);
    document.body.classList.toggle('drawer-open', open);
    if (hamburger) hamburger.setAttribute('aria-expanded', String(open));
  };

  if (hamburger) hamburger.addEventListener('click', () => toggleDrawer(true));
  if (drawerClose) drawerClose.addEventListener('click', () => toggleDrawer(false));
  if (drawerOverlay) drawerOverlay.addEventListener('click', () => toggleDrawer(false));
  if (drawer) {
    drawer.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => toggleDrawer(false))
    );
  }
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') toggleDrawer(false);
  });

  /* ============ SCROLL REVEAL ============ */
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (revealEls.length && 'IntersectionObserver' in window && !prefersReduced) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.dataset.revealDelay || 0, 10);
          entry.target.style.transitionDelay = `${delay}ms`;
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* ============ ANIMATED COUNTERS ============ */
  const counters = document.querySelectorAll('[data-count]');
  const animateCounter = (el) => {
    const target = parseFloat(el.dataset.count);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const duration = 1600;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(eased * target);
      el.textContent = `${prefix}${value}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  if (counters.length && 'IntersectionObserver' in window && !prefersReduced) {
    const counterIO = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => counterIO.observe(el));
  } else {
    counters.forEach(el => {
      el.textContent = `${el.dataset.prefix || ''}${el.dataset.count}${el.dataset.suffix || ''}`;
    });
  }

  /* ============ FAQ ACCORDION ============ */
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-item__question');
    const answer = item.querySelector('.faq-item__answer');
    if (!btn || !answer) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      document.querySelectorAll('.faq-item.is-open').forEach(other => {
        if (other !== item) {
          other.classList.remove('is-open');
          other.querySelector('.faq-item__answer').style.maxHeight = null;
        }
      });

      item.classList.toggle('is-open', !isOpen);
      answer.style.maxHeight = isOpen ? null : answer.scrollHeight + 'px';
    });
  });

  /* ============ CURRENT YEAR ============ */
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
