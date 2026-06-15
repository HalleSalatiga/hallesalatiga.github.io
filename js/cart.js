// Shared Shopping Cart Logic for Halle Salatiga Redesign
// Integrates with localStorage to persist state across pages.

const CART_STORAGE_KEY = 'halle_salatiga_cart';

const Cart = {
  getCart() {
    try {
      const data = localStorage.getItem(CART_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Failed to parse cart data:", e);
      return [];
    }
  },

  saveCart(cart) {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    // Dispatch custom event to notify all listeners on the page
    window.dispatchEvent(new CustomEvent('cart-updated', { detail: cart }));
  },

  addToCart(productId, quantity = 1, colorName, size) {
    const product = window.PRODUCTS ? window.PRODUCTS.find(p => p.id === parseInt(productId)) : null;
    if (!product) return false;

    const cart = this.getCart();
    
    // Create unique key based on id, color, and size
    const cartItemId = `${productId}_${colorName || 'default'}_${size || 'default'}`;
    
    const existingItemIndex = cart.findIndex(item => item.cartItemId === cartItemId);
    
    if (existingItemIndex > -1) {
      // Check stock limit
      const newQty = cart[existingItemIndex].quantity + quantity;
      if (newQty <= product.stock) {
        cart[existingItemIndex].quantity = newQty;
      } else {
        cart[existingItemIndex].quantity = product.stock;
        this.showToast(`Hanya dapat menambahkan hingga ${product.stock} barang (batas stok).`, 'warning');
      }
    } else {
      // Check stock limit
      const finalQty = quantity <= product.stock ? quantity : product.stock;
      if (quantity > product.stock) {
        this.showToast(`Hanya dapat menambahkan hingga ${product.stock} barang (batas stok).`, 'warning');
      }
      cart.push({
        cartItemId,
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        color: colorName || '',
        size: size || '',
        quantity: finalQty,
        stockLimit: product.stock
      });
    }

    this.saveCart(cart);
    this.showToast(`Berhasil menambahkan "${product.name}" ke keranjang!`, 'success');
    return true;
  },

  removeFromCart(cartItemId) {
    let cart = this.getCart();
    const item = cart.find(i => i.cartItemId === cartItemId);
    cart = cart.filter(item => item.cartItemId !== cartItemId);
    this.saveCart(cart);
    if (item) {
      this.showToast(`"${item.name}" dihapus dari keranjang.`, 'info');
    }
  },

  updateCartQuantity(cartItemId, quantity) {
    const cart = this.getCart();
    const itemIndex = cart.findIndex(item => item.cartItemId === cartItemId);
    if (itemIndex > -1) {
      const item = cart[itemIndex];
      const parsedQty = parseInt(quantity);
      if (parsedQty <= 0) {
        this.removeFromCart(cartItemId);
        return;
      }
      if (parsedQty <= item.stockLimit) {
        cart[itemIndex].quantity = parsedQty;
      } else {
        cart[itemIndex].quantity = item.stockLimit;
        this.showToast(`Stok terbatas! Hanya tersedia ${item.stockLimit} barang.`, 'warning');
      }
      this.saveCart(cart);
    }
  },

  clearCart() {
    this.saveCart([]);
  },

  getCartTotal() {
    return this.getCart().reduce((sum, item) => sum + (item.price * item.quantity), 0);
  },

  getCartCount() {
    return this.getCart().reduce((sum, item) => sum + item.quantity, 0);
  },

  showToast(message, type = 'success') {
    // Custom beautiful floating toast notification
    const containerId = 'toast-container';
    let container = document.getElementById(containerId);
    if (!container) {
      container = document.createElement('div');
      container.id = containerId;
      container.style.position = 'fixed';
      container.style.bottom = '24px';
      container.style.right = '24px';
      container.style.zIndex = '9999';
      container.style.display = 'flex';
      container.style.flexDirection = 'column';
      container.style.gap = '8px';
      container.style.pointerEvents = 'none';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast-item toast-${type}`;
    toast.style.pointerEvents = 'auto';
    
    // Styling the toast in JavaScript as a fallback, but style.css will have full styles
    toast.style.padding = '12px 20px';
    toast.style.borderRadius = '8px';
    toast.style.color = '#fff';
    toast.style.fontWeight = '500';
    toast.style.fontSize = '14px';
    toast.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
    toast.style.display = 'flex';
    toast.style.alignItems = 'center';
    toast.style.gap = '8px';
    toast.style.transform = 'translateY(50px)';
    toast.style.opacity = '0';
    toast.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

    // Colors
    let icon = '✓';
    if (type === 'success') {
      toast.style.backgroundColor = '#1e293b'; // Slate dark
      toast.style.borderLeft = '4px solid #C2A478'; // Gold accent
      icon = '✦';
    } else if (type === 'warning') {
      toast.style.backgroundColor = '#854d0e'; // Dark yellow
      icon = '⚠';
    } else if (type === 'info') {
      toast.style.backgroundColor = '#0f172a';
      icon = 'ℹ';
    }

    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    container.appendChild(toast);

    // Trigger transition
    requestAnimationFrame(() => {
      toast.style.transform = 'translateY(0)';
      toast.style.opacity = '1';
    });

    // Remove toast after 3 seconds
    setTimeout(() => {
      toast.style.transform = 'translateY(-20px)';
      toast.style.opacity = '0';
      setTimeout(() => {
        toast.remove();
      }, 400);
    }, 3000);
  }
};

window.Cart = Cart;
