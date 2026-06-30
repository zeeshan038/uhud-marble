import React from 'react';
import './HowItWorks.css';
import img1 from '../assets/6.jpeg'; // Main machine image
import img2 from '../assets/8.jpeg'; // Top right machine image
import img3 from '../assets/9.jpeg'; // Bottom right machine image

const HowItWorks = () => {
  return (
    <section id="process" className="section-padding bg-secondary">
      <div className="container">
        <div className="how-it-works-header">
          <span className="section-label">OUR PROCESS</span>
          <h2>How We Work</h2>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>
            We combine state-of-the-art factory machinery with generations of expert craftsmanship to process, cut, and polish premium marble to perfection.
          </p>
        </div>
        
        <div className="how-it-works-grid">
          <div className="grid-item large">
            <img src={img1} alt="Primary marble processing machine" loading="lazy" />
          </div>
          <div className="grid-item small">
            <img src={img2} alt="Marble cutting process" loading="lazy" />
          </div>
          <div className="grid-item small">
            <img src={img3} alt="Factory workflow" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
