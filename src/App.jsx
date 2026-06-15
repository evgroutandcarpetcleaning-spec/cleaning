import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import logoImg from './assets/e.v.logo.jpeg';

// Import Shared Components
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import MobileCallBar from './components/MobileCallBar';
import ScrollToTop from './components/ScrollToTop';

// Import Page Views
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // preloader delay timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* Scroll Restorer */}
      <ScrollToTop />

      {/* 1. Loading Splash Screen */}
      <div className={`loader-wrapper ${!isLoading ? 'fade-out' : ''}`} id="site-loader">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img 
            src={logoImg} 
            alt="EV Logo" 
            style={{ height: '100px', width: 'auto', borderRadius: '8px', animation: 'pulseEffect 2.0s infinite', backgroundColor: 'var(--white)', padding: '6px' }} 
          />
        </div>
      </div>

      {/* Floating Elements */}
      <WhatsAppButton />
      <MobileCallBar />

      {/* Shared Navigation Header */}
      <Header />

      {/* Router Switch Viewports */}
      <main className="main-content-view" style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Shared Footer */}
      <Footer />
    </Router>
  );
}

export default App;
