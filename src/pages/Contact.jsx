import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

function Contact() {
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!bookingForm.name || !bookingForm.phone || !bookingForm.email) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const backendUrl = import.meta.env.VITE_API_URL || (
        window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
          ? 'http://localhost:5000/api/send-email'
          : '/send-email.php'
      );

      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingForm),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormSubmitted(true);
        setBookingForm({
          name: '',
          phone: '',
          email: '',
          serviceType: '',
          message: ''
        });
      } else {
        setErrorMessage(data.error || 'Failed to submit request. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('Could not connect to the mail server. Please check your connection or try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetFormStatus = () => {
    setFormSubmitted(false);
    setErrorMessage('');
  };

  return (
    <div className="page-contact">
      {/* Hero Header */}
      <section className="section" style={{ backgroundColor: 'var(--primary-navy)', color: 'var(--white)', paddingTop: '160px', paddingBottom: '80px', textAlign: 'center' }}>
        <div className="container">
          <span className="section-tag" style={{ color: 'var(--gold)', backgroundColor: 'rgba(245, 184, 65, 0.1)' }}>Get a Quote</span>
          <h1 style={{ color: 'var(--white)', fontSize: '3rem', marginBottom: '20px' }}>Contact & Booking</h1>
          <p style={{ color: 'var(--silver)', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto' }}>
            Ready for pristine surfaces? Reach out to schedule a service, request a custom quote, or ask a question.
          </p>
        </div>
      </section>

      {/* Main Form and Contact Details Split */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }} id="contact-split-section">
        <div className="container">
          <div className="contact-faq-container">
            
            {/* Contact Details Column */}
            <div className="contact-details" id="contact-left-details">
              <span className="section-tag">Booking Office</span>
              <h2>How to Reach Us</h2>
              <p style={{ color: 'var(--text-light)', marginBottom: '30px' }}>
                We operate 7 Days a week. Speak to our customer manager directly for immediate quotes or custom strata billing inquiries.
              </p>

              <div className="contact-info-list" id="contact-details-list">
                <div className="contact-info-item">
                  <div className="contact-icon-wrapper">
                    <Phone size={20} />
                  </div>
                  <div className="contact-info-content">
                    <h4>Direct Call Phone</h4>
                    <p><a href="tel:0499848519" id="contact-phone-link" style={{ fontWeight: '700', color: 'var(--primary-blue)' }}>Victor: 0499 848 519</a></p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon-wrapper">
                    <Mail size={20} />
                  </div>
                  <div className="contact-info-content">
                    <h4>Customer Care Email</h4>
                    <p><a href="mailto:evgroutandcarpetcleaning@gmail.com" id="contact-email-link">evgroutandcarpetcleaning@gmail.com</a></p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon-wrapper">
                    <MapPin size={20} />
                  </div>
                  <div className="contact-info-content">
                    <h4>Office HQ Address</h4>
                    <p>Campbelltown NSW 2560, Australia</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon-wrapper">
                    <Clock size={20} />
                  </div>
                  <div className="contact-info-content">
                    <h4>Operating Hours</h4>
                    <p>24 Hours / 7 Days</p>
                  </div>
                </div>
              </div>

              {/* Emergency Service Banner */}
              <div className="glass-card" style={{ padding: '24px', borderRadius: 'var(--br-md)', border: '1px solid rgba(11, 31, 58, 0.05)', backgroundColor: 'var(--bg-light)', marginTop: '20px' }} id="emergency-cta-box">
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-blue)', marginBottom: '8px' }}>
                  <Clock size={18} /> Emergency Carpet Stain Spill?
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-light)', marginBottom: '12px' }}>
                  Spilled red wine, coffee, or pet urine? Time is critical. Call us immediately for direct tips or emergency spot cleaning.
                </p>
                <a href="tel:0499848519" className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.85rem' }} id="emergency-call-btn">
                  Call Victor Now
                </a>
              </div>
            </div>

            {/* Booking Form Card Column */}
            <div className="booking-form-wrapper glass-card-dark" style={{ padding: '40px', borderRadius: 'var(--br-lg)', backgroundColor: 'var(--primary-navy)', color: 'var(--white)' }} id="booking-form-container">
              <h3 style={{ color: 'var(--white)', fontSize: '1.6rem', marginBottom: '10px' }}>Request a Free Quote</h3>
              <p style={{ color: 'var(--silver)', fontSize: '0.9rem', marginBottom: '30px' }}>Quick, hassle-free booking. We reply within 30 minutes.</p>

              {formSubmitted ? (
                <div className="booking-success-message" id="booking-success-box" style={{ backgroundColor: 'rgba(37, 211, 102, 0.12)', border: '1px solid #25D366', padding: '24px', borderRadius: 'var(--br-sm)' }}>
                  <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#25D366', fontWeight: '700', fontSize: '1.1rem' }}>
                    <CheckCircle2 size={24} /> Booking Request Received!
                  </p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--silver)', marginTop: '12px', lineHeight: '1.6' }}>
                    Thank you! Our service manager will contact you at your phone number shortly to confirm pricing and select an exact time slot.
                  </p>
                  <button 
                    onClick={resetFormStatus} 
                    className="btn btn-primary" 
                    style={{ marginTop: '24px', padding: '10px 20px', fontSize: '0.88rem' }}
                    id="reset-form-btn"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="booking-form" id="service-booking-form">
                  <div className="form-group">
                    <label htmlFor="name-input">Full Name *</label>
                    <input 
                      type="text" 
                      id="name-input"
                      name="name"
                      value={bookingForm.name} 
                      onChange={handleInputChange} 
                      className="form-control" 
                      placeholder="John Doe" 
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone-input">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone-input"
                      name="phone"
                      value={bookingForm.phone} 
                      onChange={handleInputChange} 
                      className="form-control" 
                      placeholder="0499 848 519" 
                      required 
                    />
                  </div>

                  <div className="form-group-full">
                    <label htmlFor="email-input">Email Address *</label>
                    <input 
                      type="email" 
                      id="email-input"
                      name="email"
                      value={bookingForm.email} 
                      onChange={handleInputChange} 
                      className="form-control" 
                      placeholder="john@example.com" 
                      required 
                    />
                  </div>

                  <div className="form-group-full">
                    <label htmlFor="service-select">Select Service Type</label>
                    <select 
                      id="service-select"
                      name="serviceType"
                      value={bookingForm.serviceType} 
                      onChange={handleInputChange} 
                      className="form-control"
                      style={{ color: 'var(--white)' }}
                    >
                      <option value="" style={{ color: 'var(--text-main)' }}>-- Choose a Service --</option>
                      <option value="tile-grout" style={{ color: 'var(--text-main)' }}>Tile & Grout Deep Clean</option>
                      <option value="regrouting" style={{ color: 'var(--text-main)' }}>Regrouting & Protection Sealing</option>
                      <option value="carpet-steam" style={{ color: 'var(--text-main)' }}>Carpet Steam Cleaning</option>
                      <option value="stain-removal" style={{ color: 'var(--text-main)' }}>Spot & Pet Stain Removal</option>
                      <option value="end-lease" style={{ color: 'var(--text-main)' }}>End of Lease Carpet Clean</option>
                    </select>
                  </div>

                  <div className="form-group-full">
                    <label htmlFor="message-textarea">Special Instructions / Message</label>
                    <textarea 
                      id="message-textarea"
                      name="message"
                      value={bookingForm.message} 
                      onChange={handleInputChange} 
                      className="form-control" 
                      placeholder="Provide details about floor size, rooms, or soil conditions..."
                      style={{ minHeight: '120px' }}
                    ></textarea>
                  </div>

                  {errorMessage && (
                    <div style={{ 
                      gridColumn: 'span 2', 
                      backgroundColor: 'rgba(239, 68, 68, 0.12)', 
                      border: '1px solid #EF4444', 
                      padding: '12px 16px', 
                      borderRadius: 'var(--br-sm)', 
                      color: '#EF4444', 
                      fontSize: '0.9rem', 
                      marginBottom: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <span>⚠️ {errorMessage}</span>
                    </div>
                  )}

                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    id="booking-submit-btn" 
                    style={{ gridColumn: 'span 2', width: '100%', marginTop: '10px' }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending Request...' : 'Send Booking Request'} <Send size={16} />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Map Embed Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-light)', padding: '0 0 100px 0' }} id="map-embed-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '40px' }}>
            <span className="section-tag">Locate Us</span>
            <h2>Our Operational Area</h2>
            <p className="section-subtitle">Based in Campbelltown, we clean homes and offices across NSW 2560 and surrounding areas.</p>
          </div>

          <div className="map-container" id="google-maps-embed" style={{ height: '450px', borderRadius: 'var(--br-lg)', boxShadow: 'var(--shadow-medium)' }}>
            <iframe 
              title="Google Maps Location EV Grout & Carpet Cleaning Campbelltown"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52950.553956660144!2d150.7712396!3d-34.0640428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12f6a7372d8a0f%3A0x5017d681632f7a0!2sCampbelltown%20NSW%202560!5e0!3m2!1sen!2sau!4v1716456789000!5m2!1sen!2sau" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              style={{ width: '100%', height: '100%', border: 'none' }}
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
