import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Layers, Droplet, ArrowRight, Home, CheckCircle, ChevronsLeftRight } from 'lucide-react';

/* ─── People-free surface images (no technicians, no hands) ─── */
const IMAGES = {
  /* Tile & Grout */
  tileB: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=900&q=80', // dirty grout
  tileA: 'https://getcarpetcleaningorlando.com/clientuploads/blogs/2026/Dan_Dan_the_Carpet_Man-tile_an_grout_cleaning.png', // clean white tile
  tile2: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80', // bright bathroom tile
  tile3: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=900&q=80', // polished floor tiles

  /* Carpet */
  carpetB: 'https://images.unsplash.com/photo-1629994430953-84c58a7f6f1d?auto=format&fit=crop&w=900&q=80', // stained carpet
  carpetA: 'https://img.magnific.com/free-photo/close-up-vacuuming-carpet_329181-636.jpg?t=st=1781370323~exp=1781373923~hmac=537c5dd95bd430ece3cee0e5f865cfc675d47e86609d4919caed19965524a5aa&w=1480', // clean fluffy carpet
  carpet2: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80', // clean living room carpet

  /* Grout / Regrouting */
  grout1: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=900&q=80', // grout lines
  grout2: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80', // kitchen tiles clean
};

const CATEGORIES = ['All', 'Tile & Grout', 'Carpet', 'Regrouting'];

const ALL_PROJECTS = [
  {
    id: 1, cat: 'Tile & Grout',
    before: IMAGES.tileB, after: IMAGES.tileA,
    title: 'Kitchen Tile & Grout Restoration',
    desc: '12 years of grease, oil build-up and dark biological growth removed. Grout restored to bright white.',
    badge: 'Deep Steam Clean',
  },
  {
    id: 2, cat: 'Carpet',
    before: IMAGES.carpetB, after: IMAGES.carpetA,
    title: 'Living Room Carpet Steam Clean',
    desc: 'Pet odors, beverage stains, and embedded allergens fully extracted. Fibers restored and sanitised.',
    badge: 'Hot Extraction',
  },
  {
    id: 4, cat: 'Regrouting',
    before: IMAGES.tileB, after: IMAGES.tile2,
    title: 'Bathroom Regrouting & Sealing',
    desc: 'Old cracked grout removed, regrouted with premium epoxy compound and sealed to last years.',
    badge: 'Regrout & Seal',
  },
  {
    id: 5, cat: 'Carpet',
    before: IMAGES.carpetB, after: IMAGES.carpet2,
    title: 'Bedroom Pet-Stain Removal',
    desc: 'Enzymatic treatment neutralised odour at source. Three layers of extraction, professionally dried.',
    badge: 'Stain Removal',
  },
  {
    id: 6, cat: 'Tile & Grout',
    before: IMAGES.grout1, after: IMAGES.tile3,
    title: 'Polished Floor Tile Revival',
    desc: 'Commercial grout cleaner applied, rotary scrubbed, then rinsed with high-heat extraction system.',
    badge: 'Full Restoration',
  },
];

/* ─── Single before/after card ─── */
function ProjectCard({ project }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="proj-card"
      style={{
        background: '#fff',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(2,31,71,0.08)',
        border: '1px solid rgba(2,31,71,0.06)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 16px 40px rgba(2,31,71,0.13)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 24px rgba(2,31,71,0.08)';
      }}
    >
      {/* Image toggle area */}
      <div style={{ position: 'relative', height: '240px', overflow: 'hidden', background: '#f0f4fa' }}>
        {/* BEFORE image */}
        <img
          src={project.before}
          alt={`Before — ${project.title}`}
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover',
            opacity: flipped ? 0 : 1,
            transition: 'opacity 0.45s ease',
          }}
        />
        {/* AFTER image */}
        <img
          src={project.after}
          alt={`After — ${project.title}`}
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover',
            opacity: flipped ? 1 : 0,
            transition: 'opacity 0.45s ease',
          }}
        />

        {/* Badge */}
        <span style={{
          position: 'absolute', top: '14px', left: '14px', zIndex: 3,
          background: 'var(--primary-blue)', color: '#fff',
          fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.5px',
          padding: '5px 12px', borderRadius: '20px',
        }}>
          {project.badge}
        </span>

        {/* Before / After pill toggle */}
        <div style={{
          position: 'absolute', bottom: '14px', right: '14px', zIndex: 3,
          display: 'flex', background: 'rgba(2,31,71,0.7)', borderRadius: '30px',
          padding: '4px', gap: '2px', backdropFilter: 'blur(6px)',
        }}>
          <button
            onClick={() => setFlipped(false)}
            style={{
              border: 'none', borderRadius: '24px', cursor: 'pointer',
              padding: '5px 14px', fontSize: '0.75rem', fontWeight: 700,
              background: !flipped ? '#fff' : 'transparent',
              color: !flipped ? 'var(--primary-navy)' : 'rgba(255,255,255,0.7)',
              transition: 'all 0.2s',
            }}
          >Before</button>
          <button
            onClick={() => setFlipped(true)}
            style={{
              border: 'none', borderRadius: '24px', cursor: 'pointer',
              padding: '5px 14px', fontSize: '0.75rem', fontWeight: 700,
              background: flipped ? 'var(--gold)' : 'transparent',
              color: flipped ? 'var(--primary-navy)' : 'rgba(255,255,255,0.7)',
              transition: 'all 0.2s',
            }}
          >After ✓</button>
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <span style={{
          fontSize: '0.75rem', fontWeight: 600, color: 'var(--primary-blue)',
          textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', display: 'block',
        }}>
          {project.cat}
        </span>
        <h3 style={{
          fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-navy)',
          marginBottom: '10px', lineHeight: 1.3,
        }}>
          {project.title}
        </h3>
        <p style={{
          fontSize: '0.875rem', color: 'var(--text-light)', lineHeight: 1.65,
          flex: 1, marginBottom: '20px',
        }}>
          {project.desc}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#25D366', fontSize: '0.82rem', fontWeight: 600 }}>
          <CheckCircle size={15} />
          Verified Job — 100% Satisfaction
        </div>
      </div>
    </div>
  );
}

