import React from 'react';
import './Map.css'; // Optional: add custom styles

function Map() {
  return (
    <div className="map-container ">
      <iframe
        title="Event Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609992757!2d72.7411011582031!3d19.082197839233288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63d02e260a1%3A0xaafb30c393a0a9e0!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        
      ></iframe>
    </div>
  );
}

export default Map;
