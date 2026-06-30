import React, { useState } from 'react';
import './Gallery.css';

// Import images
import img1 from '../assets/5.jpeg';
import img2 from '../assets/7.jpeg';
import img3 from '../assets/8.jpeg';
import img4 from '../assets/WhatsApp Image 2026-06-30 at 14.19.25.jpeg';

// Import videos
import vid1 from '../assets/WhatsApp Video 2026-06-30 at 14.35.18.mp4';
import vid2 from '../assets/WhatsApp Video 2026-06-30 at 14.36.26.mp4';
import vid3 from '../assets/WhatsApp Video 2026-06-30 at 14.47.19.mp4';
import vid4 from '../assets/WhatsApp Video 2026-06-30 at 14.41.03.mp4';

const galleryItems = [
  { id: 1, type: 'video', src: vid1 },
  { id: 2, type: 'image', src: img1 },
  { id: 3, type: 'video', src: vid2 },
  { id: 4, type: 'image', src: img2 },
  { id: 5, type: 'video', src: vid3 },
  { id: 6, type: 'image', src: img3 },
  { id: 7, type: 'video', src: vid4 },
  { id: 8, type: 'image', src: img4 },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with an item in the middle

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, galleryItems.length - 1));
  };
  
  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const getSlideClass = (index) => {
    const offset = index - currentIndex;
    if (offset === 0) return 'slide-center';
    if (offset === -1) return 'slide-left-1';
    if (offset === 1) return 'slide-right-1';
    if (offset === -2) return 'slide-left-2';
    if (offset === 2) return 'slide-right-2';
    if (offset < -2) return 'slide-hidden-left slide-hidden';
    if (offset > 2) return 'slide-hidden-right slide-hidden';
    return 'slide-hidden';
  };

  return (
    <section id="gallery" className="section-padding">
      <div className="container" style={{ maxWidth: '1200px' }}>
        <h2>Our Work Gallery</h2>
        <p className="text-center" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
          Explore our craftsmanship through an exclusive collection of our finest premium marble projects.
        </p>
        
        <div className="gallery-3d-slider">
          {galleryItems.map((item, index) => {
            const slideClass = getSlideClass(index);
            const isActive = index === currentIndex;
            
            return (
              <div 
                key={item.id} 
                className={`slide-item ${slideClass}`}
                onClick={() => setCurrentIndex(index)}
              >
                {item.type === 'video' ? (
                  <>
                    <video 
                      src={item.src} 
                      className="gallery-media"
                      muted={!isActive} // mute if not active
                      loop 
                      playsInline 
                      controls={isActive}
                    />
                    {!isActive && (
                      <div className="video-overlay-icon">
                        <svg style={{width: '32px', height: '32px', fill: 'white', marginLeft: '4px'}} viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    )}
                  </>
                ) : (
                  <img src={item.src} alt="Gallery item" className="gallery-media" loading="lazy" />
                )}
              </div>
            );
          })}

          <button 
             className="slider-nav-btn prev" 
             onClick={handlePrev} 
             disabled={currentIndex === 0}
             aria-label="Previous Slide"
           >
              <svg style={{width: '24px', height: '24px', fill: 'none', stroke: 'currentColor'}} viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
           </button>
           <button 
             className="slider-nav-btn next" 
             onClick={handleNext} 
             disabled={currentIndex === galleryItems.length - 1}
             aria-label="Next Slide"
           >
              <svg style={{width: '24px', height: '24px', fill: 'none', stroke: 'currentColor'}} viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
           </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
