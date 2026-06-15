import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, ArrowRight, Phone, Mail } from 'lucide-react';

const faqs = [
  {
    question: "How long does carpet steam cleaning take to dry?",
    answer: "Typically, carpets take between 4 to 8 hours to dry completely. This depends heavily on humidity, air ventilation, and the carpet thickness. We use industrial blower fans during the cleaning process to kickstart the drying, allowing you to walk on carpets in a clean pair of socks immediately after."
  },
  {
    question: "Do you move furniture before cleaning?",
    answer: "Yes, we move light furniture like chairs, small tables, and lamps. For heavier items like beds, wardrobes, and large sofas, we recommend they stay in place, and we clean around them to ensure safety."
  },
  {
    question: "Is your cleaning solution safe for pets and children?",
    answer: "Absolutely. We prioritize eco-friendly, non-toxic, and biodegradable cleaning solutions that are completely safe for your family and pets once the area is dry."
  },
  {
    question: "Can you remove all stains from my carpet?",
    answer: "While we have a very high success rate with our advanced stain removal techniques, some stains (like bleach, dye, or old pet urine) may permanently alter the carpet fibers. We will assess the stains during our inspection and provide a realistic expectation."
  },
  {
    question: "How often should I have my tiles and grout professionally cleaned?",
    answer: "We recommend professional tile and grout cleaning every 12 to 18 months to maintain their appearance and longevity. High-traffic areas may require more frequent cleaning."
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="page-faq">
      <div className="page-header section-dark">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know about our services, process, and pricing.</p>
        </div>
      </div>

      <section className="section" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div className="faq-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item glass-card ${openIndex === index ? 'active' : ''}`}
                style={{ marginBottom: '16px', cursor: 'pointer', padding: '24px' }}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ margin: 0, fontSize: '1.1rem', color: openIndex === index ? 'var(--primary-blue)' : 'var(--text-main)' }}>
                    {faq.question}
                  </h3>
                  <div className="faq-icon" style={{ color: 'var(--gold)' }}>
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </div>
                {openIndex === index && (
                  <div className="faq-answer" style={{ marginTop: '16px', color: 'var(--text-light)', lineHeight: 1.6 }}>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="faq-cta-box glass-card" style={{ maxWidth: '800px', margin: '60px auto 0', textAlign: 'center', padding: '40px' }}>
            <h2>Still have questions?</h2>
            <p style={{ color: 'var(--text-light)', marginBottom: '30px' }}>
              We're here to help! Contact our friendly team for personalized advice.
            </p>
            <div className="faq-cta-buttons" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:0499848519" className="btn btn-secondary">
                <Phone size={16} /> Call Victor: 0499 848 519
              </a>
              <a href="mailto:evgroutandcarpetcleaning@gmail.com" className="btn btn-outline" style={{ backgroundColor: '#FFFFFF' }}>
                <Mail size={16} /> Email Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
