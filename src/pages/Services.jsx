import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layers, Sparkles, Droplet, ShieldCheck, CheckCircle2, Phone, Calendar, ArrowRight, Zap, RefreshCw, Star } from 'lucide-react';

function Services() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'tile', name: 'Tile & Grout' },
    { id: 'carpet', name: 'Carpet Cleaning' }
  ];

  const mainServicesList = [
    {
      id: 'tile-grout',
      title: 'Tile & Grout Deep Clean',
      desc: 'Our high-performance portable extraction system offers the same deep-cleaning strength as a van-mount system, but reaches easily where a van-mount cannot. Perfect for ceramic, porcelain, and stone.',
      category: 'tile',
      icon: <Layers size={24} />,
      features: ['High Pressure Hot Extraction', 'Dissolves Grease & Mildew', 'Safe on Natural Stone', 'Color Restored Instantly']
    },
    {
      id: 'regrouting',
      title: 'Grout Restoration & Regrouting',
      desc: 'Removing moldy, cracked, or crumbling grout and replacing it with premium, water-tight epoxy grout. Stops leaks and prevents subfloor damage.',
      category: 'tile',
      icon: <RefreshCw size={24} />,
      features: ['Old Grout Safely Removed', 'Premium Waterproof Epoxy Grout', 'Prevents Leakage & Moisture', 'Seamless Color Matching']
    },
    {
      id: 'sealing',
      title: 'Tile Sealing & Protection',
      desc: 'We apply professional penetrating sealers that form an invisible barrier against liquids, oils, and stains, making future cleanup simple.',
      category: 'tile',
      icon: <ShieldCheck size={24} />,
      features: ['Penetrating Solvent Sealer', 'Stops Dirt Absorption', 'Inhibits Mold Growth', 'Preserves Tile Natural Look']
    },
    {
      id: 'steam-carpet',
      title: 'Steam Carpet Cleaning',
      desc: 'Deep hot water extraction cleaning that sanitizes and flushes out dirt, dust mites, skin flakes, and odors from the backing of your carpet.',
      category: 'carpet',
      icon: <Sparkles size={24} />,
      features: ['High-Strength Portable Steam Extraction', 'Eliminates Allergens & Mites', 'Deodorizing Treatment Included', 'Walkable in 4-6 Hours']
    },
    {
      id: 'stain-odor',
      title: 'Stain & Pet Odor Removal',
      desc: 'Targeted enzyme treatments designed to break down pet urine crystals, wine spills, coffee stains, and deep soils from carpet fibers.',
      category: 'carpet',
      icon: <Zap size={24} />,
      features: ['Pet Urine Enzyme Treatment', 'Red Wine & Ink Specialists', 'Deep Anti-bacterial Sanitizer', 'Stubborn Spot Pre-Treatment']
    },
  ];

  // Filtering services based on active tab
  const filteredServices = activeTab === 'all' 
    ? mainServicesList 
    : mainServicesList.filter(s => s.category === activeTab);

  // Sub-services checklist for comprehensive listing
  const subServices = [
    { title: 'Bathroom Tile Cleaning', cat: 'Tile & Grout' },
    { title: 'Kitchen Floor Cleaning', cat: 'Tile & Grout' },
    { title: 'Hallway & Living Area Cleaning', cat: 'Tile & Grout' },
    { title: 'End of Lease Carpet Cleaning', cat: 'Carpet' },
    { title: 'Residential Carpet Cleaning', cat: 'Carpet' },
    { title: 'Commercial Carpet Cleaning', cat: 'Carpet' }
  ];

  return (
    <div className="page-services">
      {/* Hero Header */}
      <section className="section" style={{ backgroundColor: 'var(--primary-navy)', color: 'var(--white)', paddingTop: '160px', paddingBottom: '80px', textAlign: 'center' }}>
        <div className="container">
          <span className="section-tag" style={{ color: 'var(--gold)', backgroundColor: 'rgba(245, 184, 65, 0.1)' }}>Our Offerings</span>
          <h1 style={{ color: 'var(--white)', fontSize: '3rem', marginBottom: '20px' }}>Professional Cleaning Services</h1>
          <p style={{ color: 'var(--silver)', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto' }}>
            Explore our specialized floor, tile, carpet, and regrouting cleaning services, delivered by certified technicians.
          </p>
        </div>
      </section>

      {/* Filters and main grid */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          
          {/* Tab Filter buttons */}
          <div className="gallery-modes" style={{ marginBottom: '50px' }} id="services-tabs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`mode-btn ${activeTab === cat.id ? 'active' : ''}`}
                onClick={() => setActiveTab(cat.id)}
                id={`services-tab-${cat.id}`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Dynamic Grid */}
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }} id="services-list-container">
            {filteredServices.map((service) => (
              <div 
                key={service.id} 
                className="service-card glass-card" 
                style={{ border: '1px solid rgba(11,31,58,0.06)', padding: '40px 30px' }}
                id={`service-block-${service.id}`}
              >
                <div className="service-icon-container">
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>{service.title}</h3>
                <p className="service-desc" style={{ marginBottom: '24px' }}>{service.desc}</p>
                
                {/* Feature bullets */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '30px' }}>
                  {service.features.map((feat, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-main)', fontWeight: '500' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--primary-blue)', flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="btn btn-secondary" style={{ width: '100%' }}>
                  Book Service Now <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Checklist section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">All Specialties</span>
            <h2>Full Services Directory</h2>
            <p className="section-subtitle">
              We offer comprehensive residential and commercial packages to suit your scheduling.
            </p>
          </div>

          <div style={{ padding: '50px', backgroundColor: '#FFFFFF', borderRadius: 'var(--br-md)', boxShadow: 'var(--shadow-soft)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {subServices.map((sub, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', borderRadius: 'var(--br-sm)', backgroundColor: 'var(--bg-light)' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--primary-blue)', flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontSize: '0.98rem', color: 'var(--primary-navy)', fontWeight: '600' }}>{sub.title}</h4>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-light)', fontWeight: '500' }}>{sub.cat}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px solid rgba(11,31,58,0.06)', marginTop: '40px', paddingTop: '40px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '16px' }}>Need a Custom Cleaning Package?</h3>
              <p style={{ color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto 24px auto', fontSize: '0.95rem' }}>
                We work closely with strata managers, estate agents, offices, and homeowners to deliver custom tile, grout, or carpet cleaning restoration programs.
              </p>
              <div style={{ display: 'inline-flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <a href="tel:0499848519" className="btn btn-outline">
                  <Phone size={16} /> Victor: 0499 848 519
                </a>
                <Link to="/contact" className="btn btn-secondary">
                  <Calendar size={16} /> Book Online Enquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
