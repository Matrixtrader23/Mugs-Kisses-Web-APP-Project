import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="header glass">
      <div className="container header-content">
        <Link href="/" className="logo-container">
          <Image 
            src="/logo-v2.png" 
            alt="Mugs & Kisses Logo" 
            width={300} 
            height={100} 
            className="logo-img"
            priority
          />
        </Link>
        
        <nav className="nav-links">
          <Link href="/menu">Menu</Link>
          <Link href="/about">Our Story</Link>
          <Link href="/locations">Locations</Link>
        </nav>
        
        <div className="header-actions">
          <Link href="/login" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center' }}>Log In</Link>
          <Link href="/order" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center' }}>Order Now</Link>
        </div>
      </div>
    </header>
  );
}
