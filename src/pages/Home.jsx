import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Award, Layers, ShieldCheck, Droplet, Star, Clock, Heart, Shield, Check, RefreshCw, Zap, Building } from 'lucide-react';
import presserImg from '../assets/presser.jpeg';
import gallery1 from '../assets/gallery1.jpeg';
import gallery2 from '../assets/gallery2.jpeg';
import gallery3 from '../assets/gallery3.jpeg';

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

  // Top services teaser
  const topServices = [
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
    },
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
  ];  // Hero Slides Data
  const heroSlides = [
    {
      tagline: 'Premium Cleaning Services',
      title: <>Professional <span>Tile, Grout & Carpet</span> Cleaning</>,
      description: 'Delivering spotless floors, fresh carpets, and sparkling spaces with high-end steam cleaning, regrouting, and stain removal services.',
      image: '/gallery/hero-tile-clean.png',
      badgeTitle: 'Certified Experts',
      badgeDesc: '100% Insured & Trusted'
    },
    {
      tagline: 'Eco-Friendly Deep Extraction',
      title: <>Premium <span>Steam Carpet</span> Restoration</>,
      description: 'Flushing out embedded dirt, micro-allergens, dust mites, and stubborn pet stain odors from your carpet fibers.',
      image: '/gallery/hero-carpet-clean.png',
      badgeTitle: 'Fast Drying',
      badgeDesc: 'Walkable in 4-6 Hours'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    location: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleHeroSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

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
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', service: '', location: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting hero form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Auto transition hero slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="page-home">
      {/* 1. Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape-flare"></div>
        </div>
        <div className="container" style={{ paddingBottom: '40px' }}>
          <div className="hero-content" key={currentSlide} style={{ animation: 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
            <div className="hero-tagline-wrapper">
              <span className="hero-tagline">
                <Sparkles size={14} /> {heroSlides[currentSlide].tagline}
              </span>
            </div>

            <h1 className="hero-title" id="hero-headline">
              {heroSlides[currentSlide].title}
            </h1>

            <p className="hero-description" id="hero-subheading">
              {heroSlides[currentSlide].description}
            </p>

            {/* Premium Stepper Tabs replacing basic dots */}
            <div className="hero-slider-tabs">
              {heroSlides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`slider-tab-btn ${currentSlide === index ? 'active' : ''}`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <span className="tab-number">0{index + 1}</span>
                  <span className="tab-title">
                    {index === 0 ? "Tile & Grout" : "Carpet Steam"}
                  </span>
                  <div className="tab-progress-bg">
                    {currentSlide === index && <div className="tab-progress-fill"></div>}
                  </div>
                </button>
              ))}
            </div>

            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary btn-hero-cta" id="hero-quote-cta">
                Get Free Quote <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn btn-outline-hero" id="hero-services-cta">
                Explore Services
              </Link>
            </div>

            {/* Quick Trust row */}
            <div className="hero-trust-row">
              <div className="trust-item">
                <ShieldCheck size={16} className="trust-icon" />
                <span>Eco-Friendly Solutions</span>
              </div>
              <div className="trust-item">
                <ShieldCheck size={16} className="trust-icon" />
                <span>Fully Licensed & Insured</span>
              </div>
              <div className="trust-item">
                <ShieldCheck size={16} className="trust-icon" />
                <span>100% Satisfaction Guarantee</span>
              </div>
            </div>
          </div>

          <div className="hero-form-container" id="hero-quote-form-wrapper">
            <div className="hero-form-card glass-card">
              <div className="form-header">
                <h3>Get an Instant Quote</h3>
                <p>Australian Owned & Operated Local Specialists</p>
              </div>

              <form onSubmit={handleHeroSubmit} className="hero-quote-form">
                <div className="form-group-row">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                   <div className="form-group">
                    <input
                      type="tel"
                      placeholder="Phone (e.g. 0412 345 678)"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group-row">
                  <div className="form-group">
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      required
                    >
                      <option value="">-- Choose Service --</option>
                      <option value="Tile & Grout Deep Clean">Tile & Grout Cleaning</option>
                      <option value="Regrouting & Sealing">Regrouting & Sealing</option>
                      <option value="Carpet Steam Clean">Carpet Steam Cleaning</option>
                      <option value="Stain & Odor Removal">Stain & Odor Removal</option>
                      <option value="End of Lease Cleaning">End of Lease Carpet</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Aussie Postcode / Suburb"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    placeholder="Briefly describe your cleaning needs (e.g. 3 rooms carpet, kitchen tiles)..."
                    rows="2"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-submit-quote" disabled={isSubmitting}>
                  {isSubmitting ? "Sending Request..." : "Request Free Quote Now"}
                </button>
              </form>

              {submitStatus === 'success' && (
                <div className="form-success-banner">
                  <ShieldCheck size={16} /> Quote request sent! We will contact you within 30 minutes.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="form-success-banner" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#EF4444', borderColor: '#EF4444', borderStyle: 'solid', borderWidth: '1px' }}>
                  <span>⚠️ Connection error. Please try again.</span>
                </div>
              )}
            </div>

            {/* A small Trust line beneath the form */}
            <div className="hero-form-trust">
              <span>⭐ 4.9/5 Star Local Rated</span>
              <span className="separator">•</span>
              <span>100% Insured Experts</span>
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

      {/* Before & After Grout Restoration Section */}
      <section className="section" style={{ backgroundColor: '#F8FAFC', paddingTop: '60px', paddingBottom: '60px', borderTop: '1px solid rgba(0,0,0,0.03)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-tag">Dramatic Transformations</span>
            <h2 className="section-title">Before & After Grout Restoration Results</h2>
            <p className="section-subtitle">See the real-life difference our deep cleaning and sanitization process makes.</p>
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
                src="https://tileguru.ae/wp-content/uploads/2026/02/grout-restoration-sealing-services-2nd-image.png" 
                alt="Before and After Grout Restoration" 
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
                <h4 style={{ fontSize: '1rem', color: 'var(--text-dark)', marginBottom: '4px', fontWeight: '600' }}>Our Restoration Guarantee</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', margin: 0, lineHeight: '1.5' }}>
                  We don't just clean—we extract embedded grease, neutralize bacteria, and seal the grout lines with premium commercial-grade guard to prevent future staining and mold growth.
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
