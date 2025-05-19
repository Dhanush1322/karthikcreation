
import React from 'react';
import '../../styles/Contactus/ContatusBanner.css'; // Import the CSS file for styling

function ContactusBanner() {
  return (
    <div className="contact-banner">
      <div className="contact-banner-overlay">
        <div className="contact-banner-content">
          <h1>Contact Us</h1>
         
          <div className="contact-banner-buttons">
            <button className="contact-btn">
           About Us 
            </button>
            <button className="contact-btn">
          Home 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactusBanner;
