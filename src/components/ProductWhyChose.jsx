import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/ProductWhyChose.css';
import { FaLightbulb, FaHandsHelping, FaTools } from 'react-icons/fa';

function ProductWhyChose() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="why-choose-section" data-aos="fade-up">
      <div className="why-choose-container">
        <div className="why-choose-image" data-aos="fade-right">
          <img src="/Product/why.jpg" alt="Team discussion" />
        </div>
        <div className="why-choose-content" data-aos="fade-left">
          <h2>Why Choose Our Services</h2>

          <div className="why-choose-point" data-aos="fade-up" data-aos-delay="100">
            <FaLightbulb className="icon" />
            <div>
              <h4>Premium Quality</h4>
              <p>We offer only the highest quality equipment, top-tier artists, and professionally trained security personnel to ensure excellence at every event.</p>
            </div>
          </div>

          <div className="why-choose-point" data-aos="fade-up" data-aos-delay="200">
            <FaHandsHelping className="icon" />
            <div>
              <h4>Dedicated Support</h4>
              <p>Our team provides 24/7 support throughout the planning process and during your event to address any concerns immediately.</p>
            </div>
          </div>

          <div className="why-choose-point" data-aos="fade-up" data-aos-delay="300">
            <FaTools className="icon" />
            <div>
              <h4>Customizable Solutions</h4>
              <p>Every service we offer can be tailored to meet your specific requirements, ensuring a perfect fit for your event vision and budget.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductWhyChose;
