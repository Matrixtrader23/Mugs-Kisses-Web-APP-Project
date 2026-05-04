import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero section-padding">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-tag">Boutique Coffee & Bakery</span>
          <h1 className="hero-title">
            Where Every Sip <br /> 
            <span>Feels Like a Kiss</span>
          </h1>
          <p className="hero-description">
            Experience the warmth of artisanal coffee and premium baked treats. 
            Crafted with love, served with a smile.
          </p>
          <div className="hero-actions">
            <Link href="/menu" className="btn-primary">Explore Menu</Link>
            <Link href="/about" className="btn-primary">Our Story</Link>
          </div>
        </div>
        
        <div className="hero-image-container">
          <div className="hero-image-wrapper glass">
            <Image 
              src="/hero-cafe.jpg" 
              alt="Mugs & Kisses Boutique Cafe" 
              fill
              className="hero-img"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
