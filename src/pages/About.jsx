import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Award, Users, Check, Sparkles, ArrowRight } from 'lucide-react';

function About() {
  const credentials = [
    {
      title: 'Certified Cleaning Experts',
      desc: 'Our staff are IICRC trained and certified, ensuring they understand fabric chemistry, pH levels, and grout restoration techniques.',
      icon: <Award size={32} />
    },
    {
      title: 'Family Owned & Operated',
      desc: 'We are local business owners, not a giant franchise. We take pride in our workmanship and care for our customers personally.',
      icon: <Users size={32} />
    },
    {
      title: 'Eco-Friendly Guarantee',
      desc: 'All cleaning detergents, sanitizers, and sealers are biodegradable and non-toxic, safeguarding kids and pets.',
      icon: <Heart size={32} />
    },
    {
      title: '100% Satisfaction Promise',
      desc: 'If you are not completely satisfied with our tile or carpet cleaning, we will return and clean it again for free.',
      icon: <ShieldCheck size={32} />
    }
  ];

  return (
    <div className="page-about">
      {/* Hero Header */}
      <section className="section" style={{ backgroundColor: 'var(--primary-navy)', color: 'var(--white)', paddingTop: '160px', paddingBottom: '80px', textAlign: 'center' }}>
        <div className="container">
          <span className="section-tag" style={{ color: 'var(--gold)', backgroundColor: 'rgba(245, 184, 65, 0.1)' }}>Our Story</span>
          <h1 style={{ color: 'var(--white)', fontSize: '3rem', marginBottom: '20px' }}>About EV Grout & Carpet Cleaning</h1>
          <p style={{ color: 'var(--silver)', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto' }}>
            A dedicated family business providing premium floor restoration, deep sanitization, and sealing services across local communities.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="why-grid">
            <div className="why-content-image">
              <img 
                src="/gallery/carpet-after.png" 
                alt="High-strength portable carpet steam extraction process" 
                style={{ borderRadius: 'var(--br-lg)', boxShadow: 'var(--shadow-medium)' }}
              />
            </div>
            
            <div className="why-content">
              <span className="section-tag">Who We Are</span>
              <h2>Restoring the Original Beauty of Your Floors</h2>
              <p className="why-content-desc">
                Founded over 15 years ago, <strong>EV Grout & Carpet Cleaning</strong> was established with a singular mission: to offer premium, high-end floor restoration services that other cleaners simply cannot achieve.
              </p>
              <p style={{ marginBottom: '20px', color: 'var(--text-light)' }}>
                We noticed that most homeowners and property managers struggled with dark, moldy grout lines and deeply stained carpets that normal scrubbing could not fix. By investing in high-strength portable steam extraction systems and advanced polymer grout sealers, we developed a system that removes 99% of embedded soils and seals surfaces to keep them clean.
              </p>
              <p style={{ marginBottom: '30px', color: 'var(--text-light)' }}>
                As a family-owned business, we treat every client like neighbors. We do not rush. We inspect, explain, prep, scrub, extract, sanitize, and seal.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Check size={18} style={{ color: 'var(--primary-blue)' }} />
                  <span style={{ fontWeight: '600', fontSize: '0.95rem' }}>100% Insured</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Check size={18} style={{ color: 'var(--primary-blue)' }} />
                  <span style={{ fontWeight: '600', fontSize: '0.95rem' }}>IICRC Trained</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Check size={18} style={{ color: 'var(--primary-blue)' }} />
                  <span style={{ fontWeight: '600', fontSize: '0.95rem' }}>Eco Safe Formulas</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Check size={18} style={{ color: 'var(--primary-blue)' }} />
                  <span style={{ fontWeight: '600', fontSize: '0.95rem' }}>Premium Sealers</span>
                </div>
              </div>

              <Link to="/contact" className="btn btn-secondary">
                Request Free Floor Assessment <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Technology Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div className="why-grid" style={{ gridTemplateColumns: '1.1fr 0.9fr' }}>
            <div className="why-content">
              <span className="section-tag">Our Technology</span>
              <h2>State-of-the-Art High-Reach Portable Steam Power</h2>
              <p className="why-content-desc">
                Many floor cleaners use underpowered domestic portable machines or are limited by heavy van-mounted systems that cannot reach high-rise apartments, tight spaces, or deep inside properties.
              </p>
              <p style={{ marginBottom: '20px', color: 'var(--text-light)' }}>
                EV Grout & Carpet Cleaning uses advanced, high-strength portable extraction systems. These systems deliver the exact same deep-cleaning power and heat as traditional van-mount units, but have the flexibility to go anywhere—reaching areas that van-mounted systems simply cannot access. Our machines heat water up to 220°F (100°C) to dissolve grease instantly while creating extreme vacuum suction that recovers 95% of moisture.
              </p>
              
              <div style={{ borderLeft: '4px solid var(--primary-blue)', paddingLeft: '20px', margin: '30px 0' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'var(--primary-navy)' }}>Why Heat & Suction Matters</h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-light)' }}>
                  Hot water breaks molecular bonds of oils and grease in grout, sanitizing floors without harsh chemicals. High suction guarantees rapid drying, preventing mold and keeping carpets clean.
                </p>
              </div>

              <Link to="/services" className="btn btn-outline">
                See Our Cleaning Services
              </Link>
            </div>

            <div className="why-content-image" style={{ display: 'flex', justifyContent: 'center' }}>
              <img 
                src="/gallery/tile-after.png" 
                alt="Tile cleaning extraction head machine" 
                style={{ borderRadius: 'var(--br-lg)', boxShadow: 'var(--shadow-medium)', height: '400px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Grid */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Value Proposition</span>
            <h2 className="section-title">The EV Grout & Carpet Standards</h2>
            <p className="section-subtitle">
              We hold our work to a premium standard, ensuring a clean and hygienic result.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            {credentials.map((cred, idx) => (
              <div key={idx} className="why-feature-card glass-card" style={{ border: '1px solid rgba(11,31,58,0.06)' }}>
                <div style={{ color: 'var(--primary-blue)', marginBottom: '20px' }}>
                  {cred.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>{cred.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>{cred.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
