import Header from '../../components/Header';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Header />
      <main className="about-page">
        {/* 1. Hero Section */}
        <section className="about-hero section-padding">
          <div className="container text-center">
            <span className="hero-tag">Our Story</span>
            <h1 className="hero-title">Where Love Meets Every Sip</h1>
            <p className="hero-description mx-auto">
              At Mugs &amp; Kisses, we believe coffee is more than just a drink — it’s a moment, a feeling, a connection.
              Born in the heart of Colombo, our space was designed for couples, dreamers, and true coffee lovers seeking comfort, calm, and something beautifully different.
            </p>
          </div>
        </section>

        {/* 2. Our Beginning */}
        <section className="story-section section-padding glass-section">
          <div className="container text-center max-w-800">
            <div className="section-icon">☕</div>
            <h2 className="section-title">How It All Started</h2>
            <p className="story-text">
              Mugs &amp; Kisses was created with a simple idea — to build a cozy escape from the busy city life of Colombo.
              Inspired by boutique cafés around the world and the warmth of Sri Lankan hospitality, we wanted a place where people could slow down, connect, and enjoy meaningful moments.
            </p>
            <p className="story-text">
              From our very first cup served, our goal has been to create an experience that feels personal, intimate, and unforgettable.
            </p>
          </div>
        </section>

        {/* 3. Our Space & Experience */}
        <section className="story-section section-padding">
          <div className="container text-center max-w-800">
            <div className="section-icon">🏡</div>
            <h2 className="section-title">A Place to Feel</h2>
            <div className="story-image-wrapper glass">
              <img src="/about-interior.jpg" alt="Cozy Interior" className="story-img" />
            </div>
            <p className="story-text mt-32">
              Step inside and you’ll notice the difference.
              Our boutique-style interior is thoughtfully designed with soft lighting, warm tones, and cozy corners — perfect for quiet conversations, date nights, or peaceful alone time.
            </p>
            <p className="story-text">
              We’ve created a calm and intimate atmosphere where every guest can relax, far away from the noise, and truly enjoy the moment.
            </p>
          </div>
        </section>

        {/* 4. What We Serve */}
        <section className="story-section section-padding glass-section">
          <div className="container text-center max-w-800">
            <div className="section-icon">🍰</div>
            <h2 className="section-title">Crafted with Love</h2>
            <p className="story-text">We take pride in serving:</p>
            <ul className="story-list">
              <li>✨ Freshly brewed premium coffee</li>
              <li>✨ Handmade bakery items and sweets</li>
              <li>✨ Carefully selected beverages</li>
            </ul>
            <div className="story-image-wrapper glass mt-32">
              <img src="/about-coffee.jpg" alt="Premium Coffee and Bakery" className="story-img" />
            </div>
            <p className="story-text mt-32">
              Every item is prepared with attention to detail, using quality ingredients and a touch of homemade love — because we believe you can taste the difference.
            </p>
          </div>
        </section>

        {/* 5. For Couples & Coffee Lovers */}
        <section className="story-section section-padding">
          <div className="container text-center max-w-800">
            <div className="section-icon">💑</div>
            <h2 className="section-title">Made for Special Moments</h2>
            <p className="story-text">
              Whether it’s a first date, a quiet catch-up, or simply your daily coffee ritual, Mugs &amp; Kisses is a place where memories are made.
            </p>
            <div className="story-image-wrapper glass my-32">
              <img src="/about-couples.jpg" alt="Couples enjoying coffee" className="story-img" />
            </div>
            <p className="story-text">Our space is designed especially for:</p>
            <ul className="story-list">
              <li>💕 Couples looking for a romantic, peaceful spot</li>
              <li>☕ Coffee lovers who appreciate authentic flavors</li>
              <li>🌿 Anyone who values calm, comfort, and connection</li>
            </ul>
          </div>
        </section>

        {/* 6. Our Promise */}
        <section className="story-section section-padding glass-section">
          <div className="container text-center max-w-800">
            <div className="section-icon">🌿</div>
            <h2 className="section-title">More Than Just Coffee</h2>
            <p className="story-text">We promise to give you:</p>
            <ul className="story-list">
              <li>🌟 A warm and welcoming experience</li>
              <li>🌟 Consistently high-quality coffee and treats</li>
              <li>🌟 A peaceful environment to unwind</li>
            </ul>
            <h3 className="promise-highlight mt-32">
              Because at Mugs &amp; Kisses, every sip should feel like a kiss.
            </h3>
          </div>
        </section>

        {/* 7. Closing Line / CTA */}
        <section className="cta-section section-padding text-center">
          <div className="container">
            <h2>Visit us in Colombo and discover your new favorite escape.</h2>
            <div className="cta-actions mt-32">
              <Link href="/menu" className="btn-primary-large mx-2">Explore Our Menu</Link>
              <Link href="/locations" className="btn-outline-large mx-2">Find a Location</Link>
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
