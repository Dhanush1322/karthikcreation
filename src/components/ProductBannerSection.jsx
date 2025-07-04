import React, { useEffect } from 'react';
import '../styles/ProductBanner.css';
import { Link } from 'react-router-dom';

function ProductBannerSection() {
  useEffect(() => {
    // Preload background image
    const img = new Image();
    img.src = '/img/productbanner.jpg';
  }, []);

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
            <Link to='/ContactUs'>
              <button className="contact-btn">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductBannerSection;
