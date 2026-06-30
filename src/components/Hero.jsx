import React, { useState, useEffect } from 'react';
import img1 from '../assets/3.jpeg';
import img2 from '../assets/4.jpeg';
import img3 from '../assets/7.jpeg';
import img4 from '../assets/8.jpeg';

const slides = [
  { id: 1, image: img1, title: 'Premium Quality Marble', subtitle: 'Elevate your space with timeless elegance' },
  { id: 2, image: img2, title: 'Exquisite Craftsmanship', subtitle: 'Crafted with precision for perfection' },
  { id: 3, image: img3, title: 'Luxury Natural Stone', subtitle: 'Transform your vision into reality' },
  { id: 4, image: img4, title: 'Sustainable Sourcing', subtitle: 'Ethically sourced finest materials' },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
      </div>
      
      <div className="hero-overlay"></div>
      
      <div className="hero-content text-center">
        <h1>{slides[currentSlide].title}</h1>
        <p>{slides[currentSlide].subtitle}</p>
        <a href="#contact" className="btn btn-primary" style={{ marginRight: '1rem' }}>Get a Quote</a>
        <a href="#reviews" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>Our Work</a>
      </div>

      <div className="slider-controls">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
