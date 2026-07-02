import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Sparkles } from 'lucide-react';
import logoImg from '../assets/e.v.logo.jpeg';

// Custom SVG Icons
const FacebookIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const GoogleIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ display: 'block' }}>
    <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.113-5.211 4.113-3.415 0-6.191-2.822-6.191-6.299 0-3.477 2.776-6.299 6.191-6.299 1.565 0 2.979.576 4.074 1.524l3.12-3.12C18.994 1.706 15.827 1 12.24 1 5.938 1 1 5.938 1 12.24s4.938 11.24 11.24 11.24c6.705 0 11.144-4.707 11.144-11.353 0-.616-.056-1.21-.157-1.842H12.24z" />
  </svg>
);

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid" id="footer-links-grid">
          <div className="footer-brand">
            <div className="logo" style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
              <img 
                src={logoImg} 
                alt="EV Logo" 
                style={{ height: '50px', width: 'auto', borderRadius: '4px', objectFit: 'contain', backgroundColor: 'var(--white)', padding: '2px' }} 
              />
            </div>
            <p>
              Premium floor restoration, tile deep cleaning, regrouting, and steam carpet cleaning specialists. Restoring your home's sparkle.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=61590544580739" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: 'var(--white)' }} aria-label="Facebook">
                <FacebookIcon size={18} />
              </a>
              <a href="https://www.instagram.com/evgroutcarpet/" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: 'var(--white)' }} aria-label="Instagram">
                <InstagramIcon size={18} />
              </a>
              <a href="https://share.google/NixtEBNsrDedCKpdW" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: 'var(--white)' }} aria-label="Google My Business">
                <GoogleIcon size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Quick Links</h4>
            <div className="footer-links">
              <Link to="/" className="footer-link-item">Home</Link>
              <Link to="/about" className="footer-link-item">About Us</Link>
              <Link to="/gallery" className="footer-link-item">Before & After</Link>
              <Link to="/faq" className="footer-link-item">FAQs</Link>
              <Link to="/contact" className="footer-link-item">Book Cleaning</Link>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Main Services</h4>
            <div className="footer-links">
              <Link to="/services" className="footer-link-item">Tile & Grout Cleaning</Link>
              <Link to="/services" className="footer-link-item">Carpet Steam Cleaning</Link>
              <Link to="/services" className="footer-link-item">Regrouting Services</Link>
              <Link to="/services" className="footer-link-item">Tile Sealing & Shield</Link>
              <Link to="/services" className="footer-link-item">End of Lease Carpet Clean</Link>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Contact Info</h4>
            <div className="footer-contact-list">
              <a href="tel:0499848519" className="footer-contact-item" style={{ color: 'inherit' }}>
                <Phone className="footer-contact-icon" size={16} />
                <span>Victor: 0499 848 519</span>
              </a>
              <a href="mailto:evgroutandcarpetcleaning@gmail.com" className="footer-contact-item" style={{ color: 'inherit' }}>
                <Mail className="footer-contact-icon" size={16} />
                <span>evgroutandcarpetcleaning@gmail.com</span>
              </a>
              <a href="https://share.google/NixtEBNsrDedCKpdW" target="_blank" rel="noopener noreferrer" className="footer-contact-item" style={{ color: 'inherit', textDecoration: 'none' }}>
                <MapPin className="footer-contact-icon" size={16} />
                <span>Campbelltown NSW 2560</span>
              </a>
              <div className="footer-contact-item">
                <Clock className="footer-contact-icon" size={16} />
                <span>24 Hours / 7 Days</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} EV Grout & Carpet Cleaning. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy" className="footer-bottom-link">Privacy Policy</Link>
            <Link to="/terms-conditions" className="footer-bottom-link">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
