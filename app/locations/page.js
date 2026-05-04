import Header from '../../components/Header';

export default function Locations() {
  const locations = [
    { name: 'Colombo 03 – Kollupitiya', email: 'mugsandkisses@lk.com', contact: '+94789123456' },
    { name: 'Colombo 04 – Bambalapitiya', email: 'mugsandkisses@lk.com', contact: '+94789123456' },
    { name: 'Colombo 05 – Havelock Town', email: 'mugsandkisses@lk.com', contact: '+94789123456' },
    { name: 'Colombo 07 – Cinnamon Gardens', email: 'mugsandkisses@lk.com', contact: '+94789123456' },
    { name: 'Colombo 02 – Slave Island', email: 'mugsandkisses@lk.com', contact: '+94789123456' },
    { name: 'Colombo 06 – Wellawatte', email: 'mugsandkisses@lk.com', contact: '+94789123456' },
  ];

  return (
    <>
      <Header />
      <main className="locations-page">
        <section className="section-padding">
          <div className="container">
            <div className="locations-header">
              <span className="hero-tag">Visit Us</span>
              <h1 className="section-title">Our Locations</h1>
              <p className="locations-subtitle">Find a Mugs & Kisses near you and drop by for your daily dose of love and caffeine.</p>
            </div>

            <div className="locations-grid">
              {locations.map((loc, index) => (
                <div key={index} className="location-card glass">
                  <h3>{loc.name}</h3>
                  <div className="location-details">
                    <p><strong>Email:</strong> {loc.email}</p>
                    <p><strong>Contact:</strong> {loc.contact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-padding">
          <div className="container">
            <div className="contact-container glass">
              <div className="contact-header">
                <h2>Get in Touch</h2>
                <p>Have a question or feedback? We'd love to hear from you.</p>
              </div>
              
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Enter your name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Enter your email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="5" placeholder="Write your message here..." required></textarea>
                </div>
                
                <button type="submit" className="btn-primary-large">Send Message</button>
              </form>
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
