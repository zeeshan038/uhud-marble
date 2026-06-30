import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2>Uhud Marbles</h2>
            <p>Elevating spaces with the finest natural stone from around the world. Premium quality, sustainable sourcing, and master craftsmanship.</p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#process">Our Process</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#founders">Founders</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>Swabi Mardan Road Near Azam Abad Chowki,<br/>Tehsil Razzar, District Swabi</p>
            <p>Phone: +1 234 567 8900</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Uhud Marbles. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
