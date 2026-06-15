import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Clock, Calendar, Menu, X } from 'lucide-react';
import logoImg from '../assets/e.v.logo.jpeg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`header-wrapper ${isSticky ? 'sticky' : ''}`}>
      {/* Top Utility Bar */}
      <div className="header-top-bar">
        <div className="container header-top-container">
          <div className="top-bar-left">
            <span className="top-bar-item">
              <Mail size={13} style={{ color: 'var(--gold)' }} />
              <a href="mailto:evgroutandcarpetcleaning@gmail.com">evgroutandcarpetcleaning@gmail.com</a>
            </span>
            <span className="top-bar-item">
              <Clock size={13} style={{ color: 'var(--gold)' }} />
              <span>24 Hours / 7 Days</span>
            </span>
          </div>
          <div className="top-bar-right">
            <div className="top-bar-badge">
              <span className="badge-pulse"></span>
              <span>Available Now</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="header-main-nav">
        <div className="container header-container">
          {/* Logo */}
          <Link to="/" className="logo">
            <img 
              src={logoImg} 
              alt="EV Logo" 
              style={{ height: '45px', width: 'auto', borderRadius: '4px', marginRight: '8px' }} 
            />
            <span className="logo-text">EV <span>Grout & Carpet</span></span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="nav-menu">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
            <Link to="/faq" className={`nav-link ${location.pathname === '/faq' ? 'active' : ''}`}>FAQ</Link>
          </nav>

          {/* Header Actions */}
          <div className="header-actions">
            <a href="tel:0499848519" className="btn-outline-call">
              <Phone size={14} />
              <span>0499 848 519</span>
            </a>
            <Link to="/contact" className="btn-header-cta">
              <Calendar size={14} style={{ marginRight: '6px' }} />
              <span>Book Online</span>
            </Link>
          </div>

          {/* Hamburger Menu Toggle (Mobile) */}
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>About</Link>
        <Link to="/faq" className={`nav-link ${location.pathname === '/faq' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>FAQ</Link>
        
        <div style={{ marginTop: '24px', width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <a href="tel:0499848519" className="btn-outline-call" style={{ justifyContent: 'center', color: 'var(--white)', borderColor: 'rgba(255,255,255,0.2)' }}>
            <Phone size={14} />
            <span>0499 848 519</span>
          </a>
          <Link to="/contact" className="btn-header-cta" style={{ width: '100%', textAlign: 'center' }} onClick={() => setIsMenuOpen(false)}>
            <Calendar size={14} style={{ marginRight: '6px' }} />
            <span>Book Online</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