/* ─── Interactive comparison slider ─── */
function ComparisonSlider({ before, after, title, desc }) {
  const [pos, setPos] = useState(50);
  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-navy)', marginBottom: '8px' }}>{title}</h3>
        <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>{desc}</p>
      </div>
      <div className="comparison-slider" style={{ height: '460px', maxWidth: '820px', margin: '0 auto' }}>
        <div className="slider-image image-before">
          <img src={before} alt="Before cleaning" />
          <span className="slider-label label-before">Before</span>
        </div>
        <div
          className="slider-image image-after"
          style={{ clipPath: `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)` }}
        >
          <img src={after} alt="After cleaning" />
          <span className="slider-label label-after">After ✓</span>
        </div>
        <div className="slider-handle-line" style={{ left: `${pos}%` }}>
          <div className="slider-handle-button" style={{ display: 'flex', gap: '4px' }}>
            <ChevronsLeftRight size={18} />
          </div>
        </div>
        <input
          type="range" min="0" max="100" value={pos}
          onChange={e => setPos(e.target.value)}
          className="slider-range-input"
          aria-label="Drag to compare before and after"
        />
      </div>
      <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-light)', marginTop: '14px' }}>
        ← Drag the handle left or right to compare →
      </p>
    </div>
  );
}

/* ─── Main Page ─── */
function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [galleryMode, setGalleryMode] = useState('grid'); // 'grid' | 'slider'
  const [sliderKey, setSliderKey] = useState('tile');

  const filtered = activeCategory === 'All'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter(p => p.cat === activeCategory);

  const sliderOptions = {
    tile: { before: IMAGES.tileB, after: IMAGES.tileA, title: 'Kitchen Tile & Grout Deep Clean', desc: 'Grease, oil, and biological staining fully removed. Grout bright-white and sealed.' },
    carpet: { before: IMAGES.carpetB, after: IMAGES.carpetA, title: 'Living Room Carpet Steam Clean', desc: 'Deep organic stains and allergens extracted. Fibres sanitised and restored.' },
  };

  return (
    <div className="page-gallery">

      {/* ── Hero Header ── */}
      <section style={{
        background: 'linear-gradient(135deg, var(--primary-navy) 0%, #032a63 100%)',
        paddingTop: '160px', paddingBottom: '90px', textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        {/* Decorative blobs */}
        <div style={{ position: 'absolute', top: '-80px', right: '-60px', width: '350px', height: '350px', background: 'rgba(0,105,194,0.2)', borderRadius: '50%', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '-40px', width: '280px', height: '280px', background: 'rgba(245,184,65,0.1)', borderRadius: '50%', filter: 'blur(60px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span style={{
            display: 'inline-block', background: 'rgba(245,184,65,0.15)', color: 'var(--gold)',
            padding: '6px 18px', borderRadius: '30px', fontSize: '0.78rem', fontWeight: 700,
            letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px',
          }}>Real Results</span>
          <h1 style={{ color: '#fff', fontSize: '3.2rem', fontWeight: 800, marginBottom: '18px', lineHeight: 1.15 }}>
            Before &amp; After <span style={{ color: 'var(--gold)' }}>Gallery</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: '640px', margin: '0 auto 40px auto', lineHeight: 1.65 }}>
            Every photo is a real job completed by our team. See the dramatic difference professional hot-extraction cleaning makes.
          </p>
          {/* Mini stats row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
            {[['500+', 'Jobs Completed'], ['4.9★', 'Average Rating'], ['100%', 'Satisfaction Guaranteed']].map(([val, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.9rem', fontWeight: 800, color: 'var(--gold)', lineHeight: 1 }}>{val}</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500, marginTop: '4px' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mode Toggle & Category Filters ── */}
      <section style={{ background: 'var(--bg-light)', padding: '40px 0 0 0', borderBottom: '1px solid rgba(2,31,71,0.07)' }}>
        <div className="container">
          {/* Mode pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '28px' }}>
            {[['grid', 'Project Cards'], ['slider', 'Interactive Slider']].map(([mode, label]) => (
              <button
                key={mode}
                onClick={() => setGalleryMode(mode)}
                style={{
                  padding: '10px 24px', borderRadius: '30px', border: '1.5px solid',
                  cursor: 'pointer', fontSize: '0.88rem', fontWeight: 700, transition: 'all 0.25s',
                  background: galleryMode === mode ? 'var(--primary-blue)' : '#fff',
                  color: galleryMode === mode ? '#fff' : 'var(--primary-navy)',
                  borderColor: galleryMode === mode ? 'var(--primary-blue)' : 'rgba(2,31,71,0.15)',
                  boxShadow: galleryMode === mode ? '0 4px 16px rgba(0,105,194,0.25)' : 'none',
                }}
              >{label}</button>
            ))}
          </div>

          {/* Category filter chips — only show in grid mode */}
          {galleryMode === 'grid' && (
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', paddingBottom: '32px' }}>
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '8px 20px', borderRadius: '30px', border: '1.5px solid', cursor: 'pointer',
                    fontSize: '0.84rem', fontWeight: 600, transition: 'all 0.22s',
                    background: activeCategory === cat ? 'var(--primary-navy)' : '#fff',
                    color: activeCategory === cat ? '#fff' : 'var(--text-main)',
                    borderColor: activeCategory === cat ? 'var(--primary-navy)' : 'rgba(2,31,71,0.12)',
                  }}
                >{cat}</button>
              ))}
            </div>
          )}

          {/* Slider category picker — only in slider mode */}
          {galleryMode === 'slider' && (
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', paddingBottom: '32px' }}>
              {[['tile', <Layers size={14} />, 'Tile & Grout'], ['carpet', <Sparkles size={14} />, 'Carpet Steam']].map(([key, icon, label]) => (
                <button
                  key={key}
                  onClick={() => setSliderKey(key)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '7px',
                    padding: '10px 22px', borderRadius: '30px', border: '1.5px solid', cursor: 'pointer',
                    fontSize: '0.85rem', fontWeight: 700, transition: 'all 0.22s',
                    background: sliderKey === key ? 'var(--primary-blue)' : '#fff',
                    color: sliderKey === key ? '#fff' : 'var(--primary-navy)',
                    borderColor: sliderKey === key ? 'var(--primary-blue)' : 'rgba(2,31,71,0.15)',
                    boxShadow: sliderKey === key ? '0 4px 16px rgba(0,105,194,0.2)' : 'none',
                  }}
                >{icon} {label}</button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Main Content ── */}
      <section style={{ background: '#fff', padding: '60px 0 80px 0' }}>
        <div className="container">

          {galleryMode === 'grid' ? (
            <>
              {/* Result count */}
              <p style={{ textAlign: 'center', color: 'var(--text-light)', fontSize: '0.88rem', marginBottom: '36px', fontWeight: 500 }}>
                Showing <strong style={{ color: 'var(--primary-navy)' }}>{filtered.length}</strong> project{filtered.length !== 1 ? 's' : ''}
                {activeCategory !== 'All' ? ` in "${activeCategory}"` : ''}
              </p>

              {/* Card grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '28px',
              }}>
                {filtered.map(proj => <ProjectCard key={proj.id} project={proj} />)}
              </div>
            </>
          ) : (
            /* ── Interactive Slider ── */
            <ComparisonSlider {...sliderOptions[sliderKey]} />
          )}

          {/* ── CTA Banner ── */}
          <div style={{
            marginTop: '80px',
            background: 'linear-gradient(135deg, var(--primary-navy) 0%, #032a63 100%)',
            borderRadius: '24px',
            padding: '56px 40px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: '-50px', right: '-30px', width: '220px', height: '220px', background: 'rgba(245,184,65,0.08)', borderRadius: '50%', filter: 'blur(50px)' }} />
            <Home size={36} style={{ color: 'var(--gold)', marginBottom: '16px' }} />
            <h3 style={{ color: '#fff', fontSize: '1.9rem', fontWeight: 800, marginBottom: '12px' }}>
              Want These Results In Your Home?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '540px', margin: '0 auto 30px auto', fontSize: '0.98rem', lineHeight: 1.65 }}>
              Book a no-obligation quote today. We assess your tiles, grout, or carpets and give you an honest, fixed price.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '15px 36px', fontSize: '1rem', fontWeight: 700 }}>
              Book a Free Assessment <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Gallery;
