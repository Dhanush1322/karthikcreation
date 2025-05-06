import React from 'react';
import '../styles/OurService.css';

function OurService() {
  return (
    <div className="services-section">
      <h2 className="section-title">Our Comprehensive Services</h2>
      <p className="section-subtitle">
        Discover our wide range of event management solutions tailored to meet your specific needs
      </p>
      <div className="services-underline" />

      <div className="services-grid">
        <div className="service-card">
          <img src="/img/c1.png" alt="Excellence" />
          <h3>Excellence</h3>
          <p>
            Comprehensive planning and execution of corporate events, conferences, product launches, and award ceremonies with meticulous attention to detail.
          </p>
          <a href="#">Learn More →</a>
        </div>

        <div className="service-card">
          <img src="/img/c2.png" alt="Equipment Rentals" />
          <h3>Equipment Rentals</h3>
          <p>
            Premium audio-visual equipment, staging, lighting, furniture, and decor items available for rent to enhance your event experience.
          </p>
          <a href="#">Learn More →</a>
        </div>

        <div className="service-card">
          <img src="/img/c3.png" alt="Wedding Management" />
          <h3>Wedding management</h3>
          <p>
            Creating magical wedding experiences with personalized planning, stunning decor, and flawless coordination of all wedding day activities.
          </p>
          <a href="#">Learn More →</a>
        </div>
        <div className="service-card">
          <img src="/img/c4.png" alt="Excellence" />
          <h3>Security Solutions</h3>
          <p>
            Comprehensive security services including
            trained personnel, CCTV monitoring,
            access control, and emergency response
            planning for events of all sizes. </p>
          <a href="#">Learn More →</a>
        </div>

        <div className="service-card">
          <img src="/img/c5.png" alt="Equipment Rentals" />
          <h3>Security Solutions</h3>
          <p>
            Sourcing and managing performers, musicians,
            speakers, and entertainers to create memorable
            experiences for your guests. </p>
          <a href="#">Learn More →</a>
        </div>

        <div className="service-card">
          <img src="/img/c6.png" alt="Wedding Management" />
          <h3>Exhibition Management</h3>
          <p>
            Design, setup, and management of exhibition
            spaces, trade show booths, and product
            displays with innovative concepts. </p>
          <a href="#">Learn More →</a>
        </div>

      </div>
    </div>
  );
}

export default OurService;
