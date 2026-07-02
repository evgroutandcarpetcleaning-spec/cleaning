import React, { useEffect } from 'react';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

function TermsConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container fade-in" style={{ padding: '60px 0', backgroundColor: '#f8fafc' }}>
      <div className="container">
        <div className="section-title text-center" style={{ marginBottom: '40px' }}>
          <h2>Terms & <span className="text-primary">Conditions</span></h2>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
          
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#1e293b' }}>Terms & Conditions</h3>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '16px' }}>
              Welcome to EV Grout & Carpet Cleaning.
            </p>
            <p style={{ color: '#475569', lineHeight: '1.6' }}>
              These Terms & Conditions govern your use of our website and the professional cleaning services we provide. By accessing our website or booking our services, you agree to these terms.
            </p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#1e293b' }}>Our Services</h3>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '12px' }}>We provide professional residential and commercial cleaning services, including:</p>
            <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px', listStyleType: 'disc', marginBottom: '16px' }}>
              <li>Tile & Grout Cleaning</li>
              <li>Tile Regrouting</li>
              <li>Tile Sealing</li>
              <li>Carpet Steam Cleaning</li>
              <li>Pressure Washing</li>
              <li>End of Lease Carpet Cleaning</li>
              <li>Floor Restoration Services</li>
            </ul>
            <p style={{ color: '#475569', lineHeight: '1.6' }}>Service availability may vary depending on location, scheduling, and inspection of the work area.</p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#1e293b' }}>Quotes & Pricing</h3>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '16px' }}>All quotations are provided based on the information available at the time.</p>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '16px' }}>If additional work is identified during the inspection, we will discuss any changes with you before proceeding.</p>
            <p style={{ color: '#475569', lineHeight: '1.6' }}>There are no hidden charges for approved work.</p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#1e293b' }}>Bookings</h3>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '16px' }}>Appointments may be booked by phone, email, or through our website.</p>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '16px' }}>While we make every effort to arrive on time, unforeseen circumstances such as weather, traffic, or earlier jobs may occasionally cause delays.</p>
            <p style={{ color: '#475569', lineHeight: '1.6' }}>If delays occur, we will communicate with you as soon as possible.</p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#1e293b' }}>Customer Responsibilities</h3>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '12px' }}>To help us provide the best possible service, customers are responsible for:</p>
            <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px', listStyleType: 'disc', marginBottom: '16px' }}>
              <li>Providing safe and reasonable access to the property.</li>
              <li>Removing fragile, valuable, or breakable items before cleaning.</li>
              <li>Informing us about existing damage, loose tiles, cracked grout, delicate flooring, or special materials.</li>
              <li>Ensuring pets and children are safely supervised during the service where appropriate.</li>
            </ul>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#1e293b' }}>Payments</h3>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '16px' }}>Unless otherwise agreed, payment is due upon completion of the service.</p>
            <p style={{ color: '#475569', lineHeight: '1.6' }}>Accepted payment methods will be confirmed when your booking is made.</p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#1e293b' }}>Cancellations & Rescheduling</h3>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '16px' }}>If you need to cancel or reschedule your appointment, we kindly request at least 24 hours' notice.</p>
            <p style={{ color: '#475569', lineHeight: '1.6' }}>Late cancellations or missed appointments may result in a cancellation fee where permitted.</p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#1e293b' }}>Service Results</h3>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '16px' }}>We use professional equipment, industry-approved cleaning methods, and quality products to achieve the best possible results.</p>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '12px' }}>However, cleaning outcomes can vary depending on factors including:</p>
            <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px', listStyleType: 'disc', marginBottom: '16px' }}>
              <li>Age of the surface</li>
              <li>Previous treatments</li>
              <li>Permanent staining</li>
              <li>Material type</li>
              <li>Wear and tear</li>
              <li>Existing damage</li>
            </ul>
            <p style={{ color: '#475569', lineHeight: '1.6' }}>For this reason, we cannot guarantee the complete removal of every stain or restoration of every surface.</p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#1e293b' }}>Satisfaction Commitment</h3>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '16px' }}>Customer satisfaction is important to us.</p>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '16px' }}>If you believe your service has not been completed to a reasonable professional standard, please contact us within 48 hours of your appointment.</p>
            <p style={{ color: '#475569', lineHeight: '1.6' }}>Where appropriate, we may inspect the work and, if necessary, arrange a suitable solution.</p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#1e293b' }}>Limitation of Liability</h3>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '12px' }}>To the extent permitted by applicable law, EV Grout & Carpet Cleaning is not responsible for:</p>
            <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px', listStyleType: 'disc', marginBottom: '16px' }}>
              <li>Pre-existing damage</li>
              <li>Hidden defects</li>
              <li>Manufacturing faults</li>
              <li>Improper installation</li>
              <li>Normal wear and ageing</li>
              <li>Damage resulting from inaccurate information provided by the customer</li>
            </ul>
            <p style={{ color: '#475569', lineHeight: '1.6' }}>Nothing in these Terms excludes any rights or guarantees that cannot legally be excluded under applicable consumer laws.</p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#1e293b' }}>Intellectual Property</h3>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '16px' }}>All website content, including text, graphics, logos, photographs, designs, and branding, remains the property of EV Grout & Carpet Cleaning unless otherwise stated.</p>
            <p style={{ color: '#475569', lineHeight: '1.6' }}>No material may be copied, reproduced, or distributed without prior written permission.</p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#1e293b' }}>Website Use</h3>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '12px' }}>You agree to use our website responsibly and only for lawful purposes. You must not:</p>
            <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px', listStyleType: 'disc', marginBottom: '16px' }}>
              <li>Attempt to interfere with website security.</li>
              <li>Introduce malicious software.</li>
              <li>Copy website content without permission.</li>
              <li>Use the website in any unlawful manner.</li>
            </ul>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#1e293b' }}>Changes to These Terms</h3>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '16px' }}>We may update these Terms & Conditions from time to time.</p>
            <p style={{ color: '#475569', lineHeight: '1.6' }}>Any updates will become effective when published on this page.</p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#1e293b' }}>Governing Law</h3>
            <p style={{ color: '#475569', lineHeight: '1.6' }}>These Terms & Conditions are governed by the laws applicable in Australia.</p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#1e293b' }}>Contact Us</h3>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '16px' }}>
              If you have any questions regarding these Terms & Conditions, please contact us.
            </p>
            <div style={{ backgroundColor: '#f1f5f9', padding: '20px', borderRadius: '8px' }}>
              <h4 style={{ fontWeight: '600', marginBottom: '12px', color: '#0f172a' }}>EV Grout & Carpet Cleaning</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', color: '#475569' }}>
                  <MapPin size={18} style={{ marginRight: '12px', color: 'var(--primary)' }} />
                  <span>Campbelltown NSW 2560</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', color: '#475569' }}>
                  <Phone size={18} style={{ marginRight: '12px', color: 'var(--primary)' }} />
                  <a href="tel:0499848519" style={{ color: 'inherit', textDecoration: 'none' }}>0499 848 519</a>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', color: '#475569' }}>
                  <Mail size={18} style={{ marginRight: '12px', color: 'var(--primary)' }} />
                  <a href="mailto:evgroutandcarpetcleaning@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>evgroutandcarpetcleaning@gmail.com</a>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', color: '#475569' }}>
                  <Clock size={18} style={{ marginRight: '12px', color: 'var(--primary)' }} />
                  <span>Available 24 Hours | 7 Days</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsConditions;
