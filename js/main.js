// Main Global UI Logic - Halle Salatiga Redesign
// Handles sticky headers, cart drawer, mobile navigation, search delegation, and UI state sync.

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize UI Elements & Global Cart Drawer
  injectCartDrawer();
  injectNavbarFooter();
  syncCartUI();
  
  // 2. Navigation Scroll Effect
  const navbar = document.querySelector('nav');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('nav-scrolled');
      } else {
        navbar.classList.remove('nav-scrolled');
      }
    });
  }

  // 3. Listen to Cart Changes
  window.addEventListener('cart-updated', () => {
    syncCartUI();
  });
});

// Syncs cart count badges and updates the cart drawer list dynamically
function syncCartUI() {
  const cart = window.Cart ? window.Cart.getCart() : [];
  const totalItems = window.Cart ? window.Cart.getCartCount() : 0;
  const totalPrice = window.Cart ? window.Cart.getCartTotal() : 0;

  // Update badges
  document.querySelectorAll('.cart-badge').forEach(badge => {
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';
  });

  // Render Drawer Items
  renderCartDrawerItems(cart, totalPrice);
}

// Injects the Cart Drawer HTML structure dynamically to prevent redundancy across pages
function injectCartDrawer() {
  if (document.getElementById('cart-drawer')) return;

  const drawerHTML = `
    <div id="cart-drawer-overlay" class="cart-drawer-overlay"></div>
    <div id="cart-drawer" class="cart-drawer">
      <div class="cart-drawer-header">
        <h3>Keranjang Belanja</h3>
        <button id="close-cart-btn" class="close-cart-btn" aria-label="Close cart">&times;</button>
      </div>
      <div id="cart-drawer-items" class="cart-drawer-items">
        <!-- Dynamic Items Go Here -->
      </div>
      <div class="cart-drawer-footer">
        <div class="cart-summary-row">
          <span>Subtotal:</span>
          <span id="cart-drawer-total" class="cart-total-price">Rp 0</span>
        </div>
        <p class="cart-shipping-note">Pajak & ongkir dihitung saat checkout.</p>
        <div class="cart-drawer-actions">
          <a href="checkout.html" class="btn btn-primary btn-block">Checkout Sekarang</a>
          <button id="clear-cart-btn" class="btn btn-link btn-block">Kosongkan Keranjang</button>
        </div>
      </div>
    </div>
  `;

  const drawerContainer = document.createElement('div');
  drawerContainer.innerHTML = drawerHTML;
  document.body.appendChild(drawerContainer);

  // Setup Event Listeners for Drawer Toggling
  const overlay = document.getElementById('cart-drawer-overlay');
  const drawer = document.getElementById('cart-drawer');
  const closeBtn = document.getElementById('close-cart-btn');
  const clearBtn = document.getElementById('clear-cart-btn');

  // Toggle Cart Drawer functions
  window.openCartDrawer = function() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden'; // Lock background scrolling
  };

  window.closeCartDrawer = function() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = ''; // Restore scrolling
  };

  if (closeBtn) closeBtn.addEventListener('click', window.closeCartDrawer);
  if (overlay) overlay.addEventListener('click', window.closeCartDrawer);
  
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (confirm('Apakah Anda yakin ingin mengosongkan keranjang belanja?')) {
        window.Cart.clearCart();
        window.closeCartDrawer();
      }
    });
  }

  // Hook cart icon button clicks
  document.querySelectorAll('.cart-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.openCartDrawer();
    });
  });
}

// Renders the list of cart items in the drawer
function renderCartDrawerItems(cart, total) {
  const container = document.getElementById('cart-drawer-items');
  const totalEl = document.getElementById('cart-drawer-total');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon">🛒</div>
        <p>Keranjang belanja Anda masih kosong.</p>
        <a href="catalog.html" class="btn btn-secondary" onclick="window.closeCartDrawer()">Mulai Belanja</a>
      </div>
    `;
    if (totalEl) totalEl.textContent = 'Rp 0';
    return;
  }

  let html = '';
  cart.forEach(item => {
    const formattedPrice = window.formatCurrency ? window.formatCurrency(item.price * item.quantity) : `Rp ${item.price * item.quantity}`;
    const sizeBadge = item.size ? `<span class="item-spec-badge">Size: ${item.size}</span>` : '';
    const colorBadge = item.color ? `<span class="item-spec-badge">Warna: ${item.color}</span>` : '';

    html += `
      <div class="cart-item" data-cart-item-id="${item.cartItemId}">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-details">
          <h4 class="cart-item-title">${item.name}</h4>
          <div class="cart-item-specs">
            ${sizeBadge}
            ${colorBadge}
          </div>
          <div class="cart-item-price-qty">
            <span class="cart-item-price">${formattedPrice}</span>
            <div class="qty-selector">
              <button class="qty-btn qty-minus" onclick="decrementCartItem('${item.cartItemId}')">-</button>
              <input type="number" class="qty-input" value="${item.quantity}" min="1" max="${item.stockLimit}" onchange="updateCartItemQty('${item.cartItemId}', this.value)">
              <button class="qty-btn qty-plus" onclick="incrementCartItem('${item.cartItemId}')">+</button>
            </div>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeCartItem('${item.cartItemId}')">&times;</button>
      </div>
    `;
  });

  container.innerHTML = html;
  if (totalEl) {
    totalEl.textContent = window.formatCurrency ? window.formatCurrency(total) : `Rp ${total}`;
  }
}

// Global cart action wrappers (accessible from inline click events)
window.removeCartItem = function(cartItemId) {
  if (window.Cart) window.Cart.removeFromCart(cartItemId);
};

window.incrementCartItem = function(cartItemId) {
  if (window.Cart) {
    const item = window.Cart.getCart().find(i => i.cartItemId === cartItemId);
    if (item) {
      window.Cart.updateCartQuantity(cartItemId, item.quantity + 1);
    }
  }
};

window.decrementCartItem = function(cartItemId) {
  if (window.Cart) {
    const item = window.Cart.getCart().find(i => i.cartItemId === cartItemId);
    if (item) {
      window.Cart.updateCartQuantity(cartItemId, item.quantity - 1);
    }
  }
};

window.updateCartItemQty = function(cartItemId, value) {
  if (window.Cart) {
    window.Cart.updateCartQuantity(cartItemId, parseInt(value));
  }
};

// Setup dynamic global navigation header and footer
function injectNavbarFooter() {
  // Let's implement mobile navigation toggle
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navOverlay = document.querySelector('.nav-overlay');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
      if (navOverlay) navOverlay.classList.toggle('active');
      document.body.classList.toggle('nav-open');
    });

    if (navOverlay) {
      navOverlay.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navLinks.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.classList.remove('nav-open');
      });
    }
  }

  // Hook up search triggers (Navbar global search)
  const searchForm = document.querySelector('.nav-search-form');
  const searchInput = document.querySelector('.nav-search-input');
  
  if (searchForm && searchInput) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = searchInput.value.trim();
      if (query) {
        window.location.href = `catalog.html?search=${encodeURIComponent(query)}`;
      }
    });
  }

  // Hook up secondary search forms (e.g. Hero search bar)
  const heroSearch = document.querySelector('.hero-search-form');
  const heroSearchInput = document.querySelector('.hero-search-input');
  if (heroSearch && heroSearchInput) {
    heroSearch.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = heroSearchInput.value.trim();
      if (query) {
        window.location.href = `catalog.html?search=${encodeURIComponent(query)}`;
      }
    });
  }
}
