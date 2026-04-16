/**
 * SmartBase — Tray Commerce Theme JS
 * Vanilla JS, zero dependencies.
 */

(function () {
  'use strict';

  /* =========================================================
     HEADER: scroll state + mobile menu
  ========================================================= */

  const header = document.getElementById('tray-header');
  const hamburger = document.getElementById('tray-hamburger');
  const mobileNav = document.getElementById('tray-mobile-nav');

  if (header) {
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      const y = window.scrollY;

      if (y > 60) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }

      // Auto-hide on scroll down, reveal on scroll up
      if (y > lastScrollY && y > 120) {
        header.classList.add('is-hidden');
      } else {
        header.classList.remove('is-hidden');
      }

      lastScrollY = y;
    }, { passive: true });
  }

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!isOpen));
      hamburger.classList.toggle('is-open');
      mobileNav.classList.toggle('is-open');
      mobileNav.setAttribute('aria-hidden', String(isOpen));
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    // Close mobile nav when a link is clicked
    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.classList.remove('is-open');
        mobileNav.classList.remove('is-open');
        mobileNav.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });
  }

  /* =========================================================
     PRODUCT PAGE: image gallery
  ========================================================= */

  const galleryMain = document.getElementById('gallery-main');
  const galleryMainImg = document.getElementById('gallery-main-img');
  const galleryThumbs = document.getElementById('gallery-thumbs');

  if (galleryThumbs && galleryMainImg) {
    const thumbBtns = galleryThumbs.querySelectorAll('.tray-thumb');

    thumbBtns.forEach((btn, index) => {
      if (index === 0) btn.classList.add('is-active');

      btn.addEventListener('click', () => {
        const src = btn.getAttribute('data-src');
        if (!src) return;

        // Fade transition
        galleryMainImg.style.opacity = '0';
        setTimeout(() => {
          galleryMainImg.src = src;
          galleryMainImg.style.opacity = '1';
        }, 150);

        thumbBtns.forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
      });
    });

    // Keyboard navigation for gallery
    galleryThumbs.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        const active = galleryThumbs.querySelector('.tray-thumb.is-active');
        if (!active) return;
        const all = Array.from(thumbBtns);
        const idx = all.indexOf(active);
        const next = e.key === 'ArrowRight'
          ? all[idx + 1] || all[0]
          : all[idx - 1] || all[all.length - 1];
        next.click();
        next.focus();
      }
    });
  }

  /* =========================================================
     PRODUCT PAGE: quantity control
  ========================================================= */

  function initQtyControl(container) {
    if (!container) return;

    const decBtn = container.querySelector('[id^="qty-dec"], [data-action="dec"]');
    const incBtn = container.querySelector('[id^="qty-inc"], [data-action="inc"]');
    const input  = container.querySelector('[id^="qty-input"], .tray-qty-input');

    if (!input) return;

    if (decBtn) {
      decBtn.addEventListener('click', () => {
        const val = parseInt(input.value, 10) || 1;
        const min = parseInt(input.min, 10) || 1;
        if (val > min) input.value = val - 1;
        input.dispatchEvent(new Event('change'));
      });
    }

    if (incBtn) {
      incBtn.addEventListener('click', () => {
        const val = parseInt(input.value, 10) || 1;
        const max = parseInt(input.max, 10) || 999;
        if (val < max) input.value = val + 1;
        input.dispatchEvent(new Event('change'));
      });
    }

    input.addEventListener('change', () => {
      const val = parseInt(input.value, 10) || 1;
      const min = parseInt(input.min, 10) || 1;
      const max = parseInt(input.max, 10) || 999;
      input.value = Math.max(min, Math.min(max, val));
    });
  }

  // Single product page qty
  const productQtyWrap = document.querySelector('.tray-product-info__buy-row');
  if (productQtyWrap) initQtyControl(productQtyWrap);

  /* =========================================================
     CART PAGE: item quantity update
  ========================================================= */

  const cartItems = document.querySelectorAll('.tray-cart-item');

  cartItems.forEach((itemEl) => {
    const decBtns = itemEl.querySelectorAll('[data-action="dec"]');
    const incBtns = itemEl.querySelectorAll('[data-action="inc"]');
    const qtyInput = itemEl.querySelector('.tray-qty-input');
    const removeBtn = itemEl.querySelector('.tray-cart-item__remove');

    if (qtyInput) {
      decBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          const val = parseInt(qtyInput.value, 10) || 1;
          if (val > 1) {
            qtyInput.value = val - 1;
            updateCartItem(qtyInput);
          }
        });
      });

      incBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          const val = parseInt(qtyInput.value, 10) || 1;
          qtyInput.value = val + 1;
          updateCartItem(qtyInput);
        });
      });

      qtyInput.addEventListener('change', () => updateCartItem(qtyInput));
    }

    if (removeBtn) {
      removeBtn.addEventListener('click', () => {
        const itemId = removeBtn.getAttribute('data-item-id');
        removeCartItem(itemId, itemEl);
      });
    }
  });

  /**
   * Tray Commerce cart update via their JS API.
   * Tray exposes `Tray.cart.update(itemId, qty)` in their runtime.
   */
  function updateCartItem(input) {
    const itemId = input.getAttribute('data-item-id');
    const qty    = parseInt(input.value, 10) || 1;
    if (typeof window.Tray !== 'undefined' && window.Tray.cart) {
      window.Tray.cart.update(itemId, qty);
    }
  }

  function removeCartItem(itemId, el) {
    if (typeof window.Tray !== 'undefined' && window.Tray.cart) {
      window.Tray.cart.remove(itemId);
      el.style.height = el.offsetHeight + 'px';
      requestAnimationFrame(() => {
        el.style.transition = 'height 0.3s ease, opacity 0.3s ease';
        el.style.height = '0';
        el.style.opacity = '0';
        el.style.overflow = 'hidden';
      });
    }
  }

  /* =========================================================
     CART PAGE: coupon
  ========================================================= */

  const couponApplyBtn = document.getElementById('coupon-apply');
  const couponInput    = document.getElementById('coupon-input');

  if (couponApplyBtn && couponInput) {
    couponApplyBtn.addEventListener('click', () => {
      const code = couponInput.value.trim();
      if (!code) return;
      if (typeof window.Tray !== 'undefined' && window.Tray.coupon) {
        window.Tray.coupon.apply(code);
      }
    });
  }

  /* =========================================================
     CATALOG: sidebar filter toggle (mobile)
  ========================================================= */

  const filterToggleBtn = document.getElementById('filter-toggle');
  const catalogSidebar  = document.getElementById('catalog-sidebar');

  if (filterToggleBtn && catalogSidebar) {
    filterToggleBtn.addEventListener('click', () => {
      catalogSidebar.classList.toggle('is-open');
      const isOpen = catalogSidebar.classList.contains('is-open');
      filterToggleBtn.setAttribute('aria-expanded', String(isOpen));
    });

    // Close sidebar when clicking outside (mobile)
    document.addEventListener('click', (e) => {
      if (
        catalogSidebar.classList.contains('is-open') &&
        !catalogSidebar.contains(e.target) &&
        e.target !== filterToggleBtn
      ) {
        catalogSidebar.classList.remove('is-open');
        filterToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* =========================================================
     PRODUCT TABS
  ========================================================= */

  const tabBtns = document.querySelectorAll('.tray-tab-btn');

  if (tabBtns.length) {
    tabBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('aria-controls');
        const panel    = document.getElementById(targetId);
        if (!panel) return;

        // Deactivate all
        tabBtns.forEach((b) => {
          b.classList.remove('is-active');
          b.setAttribute('aria-selected', 'false');
        });
        document.querySelectorAll('.tray-tab-panel').forEach((p) => {
          p.classList.remove('is-active');
          p.hidden = true;
        });

        // Activate clicked
        btn.classList.add('is-active');
        btn.setAttribute('aria-selected', 'true');
        panel.classList.add('is-active');
        panel.hidden = false;
      });
    });
  }

  /* =========================================================
     ENTRANCE ANIMATIONS (IntersectionObserver)
  ========================================================= */

  const style = document.createElement('style');
  style.textContent = `
    [data-animate] {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    [data-animate].is-visible {
      opacity: 1;
      transform: none;
    }
    [data-delay="1"] { transition-delay: 0.1s; }
    [data-delay="2"] { transition-delay: 0.2s; }
    [data-delay="3"] { transition-delay: 0.3s; }
  `;
  document.head.appendChild(style);

  const animEls = document.querySelectorAll('[data-animate]');
  if (animEls.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    animEls.forEach((el) => io.observe(el));
  } else {
    // Fallback: show everything
    animEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* =========================================================
     TOAST utility (reused from institutional site pattern)
  ========================================================= */

  window.showToast = function showToast(message, duration = 3500) {
    let toast = document.querySelector('.tray-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'tray-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => toast.classList.remove('is-visible'), duration);
  };

  /* =========================================================
     SMOOTH SCROLL for anchor links
  ========================================================= */

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href').slice(1);
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();
      const headerH = header ? header.offsetHeight : 0;
      const top     = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

})();
