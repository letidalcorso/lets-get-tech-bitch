/* ============================================================
   SmartBase — products.js
   Renderização de cards de produto a partir de data/products.json
   ============================================================ */

(function () {
  'use strict';

  /* --- Configuração --- */
  const TRAY_STORE_URL = 'https://www.smartbase.com.br'; // substituir pela URL real

  /* --- Renderizar card de produto --- */
  function renderProductCard(product) {
    const badge = product.condition === 'novo'
      ? '<span class="product-card__badge">Novo</span>'
      : product.condition === 'seminovo'
        ? '<span class="product-card__badge" style="background-color: var(--color-silver);">Seminovo</span>'
        : '';

    const priceFormatted = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(product.price);

    const installments = product.installments
      ? `<span class="product-card__price-installments">ou ${product.installments}x sem juros</span>`
      : '';

    return `
      <article class="product-card" data-animate data-category="${product.category}">
        <div class="product-card__image-wrapper">
          <div class="product-card__image">
            <img
              src="${product.image || 'data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\' fill=\'%230f0f1c\'><rect width=\'400\' height=\'300\'/></svg>'}"
              alt="${product.name}"
              loading="lazy"
            >
          </div>
          ${badge}
        </div>
        <div class="product-card__body">
          <p class="product-card__label">${product.category}</p>
          <h3 class="product-card__name">${product.name}</h3>
          <p class="product-card__desc">${product.description || ''}</p>
          <div class="product-card__footer">
            <div class="product-card__price">
              <span class="product-card__price-value">${priceFormatted}</span>
              ${installments}
            </div>
            <a
              href="${product.trayUrl || TRAY_STORE_URL}"
              class="btn btn-primary btn-sm"
              target="_blank"
              rel="noopener"
            >Ver produto</a>
          </div>
        </div>
      </article>
    `;
  }

  /* --- Carregar e renderizar produtos --- */
  async function loadProducts(containerId, filter = 'all') {
    const container = document.getElementById(containerId);
    if (!container) return;

    try {
      const res = await fetch('./data/products.json');
      if (!res.ok) throw new Error('Erro ao carregar produtos');
      const { products } = await res.json();

      const filtered = filter === 'all'
        ? products
        : products.filter(p => p.category.toLowerCase() === filter.toLowerCase());

      container.innerHTML = filtered.map(renderProductCard).join('');

      // Re-observar animações
      if (window.IntersectionObserver) {
        const newEls = container.querySelectorAll('[data-animate]');
        newEls.forEach(el => el.classList.add('is-visible'));
      }

    } catch (err) {
      container.innerHTML = `
        <p class="text-muted text-center" style="grid-column: 1/-1; padding: var(--space-16) 0;">
          Produtos indisponíveis no momento. <a href="${TRAY_STORE_URL}" class="text-accent">Ver loja →</a>
        </p>
      `;
    }
  }

  /* --- Filtros de categoria --- */
  function initFilters(containerId) {
    const filters = document.querySelectorAll('.filter-btn');
    if (!filters.length) return;

    filters.forEach(btn => {
      btn.addEventListener('click', () => {
        filters.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        const category = btn.dataset.filter || 'all';
        loadProducts(containerId, category);
      });
    });
  }

  /* --- Inicialização --- */
  document.addEventListener('DOMContentLoaded', () => {
    // Página de produtos
    if (document.getElementById('products-grid')) {
      loadProducts('products-grid');
      initFilters('products-grid');
    }

    // Seção de destaques na home
    if (document.getElementById('products-featured')) {
      loadProducts('products-featured', 'all');
    }
  });

  // Expor para uso externo
  window.SmartBaseProducts = { loadProducts, renderProductCard };

})();
