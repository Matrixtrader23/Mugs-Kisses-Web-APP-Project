"use client";

import { useState } from 'react';
import Header from '../../components/Header';
import Link from 'next/link';

export default function Order() {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const menuCategories = [
    {
      category: 'Signature Coffees',
      icon: '☕',
      items: [
        { id: 'c1', name: 'Classic Cappuccino', price: 850, img: '☕' },
        { id: 'c2', name: 'Café Latte', price: 900, img: '☕' },
        { id: 'c3', name: 'Caramel Macchiato', price: 1100, img: '🧋' },
        { id: 'c4', name: 'Mocha Delight', price: 1200, img: '🍫' },
        { id: 'c5', name: 'Vanilla Sweet Cream Latte', price: 1150, img: '☕' },
        { id: 'c6', name: 'Hazelnut Cappuccino', price: 1150, img: '🌰' },
        { id: 'c7', name: 'Iced Coffee', price: 950, img: '🧊' },
        { id: 'c8', name: 'Espresso Shot', price: 600, img: '☕' },
      ]
    },
    {
      category: 'Bakery & Pastries',
      icon: '🥐',
      items: [
        { id: 'b1', name: 'Butter Croissant', price: 750, img: '🥐' },
        { id: 'b2', name: 'Chocolate Croissant', price: 850, img: '🥐' },
        { id: 'b3', name: 'Red Velvet Cake', price: 1200, img: '🍰' },
        { id: 'b4', name: 'Chocolate Fudge Cake', price: 1300, img: '🍰' },
        { id: 'b5', name: 'Blueberry Cheesecake', price: 1400, img: '🥧' },
        { id: 'b6', name: 'Cinnamon Rolls', price: 950, img: '🥮' },
        { id: 'b7', name: 'Banana Bread', price: 800, img: '🍞' },
      ]
    },
    {
      category: 'Sweet Treats',
      icon: '🍬',
      items: [
        { id: 's1', name: 'Chocolate Brownie', price: 700, img: '🍫' },
        { id: 's2', name: 'Macarons (Box of 4)', price: 1200, img: '🍡' },
        { id: 's3', name: 'Waffles with Honey', price: 1300, img: '🧇' },
        { id: 's4', name: 'Pancake Stack', price: 1250, img: '🥞' },
        { id: 's5', name: 'Ice Cream Sundae', price: 1100, img: '🍨' },
        { id: 's6', name: 'Strawberry Tart', price: 1200, img: '🍓' },
      ]
    },
    {
      category: 'Fresh Juices & Beverages',
      icon: '🍹',
      items: [
        { id: 'j1', name: 'Fresh Orange Juice', price: 800, img: '🍊' },
        { id: 'j2', name: 'Watermelon Juice', price: 750, img: '🍉' },
        { id: 'j3', name: 'Mango Smoothie', price: 900, img: '🥭' },
        { id: 'j4', name: 'Mixed Berry Smoothie', price: 1100, img: '🫐' },
        { id: 'j5', name: 'Iced Lemon Tea', price: 700, img: '🍋' },
        { id: 'j6', name: 'Milkshakes', price: 1000, img: '🥤' },
      ]
    }
  ];

  const addToCart = (item, qty) => {
    if (qty <= 0) return;
    setCart(prev => {
      const existing = prev.find(cartItem => cartItem.id === item.id);
      if (existing) {
        return prev.map(cartItem => 
          cartItem.id === item.id 
            ? { ...cartItem, qty: cartItem.qty + qty }
            : cartItem
        );
      }
      return [...prev, { ...item, qty }];
    });
  };

  const updateCartQty = (id, newQty) => {
    if (newQty <= 0) {
      removeFromCart(id);
      return;
    }
    setCart(prev => prev.map(cartItem => 
      cartItem.id === id ? { ...cartItem, qty: newQty } : cartItem
    ));
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(cartItem => cartItem.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const deliveryFee = 300;
  const total = subtotal > 0 ? subtotal + deliveryFee : 0;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Your cart is empty. Please add items to place an order.");
      return;
    }
    setOrderPlaced(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <main className="premium-order-page">
        {orderPlaced ? (
          <div className="order-success-modal">
            <div className="modal-content">
              <div className="success-icon-large">🎉</div>
              <h2>Thank You for Your Order!</h2>
              <p>Your order has been placed successfully.<br/>We’ll deliver your items shortly with love 💕</p>
              <div className="modal-actions">
                <button onClick={() => { setOrderPlaced(false); setCart([]); }} className="btn-secondary-modern">Order More</button>
                <Link href="/" className="btn-primary-modern">Back to Home</Link>
              </div>
            </div>
          </div>
        ) : null}

        <section className="order-hero">
          <div className="container text-center">
            <h1 className="hero-title-modern">Place Your Order</h1>
            <p className="hero-subtitle-modern">Select your favorite coffee & treats and enjoy a cozy experience at home.</p>
          </div>
        </section>

        <section className="order-content container">
          <div className="order-layout-modern">
            {/* Left Side: Menu Selection */}
            <div className="menu-selection-side">
              {menuCategories.map((cat, idx) => (
                <div key={idx} className="menu-category-group">
                  <h2 className="category-heading">{cat.icon} {cat.category}</h2>
                  <div className="menu-grid-modern">
                    {cat.items.map(item => (
                      <OrderMenuItem key={item.id} item={item} onAdd={addToCart} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side: Sticky Cart & Checkout */}
            <div className="cart-checkout-side">
              <div className="sticky-cart-container">
                <div className="cart-header">
                  <h2>🧾 Your Order</h2>
                </div>
                
                <div className="cart-items-list">
                  {cart.length === 0 ? (
                    <div className="empty-cart-modern">
                      <span className="empty-icon">🛍️</span>
                      <p>Your cart is empty</p>
                      <small>Add some delicious treats to get started.</small>
                    </div>
                  ) : (
                    cart.map(item => (
                      <div key={item.id} className="cart-item-modern">
                        <div className="item-info">
                          <h4>{item.name}</h4>
                          <span className="item-unit-price">LKR {item.price}</span>
                        </div>
                        <div className="item-controls-price">
                          <div className="compact-qty-selector">
                            <button type="button" onClick={() => updateCartQty(item.id, item.qty - 1)}>-</button>
                            <span>{item.qty}</span>
                            <button type="button" onClick={() => updateCartQty(item.id, item.qty + 1)}>+</button>
                          </div>
                          <div className="item-total-price">
                            LKR {item.price * item.qty}
                          </div>
                          <button type="button" className="remove-item-btn" onClick={() => removeFromCart(item.id)}>❌</button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <div className="cart-summary-modern">
                  <div className="summary-line">
                    <span>Subtotal</span>
                    <span>LKR {subtotal}</span>
                  </div>
                  <div className="summary-line">
                    <span>Delivery Fee</span>
                    <span>LKR {deliveryFee}</span>
                  </div>
                  <div className="summary-line total">
                    <span>Total Amount</span>
                    <span>LKR {total}</span>
                  </div>
                </div>

                <form className="checkout-form-modern" onSubmit={handlePlaceOrder}>
                  <h3>📍 Delivery Details</h3>
                  <div className="input-group">
                    <input type="text" placeholder="Full Name" required />
                  </div>
                  <div className="input-group">
                    <input type="tel" placeholder="Phone Number" required />
                  </div>
                  <div className="input-group">
                    <input type="text" placeholder="Delivery Address" required />
                  </div>
                  <div className="input-group">
                    <select required defaultValue="">
                      <option value="" disabled>Select City</option>
                      <option value="colombo-03">Colombo 03</option>
                      <option value="colombo-04">Colombo 04</option>
                      <option value="colombo-05">Colombo 05</option>
                      <option value="colombo-06">Colombo 06</option>
                      <option value="colombo-07">Colombo 07</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <textarea rows="2" placeholder="Special Notes (e.g., Less sugar)"></textarea>
                  </div>

                  <h3>💳 Payment Method</h3>
                  <div className="payment-options">
                    <label className="radio-label">
                      <input type="radio" name="payment" value="cod" required defaultChecked />
                      <span className="radio-custom"></span>
                      Cash on Delivery
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="payment" value="card" required />
                      <span className="radio-custom"></span>
                      Card Payment (On Delivery)
                    </label>
                  </div>

                  <button type="submit" className="place-order-btn" disabled={cart.length === 0}>
                    Place Order 💖
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-info">
            <h3>Mugs &amp; Kisses</h3>
            <p>Your daily dose of love and caffeine.</p>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Mugs &amp; Kisses. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .premium-order-page {
          padding-top: 100px;
          background-color: var(--background);
          min-height: 100vh;
        }

        .order-hero {
          padding: 40px 20px;
          background: linear-gradient(to bottom, var(--secondary-container), transparent);
          margin-bottom: 40px;
        }

        .hero-title-modern {
          font-size: 42px;
          color: var(--primary);
          font-weight: 700;
          margin-bottom: 12px;
        }

        .hero-subtitle-modern {
          font-size: 18px;
          color: var(--on-surface-variant);
          max-width: 600px;
          margin: 0 auto;
        }

        .order-layout-modern {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
          align-items: start;
          padding-bottom: 100px;
        }

        /* LEFT SIDE - MENU */
        .category-heading {
          font-size: 26px;
          color: var(--primary);
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 2px solid rgba(111, 78, 55, 0.1);
          padding-bottom: 10px;
        }

        .menu-category-group {
          margin-bottom: 60px;
        }

        .menu-grid-modern {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 20px;
        }

        /* MENU ITEM CARD */
        .premium-item-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 16px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          box-shadow: 0 10px 20px rgba(111, 78, 55, 0.05);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .premium-item-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 30px rgba(111, 78, 55, 0.12);
          background: #ffffff;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .item-image-placeholder {
          width: 50px;
          height: 50px;
          background: var(--surface-container);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .item-title-price {
          display: flex;
          flex-direction: column;
        }

        .item-title-price h3 {
          font-size: 16px;
          color: var(--on-surface);
          font-weight: 600;
          margin-bottom: 4px;
        }

        .item-title-price .price {
          font-size: 15px;
          color: var(--primary);
          font-weight: 700;
        }

        .card-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
        }

        .qty-selector-modern {
          display: flex;
          align-items: center;
          background: var(--surface-container-high);
          border-radius: 8px;
          padding: 4px;
        }

        .qty-selector-modern button {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          border: none;
          background: var(--white);
          color: var(--primary);
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.2s;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

        .qty-selector-modern button:hover {
          background: var(--primary);
          color: var(--white);
        }

        .qty-selector-modern span {
          width: 30px;
          text-align: center;
          font-weight: 600;
          color: var(--on-surface);
        }

        .btn-add-modern {
          background: var(--primary);
          color: var(--white);
          border: none;
          padding: 10px 16px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
          font-size: 14px;
        }

        .btn-add-modern:hover {
          background: var(--primary-container);
          transform: scale(1.05);
        }

        /* RIGHT SIDE - STICKY CART */
        .cart-checkout-side {
          position: relative;
        }

        .sticky-cart-container {
          position: sticky;
          top: 120px;
          background: var(--white);
          border-radius: 24px;
          padding: 30px;
          box-shadow: 0 25px 50px rgba(111, 78, 55, 0.1);
          border: 1px solid rgba(111, 78, 55, 0.1);
          display: flex;
          flex-direction: column;
          max-height: calc(100vh - 140px);
          overflow-y: auto;
        }

        /* Webkit scrollbar for cart */
        .sticky-cart-container::-webkit-scrollbar {
          width: 6px;
        }
        .sticky-cart-container::-webkit-scrollbar-thumb {
          background-color: var(--outline);
          border-radius: 10px;
        }

        .cart-header h2 {
          font-size: 22px;
          color: var(--primary);
          border-bottom: 2px solid var(--surface-container-high);
          padding-bottom: 16px;
          margin-bottom: 20px;
        }

        .empty-cart-modern {
          text-align: center;
          padding: 40px 0;
          color: var(--on-surface-variant);
        }

        .empty-icon {
          font-size: 48px;
          display: block;
          margin-bottom: 16px;
          opacity: 0.5;
        }

        .empty-cart-modern p {
          font-size: 18px;
          font-weight: 600;
        }

        .cart-items-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 24px;
        }

        .cart-item-modern {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 16px;
          background: var(--surface-container);
          border-radius: 12px;
          transition: 0.3s;
        }

        .cart-item-modern:hover {
          background: var(--surface-container-high);
        }

        .item-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .item-info h4 {
          font-size: 15px;
          color: var(--on-surface);
          margin: 0;
        }

        .item-unit-price {
          font-size: 13px;
          color: var(--on-surface-variant);
        }

        .item-controls-price {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .compact-qty-selector {
          display: flex;
          align-items: center;
          background: var(--white);
          border-radius: 6px;
          border: 1px solid var(--outline);
        }

        .compact-qty-selector button {
          border: none;
          background: transparent;
          width: 24px;
          height: 24px;
          cursor: pointer;
          color: var(--primary);
          font-weight: bold;
        }

        .compact-qty-selector span {
          width: 20px;
          text-align: center;
          font-size: 13px;
          font-weight: 600;
        }

        .item-total-price {
          font-weight: 700;
          color: var(--primary);
          font-size: 15px;
        }

        .remove-item-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          font-size: 14px;
          opacity: 0.7;
          transition: 0.3s;
        }

        .remove-item-btn:hover {
          opacity: 1;
          transform: scale(1.1);
        }

        .cart-summary-modern {
          background: var(--secondary-container);
          padding: 20px;
          border-radius: 16px;
          margin-bottom: 24px;
        }

        .summary-line {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
          color: var(--on-surface-variant);
          font-size: 15px;
        }

        .summary-line.total {
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px dashed var(--primary);
          font-size: 18px;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 0;
        }

        .checkout-form-modern h3 {
          font-size: 16px;
          color: var(--primary);
          margin-bottom: 12px;
          margin-top: 24px;
        }

        .input-group {
          margin-bottom: 12px;
        }

        .input-group input,
        .input-group select,
        .input-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid var(--outline);
          border-radius: 8px;
          font-family: inherit;
          font-size: 14px;
          background: var(--white);
          transition: 0.3s;
        }

        .input-group input:focus,
        .input-group select:focus,
        .input-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(111, 78, 55, 0.1);
        }

        .payment-options {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }

        .radio-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          cursor: pointer;
          color: var(--on-surface);
        }

        .place-order-btn {
          width: 100%;
          padding: 16px;
          background: var(--primary);
          color: var(--white);
          border: none;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px rgba(111, 78, 55, 0.2);
        }

        .place-order-btn:hover:not(:disabled) {
          background: var(--primary-container);
          transform: translateY(-2px);
          box-shadow: 0 15px 25px rgba(111, 78, 55, 0.3);
        }

        .place-order-btn:disabled {
          background: var(--outline);
          cursor: not-allowed;
          box-shadow: none;
          transform: none;
        }

        /* SUCCESS MODAL */
        .order-success-modal {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content {
          background: var(--white);
          padding: 60px 40px;
          border-radius: 24px;
          text-align: center;
          max-width: 500px;
          width: 90%;
          box-shadow: 0 30px 60px rgba(0,0,0,0.2);
          animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes slideUp {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .success-icon-large {
          font-size: 72px;
          margin-bottom: 20px;
        }

        .modal-content h2 {
          font-size: 28px;
          color: var(--primary);
          margin-bottom: 12px;
        }

        .modal-content p {
          color: var(--on-surface-variant);
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 32px;
        }

        .modal-actions {
          display: flex;
          justify-content: center;
          gap: 16px;
        }

        .btn-primary-modern, .btn-secondary-modern {
          padding: 12px 24px;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
          text-decoration: none;
          font-size: 15px;
        }

        .btn-primary-modern {
          background: var(--primary);
          color: var(--white);
          border: none;
        }

        .btn-primary-modern:hover {
          background: var(--primary-container);
        }

        .btn-secondary-modern {
          background: transparent;
          color: var(--primary);
          border: 2px solid var(--primary);
        }

        .btn-secondary-modern:hover {
          background: var(--primary);
          color: var(--white);
        }

        @media (max-width: 992px) {
          .order-layout-modern {
            grid-template-columns: 1fr;
          }
          
          .sticky-cart-container {
            position: relative;
            top: 0;
            max-height: none;
            overflow: visible;
          }
        }
      `}</style>
    </>
  );
}

function OrderMenuItem({ item, onAdd }) {
  const [qty, setQty] = useState(1);

  const handleAdd = () => {
    onAdd(item, qty);
    setQty(1); // reset after adding
  };

  return (
    <div className="premium-item-card">
      <div className="card-header">
        <div className="item-image-placeholder">{item.img}</div>
        <div className="item-title-price">
          <h3>{item.name}</h3>
          <span className="price">LKR {item.price}</span>
        </div>
      </div>
      <div className="card-actions">
        <div className="qty-selector-modern">
          <button type="button" onClick={() => setQty(q => Math.max(1, q - 1))}>-</button>
          <span>{qty}</span>
          <button type="button" onClick={() => setQty(q => q + 1)}>+</button>
        </div>
        <button type="button" className="btn-add-modern" onClick={handleAdd}>Add 🟤</button>
      </div>
    </div>
  );
}
