import React from 'react';
import '../styles/ProductBanner.css';

function ProductBannerSection() {
  return (
    <div className="product-banner">
      {/* Background video - initially hidden, shown on hover */}
      <video
        className="banner-video"
        src="/Product/cc.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="product-banner-overlay">
        <div className="product-banner-content">
          <h1>Our Services</h1>
          <p>
            Comprehensive event solutions tailored to create unforgettable
            experiences for any occasion.
          </p>
          <div className="product-banner-buttons">
            <button className="contact-btn">Equipment Decoration</button>
            <button className="services-btn">Artist Coordination</button>
            <button className="services-btn">Security Solutions</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductBannerSection;
