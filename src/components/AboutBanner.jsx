import React from 'react';
import '../styles/AboutBanner.css'; // Make sure to create this CSS file

function AboutBanner() {
  return (
    <div className="about-banner">
      <div className="about-banner-overlay">
        <div className="about-banner-content">
          <h1>About Us</h1>
          <p>Excellence in design and innovation since 1905</p>
          <div className="about-banner-buttons">
            <button className="contact-btn">
              📞 Contact us
            </button>
            <button className="services-btn">
              📋 Our Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBanner;
