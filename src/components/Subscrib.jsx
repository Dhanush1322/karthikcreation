import React, { useEffect } from 'react';
import '../styles/Subscrib.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
function Subscrib() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="subscribe-section" data-aos="fade-up">
      <h2 className="subscribe-title" data-aos="fade-down" data-aos-delay="100">
        Ready to Create Your Next Extraordinary Event?
      </h2>
      <p className="subscribe-subtitle" data-aos="fade-up" data-aos-delay="200">
        Let's collaborate to bring your vision to life with our expertise in event management
      </p>
      <div className="subscribe-buttons" data-aos="zoom-in" data-aos-delay="300">
   
  <button className="btn-primary"><a href="/ContactUs">Contact Us Today</a></button>



  <button className="btn-outline"><a href="/Product">Explore Products</a></button>

      </div>
    </div>
  );
}

export default Subscrib;
