
import React from 'react';
import '../styles/ProductBanner.css'; // Make sure to create this CSS file

function ProductBannerSection() {
  return (
    <div className="product-banner">
      <div className="product-banner-overlay">
        <div className="product-banner-content">
          <h1>Our Products</h1>
          <p>Excellence in design and innovation since 1905</p>
          <div className="product-banner-buttons">
            <button className="contact-btn">
           Eqipment Decoration
            </button>
            <button className="services-btn">
          Artist Coordination
            </button>
            <button className="services-btn">
         Security Solutions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductBannerSection;
