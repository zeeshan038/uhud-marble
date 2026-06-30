import React from 'react';
import founder1 from '../assets/rasheed ali.jpeg';
import founder2 from '../assets/Ayeen Khan.jpeg';

const foundersData = [
  {
    id: 1,
    name: 'Rasheed Ali',
    role: 'Co-Founder & CEO',
    bio: 'With extensive experience in the natural stone industry, Rasheed leads Uhud Marbles with a vision of sustainable luxury and unparalleled quality.',
    image: founder1,
    phone: '+92 311 9222343'
  },
  {
    id: 2,
    name: 'Ayeen Khan',
    role: 'Co-Founder & Managing Director',
    bio: 'Ayeen brings deep expertise in operations and design, ensuring that every piece of marble we source meets the highest standards of beauty and structural integrity.',
    image: founder2,
    phone: '+92 344 3170766'
  }
];

const Founders = () => {
  return (
    <section id="founders" className="section-padding">
      <div className="container">
        <h2>Meet The Founders</h2>
        <p className="text-center" style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>
          The visionaries behind Uhud Marbles who share a passion for bringing the earth's most beautiful natural creations to your spaces.
        </p>
        
        <div className="founders-grid">
          {foundersData.map((founder) => (
            <div key={founder.id} className="founder-card">
              <div className="founder-image-wrapper">
                <img src={founder.image} alt={founder.name} className="founder-image" />
              </div>
              <div className="founder-info" style={{ textAlign: 'center', padding: '1.5rem 1rem' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>{founder.name}</h3>
                <a href={`tel:${founder.phone.replace(/\\s+/g, '')}`} style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 500, fontSize: '1.1rem' }}>
                  {founder.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
