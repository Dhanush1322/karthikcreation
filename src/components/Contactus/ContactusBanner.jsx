import React, { useEffect } from 'react';
import '../../styles/Contactus/ContatusBanner.css';

function ContactusBanner() {
  useEffect(() => {
    // Preload the background image
    const img = new Image();
    img.src = '/img/productbanner.jpg';
  }, []);

  return (
    <div className="contact-banner">
      <div className="contact-banner-overlay">
        <div className="contact-banner-content">
          <h1>Contact Us</h1>

          <div className="contact-banner-buttons">
            <button className="contact-btn">About Us</button>
            <button className="contact-btn">Home</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactusBanner;
