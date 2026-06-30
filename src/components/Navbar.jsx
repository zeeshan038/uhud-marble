import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar" style={{
      background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.5)',
      boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
      backdropFilter: 'blur(10px)'
    }}>
      <div className="container">
        <a href="#" className="nav-brand">
          <svg className="icon" style={{ color: 'var(--primary)' }} viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          Uhud Marbles
        </a>
        
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#process">Our Process</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#founders">Founders</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
