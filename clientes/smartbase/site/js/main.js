/* ============================================================
   SmartBase — main.js
   Navegação mobile, scroll effects, animações
   ============================================================ */

(function () {
  'use strict';

  /* --- Navigation --- */
  const nav = document.querySelector('.nav');
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileMenu = document.querySelector('.nav__mobile-menu');
  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
    mobileMenu?.classList.toggle('is-open', menuOpen);
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    if (hamburger) {
      const spans = hamburger.querySelectorAll('span');
      if (menuOpen) {
        spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
      } else {
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      }
    }
  }

  hamburger?.addEventListener('click', toggleMenu);

  // Fechar ao clicar em link do menu mobile
  mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (menuOpen) toggleMenu();
    });
  });

  // Fechar ao clicar fora
  document.addEventListener('click', (e) => {
    if (menuOpen && !nav?.contains(e.target)) {
      toggleMenu();
    }
  });

  /* --- Scroll: nav opaque on scroll --- */
  let lastScrollY = 0;

  function onScroll() {
    const scrollY = window.scrollY;

    // Adicionar classe ao scroll
    if (scrollY > 20) {
      nav?.classList.add('is-scrolled');
    } else {
      nav?.classList.remove('is-scrolled');
    }

    lastScrollY = scrollY;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // executar ao carregar

  /* --- Active nav link --- */
  function setActiveNavLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav__link').forEach(link => {
      const href = link.getAttribute('href');
      link.classList.toggle('is-active', href === currentPath);
    });
  }

  setActiveNavLink();

  /* --- Animação de entrada (Intersection Observer) --- */
  const animateEls = document.querySelectorAll('[data-animate]');

  if (animateEls.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    animateEls.forEach(el => observer.observe(el));
  } else {
    // Fallback: mostrar tudo
    animateEls.forEach(el => el.classList.add('is-visible'));
  }

  /* --- Smooth scroll para âncoras --- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80; // altura da nav
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* --- Toast helper --- */
  window.showToast = function (message, duration = 3000) {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => toast.classList.remove('is-visible'), duration);
  };

})();

/* --- Animações CSS trigger (adicionar ao main.css se não existir) --- */
const style = document.createElement('style');
style.textContent = `
  [data-animate] {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  [data-animate].is-visible {
    opacity: 1;
    transform: translateY(0);
  }
  [data-animate][data-delay="1"] { transition-delay: 0.1s; }
  [data-animate][data-delay="2"] { transition-delay: 0.2s; }
  [data-animate][data-delay="3"] { transition-delay: 0.3s; }
  [data-animate][data-delay="4"] { transition-delay: 0.4s; }
`;
document.head.appendChild(style);

/* ============================================================
   BANNER CARROSSEL
   ============================================================ */

(function () {
  const track   = document.getElementById('banner-track');
  const prevBtn = document.getElementById('banner-prev');
  const nextBtn = document.getElementById('banner-next');
  const dotsEl  = document.getElementById('banner-dots');
  if (!track) return;

  const slides = track.querySelectorAll('.hero-banner__slide');
  const dots   = dotsEl ? dotsEl.querySelectorAll('.hero-banner__dot') : [];
  let current  = 0;
  let timer;

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('is-active', i === current));
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAuto() {
    clearInterval(timer);
    timer = setInterval(next, 5000);
  }

  if (prevBtn) prevBtn.addEventListener('click', () => { prev(); startAuto(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { next(); startAuto(); });
  dots.forEach((dot) => {
    dot.addEventListener('click', () => { goTo(+dot.dataset.index); startAuto(); });
  });

  // Swipe touch
  let startX = 0;
  track.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', (e) => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { diff > 0 ? next() : prev(); startAuto(); }
  });

  startAuto();
})();
