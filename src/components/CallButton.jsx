import React from 'react';
import { Phone } from 'lucide-react';

function CallButton() {
  return (
    <a 
      href="tel:0499848519" 
      className="call-float" 
      aria-label="Call us now"
      id="call-floating-btn"
    >
      <Phone size={26} strokeWidth={2.5} />
    </a>
  );
}

export default CallButton;
