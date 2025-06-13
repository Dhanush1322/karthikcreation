import React, { useEffect } from 'react';
import './EnquiryBanner.css';

function EnquiryBanner() {
  useEffect(() => {
    // Preload the background image
    const img = new Image();
    img.src = '/enquiry/Frame 35.png';
  }, []);

  return (
    <div className="enquiry-banner">
      <h1>Get in Touch</h1>
      <p>Reach out to discuss your event requirement or request a custom quote</p>
    </div>
  );
}

export default EnquiryBanner;
