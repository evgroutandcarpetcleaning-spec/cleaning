import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Award, Layers, ShieldCheck, Droplet, Star, Clock, Heart, Shield, Check, RefreshCw, Zap, Building } from 'lucide-react';
import presserImg from '../assets/presser.jpeg';
import gallery1 from '../assets/gallery1.jpeg';
import gallery2 from '../assets/gallery2.jpeg';
import gallery3 from '../assets/gallery3.jpeg';
import pressureWashBeforeAfter from '../assets/pressure_washing_before_after.png';
import pressureWashingBanner from '../assets/PRESSURE-WASHING.jpg';
import tileBanner from '../assets/tile.jpg';
import carpetBanner from '../assets/carpet.jpg';
import pressureMobileBanner from '../assets/pressure_mobile.png';
import carpetMobileBanner from '../assets/carpet-mobile.png';
import tileMobileBanner from '../assets/tile-mobile.png';

const BANNERS = [
  { desktop: pressureWashingBanner, mobile: pressureMobileBanner, mobilePos: 'center center' },
  { desktop: tileBanner, mobile: tileMobileBanner, mobilePos: 'center center' },
  { desktop: carpetBanner, mobile: carpetMobileBanner, mobilePos: 'center center' }
];



// Animated Counter Component
function AnimatedCounter({ end, suffix = "", delay = 0 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const duration = 2000;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    const timer = setTimeout(() => {
      window.requestAnimationFrame(step);
    }, delay);

    return () => clearTimeout(timer);
  }, [end, delay]);

  return <span>{count}{suffix}</span>;
}

