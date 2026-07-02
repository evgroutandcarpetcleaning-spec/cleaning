import React, { useEffect } from 'react';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container fade-in" style={{ padding: '60px 0', backgroundColor: '#f8fafc' }}>
      <div className="container">
        <div className="section-title text-center" style={{ marginBottom: '40px' }}>
          <h2>Privacy <span className="text-primary">Policy</span></h2>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
          
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#1e293b' }}>Privacy Policy</h3>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '16px' }}>
              At EV Grout & Carpet Cleaning, we value your privacy and are committed to protecting the personal information you share with us. Whether you contact us for a quote, book one of our cleaning services, or simply browse our website, we take reasonable steps to ensure your information is handled responsibly.
            </p>
            <p style={{ color: '#475569', lineHeight: '1.6' }}>
              This Privacy Policy explains what information we collect, how we use it, how we protect it, and the choices available to you.
            </p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#1e293b' }}>Information We Collect</h3>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '12px' }}>Depending on how you interact with our business, we may collect information such as:</p>
            <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px', listStyleType: 'disc', marginBottom: '16px' }}>
              <li>Your full name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Property address</li>
              <li>Details about the cleaning services you request</li>
              <li>Appointment preferences</li>
              <li>Payment information (processed securely where applicable)</li>
              <li>Photos you voluntarily provide of areas requiring cleaning</li>
              <li>Any messages or enquiries you send to us</li>
            </ul>
            <p style={{ color: '#475569', lineHeight: '1.6' }}>This information helps us improve our website and services.</p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#1e293b' }}>How We Use Your Information</h3>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '12px' }}>We use your information only for legitimate business purposes, including:</p>
            <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px', listStyleType: 'disc', marginBottom: '16px' }}>
              <li>Responding to your enquiries</li>
              <li>Providing quotations</li>
              <li>Scheduling appointments</li>
              <li>Delivering our cleaning and restoration services</li>
              <li>Processing payments</li>
              <li>Sending booking confirmations and service reminders</li>
              <li>Improving our customer service</li>
              <li>Improving our website performance</li>
              <li>Meeting legal or regulatory obligations where required</li>
            </ul>
            <p style={{ color: '#475569', lineHeight: '1.6' }}>We do not sell, rent, or trade your personal information to third parties.</p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#1e293b' }}>Cookies & Website Analytics</h3>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '12px' }}>Our website may use cookies and similar technologies to improve your browsing experience. Cookies help us:</p>
            <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px', listStyleType: 'disc', marginBottom: '16px' }}>
              <li>Understand how visitors use our website</li>
              <li>Improve website performance</li>
              <li>Remember your preferences</li>
              <li>Measure marketing effectiveness</li>
            </ul>
            <p style={{ color: '#475569', lineHeight: '1.6' }}>You can choose to disable cookies through your web browser at any time. Some website features may not function correctly if cookies are disabled.</p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#1e293b' }}>Third-Party Services</h3>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '12px' }}>To operate our business efficiently, we may use trusted third-party providers for services such as:</p>
            <ul style={{ color: '#475569', lineHeight: '1.6', paddingLeft: '20px', listStyleType: 'disc', marginBottom: '16px' }}>
              <li>Website hosting</li>
              <li>Online booking systems</li>
              <li>Payment processing</li>
              <li>Email communication</li>
              <li>Website analytics</li>
              <li>Advertising and marketing</li>
            </ul>
            <p style={{ color: '#475569', lineHeight: '1.6' }}>These providers only receive information necessary to perform their services and are expected to protect your information in accordance with applicable privacy requirements.</p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#1e293b' }}>Protecting Your Information</h3>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '16px' }}>
              We take reasonable administrative, technical, and physical measures to safeguard your personal information against unauthorized access, disclosure, alteration, or misuse.
            </p>
            <p style={{ color: '#475569', lineHeight: '1.6' }}>
              Although we work to protect your information, no website or internet transmission can be guaranteed to be completely secure.
            </p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#1e293b' }}>Marketing Communications</h3>
            <p style={{ color: '#475569', lineHeight: '1.6' }}>
              If you choose to receive updates or promotional offers from us, you may unsubscribe at any time by contacting us or following the unsubscribe instructions included in our communications.
            </p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#1e293b' }}>Accessing or Updating Your Information</h3>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '16px' }}>
              If you believe any personal information we hold is inaccurate or incomplete, you may contact us to request that it be updated or corrected.
            </p>
            <p style={{ color: '#475569', lineHeight: '1.6' }}>
              Where appropriate and permitted by law, you may also request that we delete your personal information.
            </p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#1e293b' }}>External Links</h3>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '16px' }}>
              Our website may include links to other websites for your convenience.
            </p>
            <p style={{ color: '#475569', lineHeight: '1.6' }}>
              We are not responsible for the privacy practices or content of third-party websites, and we encourage you to review their privacy policies before providing personal information.
            </p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#1e293b' }}>Children's Privacy</h3>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '16px' }}>
              Our services are intended for adults and property owners or authorised occupants.
            </p>
            <p style={{ color: '#475569', lineHeight: '1.6' }}>
              We do not knowingly collect personal information from children under the age of 16.
            </p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#1e293b' }}>Updates to This Privacy Policy</h3>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '16px' }}>
              We may update this Privacy Policy from time to time to reflect changes to our services, legal requirements, or business practices.
            </p>
            <p style={{ color: '#475569', lineHeight: '1.6' }}>
              The latest version will always be available on this page.
            </p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#1e293b' }}>Contact Us</h3>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '16px' }}>
              If you have any questions about this Privacy Policy or how we handle your information, please contact us.
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

export default PrivacyPolicy;
