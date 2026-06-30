import React from 'react';
import img1 from '../assets/3.jpeg';
import img2 from '../assets/11.jpeg';
import './Mission.css';

const Mission = () => {
  return (
    <section id="mission" className="section-padding" style={{ backgroundColor: '#f0f4f1' }}>
      <div className="container mission-container">
        <div className="mission-content">
          <span className="mission-label">MISSION</span>
          <h2 className="mission-title">Committed to<br />excellence</h2>
          <p className="mission-description">
            To transform spaces with premium marble solutions by
            combining quality craftsmanship, innovation, and
            customer-centric services, setting new standards in design
            and architecture.
          </p>
        </div>
        <div className="mission-images">
          <img src={img1} alt="Premium Marble Slab" className="mission-img-main" />
          <img src={img2} alt="Marble Craftsmanship" className="mission-img-overlap" />
        </div>
      </div>
    </section>
  );
};

export default Mission;
