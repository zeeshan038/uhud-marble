import React from 'react';

const reviewsData = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Interior Designer',
    review: 'Uhud Marbles transformed my latest project. The quality of their forest green marble is unmatched, and their attention to detail is spectacular.',
    initials: 'SJ'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Homeowner',
    review: 'We chose Uhud Marbles for our kitchen countertops and the result is breathtaking. Exceptional service from selection to installation.',
    initials: 'MC'
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Architect',
    review: 'As an architect, I demand the best materials. Uhud Marbles consistently delivers premium stones that elevate the entire aesthetic of my buildings.',
    initials: 'ER'
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="section-padding bg-secondary">
      <div className="container">
        <h2>What Our Clients Say</h2>
        <p className="text-center" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
          Don't just take our word for it. Read how our premium marble has transformed spaces and exceeded expectations.
        </p>
        
        <div className="reviews-grid">
          {reviewsData.map((item) => (
            <div key={item.id} className="review-card">
              <div className="stars">
                {/* 5 Stars using SVG */}
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="icon" style={{ fill: 'currentColor', stroke: 'none', width: '20px', height: '20px' }} viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="review-text">"{item.review}"</p>
              <div className="reviewer">
                <div className="reviewer-avatar">
                  {item.initials}
                </div>
                <div>
                  <h4 style={{ margin: 0, color: 'var(--text-dark)', fontSize: '1.1rem' }}>{item.name}</h4>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
