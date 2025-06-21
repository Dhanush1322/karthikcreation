import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AboutBanner.css';

function AboutBanner() {

  // Preload image on mount
  useEffect(() => {
    const img = new Image();
    img.src = '/img/cvs.png'; // or better: '/img/about-banner.png' if you rename
  }, []);

  return (
    <div className="about-banner">
      <div className="about-banner-overlay">
        <div className="about-banner-content">
          <div className='about-banner-text'>
            <h1>About Us</h1>
            <p>Excellence in design and innovation since 1905</p>
          </div>

          <div className="about-banner-buttons">
            <Link to="/ContactUs" className="contact-btn">
              📞 Contact us
            </Link>
            <Link to="/Product" className="services-btn">
              📋 Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBanner;