function Home() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const [activeBannerIndex, setActiveBannerIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBannerIndex((prev) => (prev + 1) % BANNERS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!bookingForm.name || !bookingForm.phone || !bookingForm.email) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const backendUrl = import.meta.env.VITE_API_URL || (
        window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
          ? 'http://localhost:5000/api/send-email'
          : window.location.hostname.includes('onrender.com')
            ? '/api/send-email'
            : '/send-email.php'
      );

      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingForm),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormSubmitted(true);
        setBookingForm({ name: '', email: '', phone: '', serviceType: '', message: '' });
      } else {
        setErrorMessage(data.error || 'Failed to submit request.');
      }
    } catch (error) {
      setErrorMessage('Could not connect to the server.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Top services teaser
  const topServices = [
    {
      title: 'Pressure Washing',
      desc: 'High-pressure water blasting to remove dirt, algae, oil stains, and grime from driveways, pathways, decks, and exterior surfaces.',
      icon: <Droplet size={24} />,
      image: presserImg,
      subServices: [
        'Driveway and path',
        'Fence cleaning',
        'Exterior house wash',
        'Car park cleaning'
      ]
    },
    {
      title: 'Tile & Grout Cleaning',
      desc: 'High pressure extraction process that washes out oil, grease, and stubborn stains from tiles and deep grout lines.',
      icon: <Layers size={24} />,
      image: 'https://getcarpetcleaningorlando.com/clientuploads/blogs/2026/Dan_Dan_the_Carpet_Man-tile_an_grout_cleaning.png',
      subServices: [
        'Kitchen floor',
        'Bathroom floor and walls',
        'Hallways/Living area',
        'Regrout the tiles',
        'Grouts sealing'
      ]
    },
    {
      title: 'Carpet Steam Cleaning',
      desc: 'High-temperature steam treatment flushing out soils, allergens, dust mites, and bacteria from deep fiber structures.',
      icon: <Sparkles size={24} />,
      image: 'https://img.magnific.com/free-photo/close-up-vacuuming-carpet_329181-636.jpg?t=st=1781370323~exp=1781373923~hmac=537c5dd95bd430ece3cee0e5f865cfc675d47e86609d4919caed19965524a5aa&w=1480',
      subServices: [
        'Stain and spot treatment',
        'Odor removal',
        'End of lease carpet cleaning'
      ]
    }
  ];

  // Selected testimonials
  const testimonials = [
    {
      name: 'Sarah Thompson',
      location: 'Sydney CBD',
      stars: 5,
      text: 'EV Grout & Carpet Cleaning did an absolute miracle on our kitchen tiles. The grout lines were black and dirty, and they returned them to the original bright color. Fast, clean, and highly professional!',
      initials: 'ST'
    },
    {
      name: 'Mark Henderson',
      location: 'Northern Beaches',
      stars: 5,
      text: 'Had our end-of-lease carpet steam cleaned. The landlord was amazed at how clean it was, and we got our full bond back. Extremely reasonable pricing and great customer support.',
      initials: 'MH'
    },
    {
      name: 'Rebecca Davis',
      location: 'Western Hills',
      stars: 5,
      text: 'Superb job regrouting and sealing our master bathroom tiles. The old grout was mouldy and cracked, and now it looks completely fresh and waterproof. Incredible attention to detail!',
      initials: 'RD'
    }
  ]; return (
    <div className="page-home">
      {/* 1. Hero Section */}
      <section className="hero-new" id="hero">
        {/* Background light blue shape (left side) */}
        <div className="hero-bg-blur"></div>

        <div className="hero-custom-grid">
          
          {/* Left Column - Text content */}
          <div className="hero-left-col">
            <h1 className="hero-main-title">
              Professional Tile & Grout<br />
              Cleaners in Campbelltown
            </h1>

            <p className="hero-subtitle">
              Keep Your Floor and Shower Tiles Looking Spotless and Protected for Longer.
            </p>
            
            <h2 className="hero-h2">
              Expert Tile & Grout Cleaning Campbelltown
            </h2>
            
            <p className="hero-desc">
              We remove dirt, grime, and tough stains from tiles, then seal them to make future cleaning easier and maintain a lasting shine.
            </p>
            
            <div className="hero-buttons-row">
              <button className="btn-enquire">
                ENQUIRE NOW <span className="btn-enquire-icon">↗</span>
              </button>
              
              <a href="tel:0499848519" className="btn-call">
                <div className="btn-call-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                0499 848 519
              </a>
            </div>
          </div>
          
          {/* Right Column - Separated Image & Form */}
          <div className="hero-right-col">
            
            {/* Custom Badge positioned absolute over the gap */}
            <div className="hero-custom-badge">
              {/* Back Ribbon */}
              <div className="hero-badge-ribbon"></div>

              <div className="hero-badge-circle">
                <span style={{ fontSize: '1.3rem', fontWeight: '900', lineHeight: '1', marginTop: '5px' }}>100%</span>
                <span style={{ fontSize: '0.45rem', fontWeight: '800', letterSpacing: '0.5px' }}>CUSTOMER</span>
                <div style={{
                  backgroundColor: '#039be5',
                  color: 'white',
                  padding: '4px 10px',
                  fontSize: '0.55rem',
                  fontWeight: '800',
                  marginTop: '4px',
                  marginBottom: '2px',
                  width: '120%',
                  textAlign: 'center',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                }}>
                  SATISFACTION
                </div>
                <span style={{ fontSize: '0.55rem', fontWeight: '800' }}>GUARANTEED</span>
                <span style={{ fontSize: '0.6rem', color: '#ffea00', marginTop: '2px', letterSpacing: '1px' }}>★★★</span>
              </div>
            </div>

            {/* Image (Left) */}
            <div className="hero-img-box">
              <img src={tileBanner} alt="Tile Cleaning Before After" />
            </div>
            
            {/* Form (Right) */}
            <div className="hero-form-box">
              <h4>Book A Service</h4>
              {formSubmitted ? (
                <div style={{ padding: '20px', backgroundColor: 'rgba(37, 211, 102, 0.1)', border: '1px solid #25D366', borderRadius: '8px', textAlign: 'center', marginTop: '15px' }}>
                  <p style={{ fontWeight: 'bold', color: '#25D366', marginBottom: '8px' }}>Request Received!</p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '15px' }}>We'll contact you shortly.</p>
                  <button onClick={() => setFormSubmitted(false)} className="hero-form-btn">
                    Book Another <span className="hero-form-btn-icon">↺</span>
                  </button>
                </div>
              ) : (
                <form className="hero-form-content" onSubmit={handleFormSubmit}>
                  <input type="text" name="name" placeholder="Full Name*" value={bookingForm.name} onChange={handleInputChange} required />
                  <input type="email" name="email" placeholder="Email*" value={bookingForm.email} onChange={handleInputChange} required />
                  <input type="tel" name="phone" placeholder="Phone*" value={bookingForm.phone} onChange={handleInputChange} required />
                  <div className="hero-form-select-wrap">
                    <select name="serviceType" value={bookingForm.serviceType} onChange={handleInputChange} required>
                      <option value="">Select Service*</option>
                      <option value="tile-grout">Tile & Grout Cleaning</option>
                      <option value="carpet-steam">Carpet Cleaning</option>
                      <option value="pressure-washing">Pressure Washing</option>
                    </select>
                    <div className="hero-form-select-icon">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                    </div>
                  </div>
                  <textarea name="message" placeholder="Message" rows="2" value={bookingForm.message} onChange={handleInputChange}></textarea>
                  {errorMessage && <div style={{ color: '#EF4444', fontSize: '0.85rem', marginBottom: '10px' }}>⚠️ {errorMessage}</div>}
                  <button type="submit" className="hero-form-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'SUBMITTING...' : 'SUBMIT NOW'} <span className="hero-form-btn-icon">↗</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Short About Teaser */}
      <section className="section" style={{ backgroundColor: '#FFFFFF', paddingBottom: '50px' }}>
        <div className="container">
          <div className="why-grid">
            <div className="why-content-image">
              <img
                src="/gallery/tile-after.png"
                alt="Certified technician cleaning tiles"
                style={{ borderRadius: 'var(--br-lg)', boxShadow: 'var(--shadow-medium)' }}
              />
            </div>
            <div className="why-content">
              <span className="section-tag">About Our Business</span>
              <h2>Professional Floor Restoration Done Right</h2>
              <p className="why-content-desc">
                We are a local family-owned stone, tile, and carpet restoration specialist serving residential and commercial properties. We use high-power portable extraction machines—delivering the same deep-cleaning strength as a traditional truck-mount system, but with the flexibility to reach areas truck-mounts cannot—coupled with advanced sealer technologies to recover the original sparkle.
              </p>
              <p style={{ marginBottom: '24px', color: 'var(--text-light)' }}>
                Unlike regular mop cleaning, our systems extract dirt, oils, and bacteria nested deep within materials. Your home is sanitized and sealed to stay cleaner for longer.
              </p>
              <div className="why-bullets" style={{ marginBottom: '32px' }}>
                <div className="why-bullet-item">
                  <div className="why-bullet-icon"><Check size={14} /></div>
                  <span>High-End Industrial Grade Machinery</span>
                </div>
                <div className="why-bullet-item">
                  <div className="why-bullet-icon"><Check size={14} /></div>
                  <span>Eco-Friendly, Non-Toxic Detergents</span>
                </div>
                <div className="why-bullet-item">
                  <div className="why-bullet-icon"><Check size={14} /></div>
                  <span>Same-Day Emergency Service Availability</span>
                </div>
              </div>
              <Link to="/about" className="btn btn-secondary">
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Services Teaser Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-light)', paddingTop: '50px' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Services Overview</span>
            <h2 className="section-title">What We Do Best</h2>
            <p className="section-subtitle">We specialize in restoring tile grout and sanitizing carpets.</p>
          </div>

          <div className="services-grid">
            {topServices.map((service, idx) => (
              <div key={idx} className="service-card glass-card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div className="service-card-image" style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    className="service-img"
                  />
                  <div className="service-icon-floating" style={{
                    position: 'absolute',
                    bottom: '15px',
                    right: '15px',
                    backgroundColor: 'var(--primary-blue)',
                    color: '#ffffff',
                    padding: '10px',
                    borderRadius: '50%',
                    boxShadow: 'var(--shadow-medium)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '45px',
                    height: '45px',
                    zIndex: '2'
                  }}>
                    {service.icon}
                  </div>
                </div>
                <div className="service-card-content" style={{ padding: '30px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 className="service-title" style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{service.title}</h3>
                  <p className="service-desc" style={{ color: 'var(--text-light)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '15px' }}>{service.desc}</p>

                  {service.subServices && (
                    <div style={{ marginBottom: '25px' }}>
                      <div style={{ height: '1px', backgroundColor: 'rgba(11,31,58,0.08)', margin: '15px 0' }} />
                      <h4 style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--primary-blue)', marginBottom: '12px', fontWeight: '700' }}>What's Included:</h4>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {service.subServices.map((sub, sIdx) => (
                          <li key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-dark)' }}>
                            <span style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              backgroundColor: 'rgba(46, 117, 243, 0.1)',
                              color: 'var(--primary-blue)',
                              borderRadius: '50%',
                              width: '18px',
                              height: '18px',
                              flexShrink: 0
                            }}>
                              <Check size={11} style={{ strokeWidth: 3 }} />
                            </span>
                            <span style={{ fontWeight: '500' }}>{sub}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}




                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Before & After Pressure Washing Section */}
      <section className="section" style={{ backgroundColor: '#F8FAFC', paddingTop: '60px', paddingBottom: '60px', borderTop: '1px solid rgba(0,0,0,0.03)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-tag">Dramatic Transformations</span>
            <h2 className="section-title">Before & After Pressure Washing Results</h2>
            <p className="section-subtitle">See the real-life difference our high-pressure cleaning systems make on dirty concrete surfaces.</p>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="glass-card" style={{
              padding: '0',
              borderRadius: 'var(--br-lg)',
              overflow: 'hidden',
              boxShadow: '0 20px 45px rgba(11,31,58,0.1)',
              position: 'relative',
              border: '1px solid rgba(255, 255, 255, 0.8)'
            }}>
              {/* Image */}
              <img
                src={pressureWashBeforeAfter}
                alt="Before and After Concrete Driveway Pressure Washing"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />

              {/* Labels */}
              <div style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                backgroundColor: 'rgba(217, 83, 79, 0.95)',
                color: '#ffffff',
                padding: '6px 16px',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                zIndex: 3,
                backdropFilter: 'blur(4px)'
              }}>
                Before
              </div>

              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                backgroundColor: 'rgba(46, 117, 243, 0.95)',
                color: '#ffffff',
                padding: '6px 16px',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                zIndex: 3,
                backdropFilter: 'blur(4px)'
              }}>
                After
              </div>
            </div>

            {/* Explanatory Info Card below the comparison */}
            <div className="glass-card" style={{
              marginTop: '30px',
              padding: '24px 30px',
              borderRadius: 'var(--br-md)',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              backgroundColor: 'rgba(46, 117, 243, 0.03)',
              border: '1px solid rgba(46, 117, 243, 0.08)'
            }}>
              <div style={{
                backgroundColor: 'rgba(46, 117, 243, 0.1)',
                color: 'var(--primary-blue)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Sparkles size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', color: 'var(--text-dark)', marginBottom: '4px', fontWeight: '600' }}>Our Pressure Washing Guarantee</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', margin: 0, lineHeight: '1.5' }}>
                  We don't just rinse—we blast away years of embedded grime, black mold, algae, and oil stains. We restore original concrete color and can apply premium sealers to keep it clean for longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.5 Before & After Gallery Section */}
      <section className="section" style={{ backgroundColor: '#FFFFFF', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '45px' }}>
            <span className="section-tag">Our Proven Work</span>
            <h2 className="section-title">Recent Transformations</h2>
            <p className="section-subtitle">Real results from recent cleaning and restoration jobs in local properties.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            marginBottom: '40px'
          }}>
            {/* Gallery Item 1 */}
            <div className="glass-card" style={{ padding: '0', borderRadius: 'var(--br-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-small)' }}>
              <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/3' }}>
                <img
                  src={gallery1}
                  alt="Driveway Pressure Washing Before and After"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '20px 24px' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '8px' }}>Concrete Driveway Restoration</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', margin: 0 }}>High-pressure washing completely removes years of deep oil stains, grime, and dark mold growth.</p>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="glass-card" style={{ padding: '0', borderRadius: 'var(--br-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-small)' }}>
              <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/3' }}>
                <img
                  src={gallery2}
                  alt="Outdoor Patio Tile Cleaning Before and After"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '20px 24px' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '8px' }}>Outdoor Patio Tile Deep Clean</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', margin: 0 }}>Deep soil extraction and stone wash restoring the natural stone color and pattern to the outdoor patio.</p>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className="glass-card" style={{ padding: '0', borderRadius: 'var(--br-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-small)' }}>
              <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/3' }}>
                <img
                  src={gallery3}
                  alt="Kitchen Tile & Grout Cleaning Before and After"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '20px 24px' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '8px' }}>Kitchen Floor Grout Restoration</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', margin: 0 }}>Rotary scrubbing and hot steam extraction cleaning grey, oily grout lines back to pristine cleanliness.</p>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="why-grid">
            <div className="why-content">
              <span className="section-tag">Why EV Grout & Carpet</span>
              <h2>A Higher Cleaning Standard</h2>
              <p className="why-content-desc">
                We combine industry expertise, modern extraction equipment, and a relentless focus on customer satisfaction to deliver immaculate spaces.
              </p>

              <div className="why-bullets" style={{ margin: '30px 0' }}>
                <div className="why-bullet-item">
                  <div className="why-bullet-icon" style={{ backgroundColor: 'rgba(245, 184, 65, 0.2)' }}><Check size={14} /></div>
                  <span>100% Satisfaction Guarantee</span>
                </div>
                <div className="why-bullet-item">
                  <div className="why-bullet-icon" style={{ backgroundColor: 'rgba(245, 184, 65, 0.2)' }}><Check size={14} /></div>
                  <span>Advanced Stain & Odor Shielding</span>
                </div>
                <div className="why-bullet-item">
                  <div className="why-bullet-icon" style={{ backgroundColor: 'rgba(245, 184, 65, 0.2)' }}><Check size={14} /></div>
                  <span>Certified and Fully Insured Technicians</span>
                </div>
              </div>
              <Link to="/contact" className="btn btn-primary">
                Book a Free Inspection
              </Link>
            </div>

            <div className="why-features">
              <div className="why-feature-card glass-card-dark">
                <Award className="why-feature-icon" size={32} />
                <h3>Expert Staff</h3>
                <p>IICRC certified technicians experienced in delicate tile, grout restoration, and fabric styling.</p>
              </div>
              <div className="why-feature-card glass-card-dark">
                <Clock className="why-feature-icon" size={32} />
                <h3>Fast Drying</h3>
                <p>Industrial water recovery vacuums dramatically lower dry times, allowing you back on carpets in hours.</p>
              </div>
              <div className="why-feature-card glass-card-dark">
                <Shield className="why-feature-icon" size={32} />
                <h3>Eco Detergents</h3>
                <p>Biodegradable solutions that dissolve mud, grime and wax while keeping children and animals safe.</p>
              </div>
              <div className="why-feature-card glass-card-dark">
                <Heart className="why-feature-icon" size={32} />
                <h3>Transparent Costs</h3>
                <p>Honest quotes based on size with absolutely zero hidden surcharges or post-work add-ons.</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* 6. Process Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Step-by-Step</span>
            <h2 className="section-title">Our Cleaning Process</h2>
            <p className="section-subtitle">How we achieve pristine, sanitized floors and fabrics on every visit.</p>
          </div>

          <div className="process-grid">
            <div className="process-step">
              <div className="process-number">01</div>
              <h3>Inspection</h3>
              <p>Evaluating surface status, fiber types, grout stability, and choosing targeted, safe cleaning agents.</p>
            </div>

            <div className="process-step">
              <div className="process-number">02</div>
              <h3>Deep Clean</h3>
              <p>Applying solutions followed by high-pressure heated water rinse extraction to lift oils and mud.</p>
            </div>

            <div className="process-step">
              <div className="process-number">03</div>
              <h3>Sanitize</h3>
              <p>Applying anti-microbial treatments to fully eliminate bacterial colonies, pet odor residues, and dust mites.</p>
            </div>

            <div className="process-step">
              <div className="process-number">04</div>
              <h3>Final Sealing</h3>
              <p>Applying high-grade shield sealers on tile grout and using air movers to dry floors rapidly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Reviews Section */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Reviews</span>
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">Read real feedback from happy residential and commercial clients.</p>
          </div>

          <div className="reviews-grid">
            {testimonials.map((rev, index) => (
              <div key={index} className="review-card glass-card">
                <div className="rating-stars">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="review-text">"{rev.text}"</p>
                <div className="review-author">
                  <div className="author-avatar">{rev.initials}</div>
                  <div className="author-info">
                    <h4>{rev.name}</h4>
                    <p>{rev.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="section section-dark" style={{ padding: '60px 0' }}>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: '2' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Need Emergency Carpet Stain & Odor Treatment?</h2>
          <p style={{ color: 'var(--silver)', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px auto' }}>
            Spilled red wine, ink, coffee, or had a pet accident? Act quickly to increase success rates.
          </p>
          <a href="tel:0499848519" className="btn btn-primary" style={{ padding: '14px 35px' }}>
            Call Victor: 0499 848 519
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
