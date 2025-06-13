import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/ProductUnforgettableEvent.css';

function ProductUnforgettableEvent() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="unforgettable-container" data-aos="fade-up">
      <div className="unforgettable-text" data-aos="fade-right">
        <h2>Ready to Create an Unforgettable Event?</h2>
        <p>
          Contact our team today to discuss how our comprehensive services can bring your vision to life.
          From equipment and decorations to artists and security, we've got everything covered.
        </p>
        <div className="unforgettable-buttons">
          <button className="btn-blue"><a href="/Product">Get Started</a></button>
          <button className="btn-outline"><a href="/">Back to Home</a></button>
        </div>
      </div>
      <div className="unforgettable-image" data-aos="fade-left">
        <img src="./Product/pc6.jpg" alt="Unforgettable Event" />
      </div>
    </div>
  );
}

export default ProductUnforgettableEvent;
