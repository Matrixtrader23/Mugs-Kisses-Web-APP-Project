import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        
        <section className="features section-padding">
          <div className="container">
            <h2 className="section-title">Why Mugs & Kisses?</h2>
            <div className="features-grid">
              <div className="feature-card glass">
                <div className="feature-image-wrapper">
                  <img src="/espresso-specialty.jpg" alt="Artisanal Coffee" className="feature-img" />
                </div>
                <h3>Artisanal Coffee</h3>
                <p>Single-origin beans roasted to perfection by our master roasters.</p>
              </div>
              
              <div className="feature-card glass">
                <div className="feature-image-wrapper">
                  <img src="/pastry-fresh.jpg" alt="Daily Bakes" className="feature-img" />
                </div>
                <h3>Daily Bakes</h3>
                <p>Fresh pastries and bread baked every morning with premium ingredients.</p>
              </div>
              
              <div className="feature-card glass">
                <div className="feature-image-wrapper">
                  <img src="/boutique-vibe.jpg" alt="Boutique Vibe" className="feature-img" />
                </div>
                <h3>Boutique Vibe</h3>
                <p>A minimalist space designed for your comfort and inspiration.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about section-padding">
          <div className="container about-container">
            <div className="about-image-wrapper glass">
              <img src="/our-story.jpg" alt="Our Story" className="about-img" />
            </div>
            <div className="about-content">
              <span className="hero-tag">Our Legacy</span>
              <h2 className="about-title">Told One Cup at a Time</h2>
              <p>
                Mugs & Kisses began with a simple belief: that coffee is more than just a beverage—it's a ritual that connects us. 
                Our journey started in a small kitchen with a passion for single-origin beans and the perfect croissant.
              </p>
              <p>
                Today, we continue that tradition in our boutique space, where minimalism meets warmth, and every guest is treated like family.
              </p>
              <button className="btn-outline-large">Read More</button>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-info">
            <h3>Mugs & Kisses</h3>
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
          <p>&copy; 2026 Mugs & Kisses. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
