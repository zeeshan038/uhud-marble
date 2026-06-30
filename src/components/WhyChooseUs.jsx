import React from 'react';

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: 'var(--primary)', textTransform: 'uppercase', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '1.5px', borderBottom: '2px solid var(--primary)', paddingBottom: '4px' }}>WHY CHOOSE US</span>
          <h2 style={{ marginTop: '1rem', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>The Uhud Advantage</h2>
          <p style={{ color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            We don't just sell marble; we deliver an experience of luxury, durability, and timeless beauty. Here is what sets us apart.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          <div style={{ background: 'var(--bg-offwhite)', padding: '2.5rem', borderRadius: '16px', border: '1px solid var(--border)', textAlign: 'center', transition: 'all 0.4s ease', cursor: 'default' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.borderColor = 'var(--primary-light)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--border)'; }}>
            <div style={{ width: '70px', height: '70px', background: 'var(--primary)', color: 'white', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 1.5rem' }}>
              <svg style={{ width: '32px', height: '32px', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }} viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h3 style={{ color: 'var(--text-dark)', marginBottom: '1rem', fontSize: '1.3rem' }}>Premium Quality</h3>
            <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>We source only the highest grade natural stones from the world's most renowned quarries to ensure perfection.</p>
          </div>

          <div style={{ background: 'var(--bg-offwhite)', padding: '2.5rem', borderRadius: '16px', border: '1px solid var(--border)', textAlign: 'center', transition: 'all 0.4s ease', cursor: 'default' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.borderColor = 'var(--primary-light)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--border)'; }}>
            <div style={{ width: '70px', height: '70px', background: 'var(--primary)', color: 'white', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 1.5rem' }}>
              <svg style={{ width: '32px', height: '32px', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }} viewBox="0 0 24 24">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
            <h3 style={{ color: 'var(--text-dark)', marginBottom: '1rem', fontSize: '1.3rem' }}>Master Craftsmanship</h3>
            <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>Our artisans combine traditional techniques with modern technology to process every slab flawlessly.</p>
          </div>

          <div style={{ background: 'var(--bg-offwhite)', padding: '2.5rem', borderRadius: '16px', border: '1px solid var(--border)', textAlign: 'center', transition: 'all 0.4s ease', cursor: 'default' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.borderColor = 'var(--primary-light)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--border)'; }}>
            <div style={{ width: '70px', height: '70px', background: 'var(--primary)', color: 'white', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 1.5rem' }}>
              <svg style={{ width: '32px', height: '32px', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <h3 style={{ color: 'var(--text-dark)', marginBottom: '1rem', fontSize: '1.3rem' }}>Global Network</h3>
            <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>With trusted logistics partners worldwide, we ensure timely and safe delivery of your marble, anywhere.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
