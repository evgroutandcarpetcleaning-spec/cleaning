import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar } from 'lucide-react';

function MobileCallBar() {
  return (
    <div className="mobile-call-bar" id="mobile-quick-actions">
      <div className="mobile-call-bar-content">
        <a href="tel:0499848519" className="btn btn-secondary" id="mobile-call-btn">
          <Phone size={16} /> Call Now
        </a>
        <Link to="/contact" className="btn btn-primary" id="mobile-book-btn">
          <Calendar size={16} /> Book Online
        </Link>
      </div>
    </div>
  );
}

export default MobileCallBar;
