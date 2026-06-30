import React from 'react';

const LocationMap = () => {
  return (
    <section className="location-section" style={{ width: '100%', lineHeight: 0 }}>
      <iframe 
        title="Uhud Marbles Location Map"
        src="https://maps.google.com/maps?q=Swabi%20Mardan%20Road%20Near%20Azam%20Abad%20Chowki,%20Tehsil%20Razzar,%20District%20Swabi&t=&z=14&ie=UTF8&iwloc=&output=embed" 
        width="100%" 
        height="450" 
        style={{ border: 0, display: 'block' }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </section>
  );
};

export default LocationMap;
