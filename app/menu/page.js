import Header from '../../components/Header';

export default function Menu() {
  const signatureCoffees = [
    { name: 'Classic Cappuccino', price: '850', desc: 'Rich espresso topped with velvety milk foam. A timeless favorite for true coffee lovers.' },
    { name: 'Café Latte', price: '900', desc: 'Smooth espresso blended with steamed milk for a creamy, comforting sip.' },
    { name: 'Caramel Macchiato', price: '1100', desc: 'Espresso layered with milk and finished with sweet caramel drizzle. Perfect for a romantic treat.' },
    { name: 'Mocha Delight', price: '1200', desc: 'A heavenly mix of chocolate and espresso topped with whipped cream.' },
    { name: 'Vanilla Sweet Cream Latte', price: '1150', desc: 'Soft vanilla flavor with silky milk and bold espresso notes.' },
    { name: 'Hazelnut Cappuccino', price: '1150', desc: 'Nutty, aromatic coffee with a cozy finish.' },
    { name: 'Iced Coffee (Chilled Brew)', price: '950', desc: 'Refreshing cold coffee, lightly sweetened and perfect for Colombo weather.' },
    { name: 'Espresso Shot (Single/Double)', price: '600 / 900', desc: 'Pure, bold, and intense coffee experience.' }
  ];

  const bakery = [
    { name: 'Butter Croissant', price: '750', desc: 'Flaky, golden pastry baked fresh daily.' },
    { name: 'Chocolate Croissant', price: '850', desc: 'Buttery layers filled with rich melted chocolate.' },
    { name: 'Red Velvet Cake Slice', price: '1200', desc: 'Soft, moist cake with creamy frosting—perfect for couples.' },
    { name: 'Chocolate Fudge Cake', price: '1300', desc: 'Decadent, rich chocolate cake for true dessert lovers.' },
    { name: 'Blueberry Cheesecake', price: '1400', desc: 'Creamy cheesecake topped with sweet blueberry glaze.' },
    { name: 'Cinnamon Rolls', price: '950', desc: 'Soft rolls with cinnamon sugar and cream glaze.' },
    { name: 'Banana Bread (Homemade)', price: '800', desc: 'Warm, moist, and freshly baked with natural sweetness.' }
  ];

  const sweetTreats = [
    { name: 'Chocolate Brownie', price: '700', desc: 'Dense and fudgy with deep chocolate flavor.' },
    { name: 'Macarons (Box of 4)', price: '1200', desc: 'Colorful French treats with delicate fillings.' },
    { name: 'Waffles with Honey & Fruits', price: '1300', desc: 'Crispy waffles served with fresh fruits and honey.' },
    { name: 'Pancake Stack', price: '1250', desc: 'Soft pancakes layered with syrup and cream.' },
    { name: 'Ice Cream Sundae', price: '1100', desc: 'Vanilla ice cream topped with chocolate sauce and nuts.' },
    { name: 'Strawberry Tart', price: '1200', desc: 'Sweet and tangy strawberries on a buttery crust.' }
  ];

  const juices = [
    { name: 'Fresh Orange Juice', price: '800', desc: 'Freshly squeezed and full of vitamin C.' },
    { name: 'Watermelon Juice', price: '750', desc: 'Light, refreshing, and hydrating.' },
    { name: 'Mango Smoothie', price: '900', desc: 'Thick, creamy tropical mango blend.' },
    { name: 'Mixed Berry Smoothie', price: '1100', desc: 'A rich blend of strawberries, blueberries, and yogurt.' },
    { name: 'Iced Lemon Tea', price: '700', desc: 'Cool tea infused with lemon and a hint of sweetness.' },
    { name: 'Milkshakes (Choc/Vanilla/Strawberry)', price: '1000', desc: 'Thick, creamy shakes loved by all ages.' }
  ];

  const renderSection = (title, items) => (
    <div className="menu-section">
      <h2 className="menu-section-title">{title}</h2>
      <div className="menu-grid">
        {items.map((item, idx) => (
          <div key={idx} className="menu-item glass">
            <div className="menu-item-header">
              <h3 className="menu-item-name">{item.name}</h3>
              <span className="menu-item-price">LKR {item.price}</span>
            </div>
            <div className="menu-item-dots"></div>
            <p className="menu-item-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Header />
      <main className="menu-page">
        <section className="menu-hero section-padding">
          <div className="container text-center">
            <span className="hero-tag">Boutique Coffee &amp; Bakery | Colombo</span>
            <h1 className="hero-title">Our Menu</h1>
            <p className="locations-subtitle mt-2">Discover our carefully crafted selection of beverages and treats.</p>
          </div>
        </section>

        <section className="menu-content section-padding pt-0">
          <div className="container">
            {renderSection('☕ Signature Coffees', signatureCoffees)}
            {renderSection('🥐 Bakery & Pastries', bakery)}
            {renderSection('🍰 Sweet Treats', sweetTreats)}
            {renderSection('🍹 Fresh Juices & Beverages', juices)}
            
            {/* Special Combo Section */}
            <div className="combo-banner glass mt-48">
              <div className="combo-icon">💑</div>
              <div className="combo-content">
                <span className="hero-tag">Special Combo for Couples</span>
                <h2>“Love Combo”</h2>
                <p className="combo-items">2 Cappuccinos • 1 Red Velvet Cake • 1 Chocolate Brownie</p>
                <p className="combo-desc">Perfect for sharing special moments together.</p>
              </div>
              <div className="combo-price">
                LKR 2500
              </div>
            </div>
            
            <div className="menu-footer text-center mt-48">
              <p className="promise-highlight text-20">Every cup, every bite — made with love at Mugs &amp; Kisses.</p>
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
          <div className="footer-links">
            <div className="link-group">
              <h4>Shop</h4>
              <ul>
                <li>Menu</li>
                <li>Bakery</li>
                <li>Merchandise</li>
              </ul>
            </div>
            <div className="link-group">
              <h4>Company</h4>
              <ul>
                <li>About Us</li>
                <li>Contact</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Mugs &amp; Kisses. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
