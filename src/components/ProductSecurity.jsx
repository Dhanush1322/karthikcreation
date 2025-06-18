import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/ProductSecurity.css';
import { FaCheckCircle } from 'react-icons/fa';
import useProductServices from '../Hooks/useProductServices';

function ProductSecurity() {
  const { services, images, loading } = useProductServices();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="security-section" data-aos="fade-up">
      <h2 data-aos="fade-down">KARTHIK CREATIONS SERVICES</h2>
      <p data-aos="fade-down" data-aos-delay="100">
        End-to-End Event Services & Equipment Solutions
      </p>

      {loading ? (
        <p>Loading services...</p>
      ) : (
        <div className="security-grid">
          {services
            .filter(service => service.availability_status === "Available")
            .map((service, index) => (
              <div className="security-card" key={service._id} data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="security-image">
                  {images[service._id] ? (
                    <img src={images[service._id]} alt={service.heading} />
                  ) : (
                    <div style={{ height: '200px', backgroundColor: '#f0f0f0' }}>Loading image...</div>
                  )}
                  <span className="badge">{service.availability_status}</span>
                </div>
                <div className="security-info">
                  <div className="security-info-content">
                    <h4>{service.heading}</h4>
                    <ul>
                      {service.subheading.map((feature, i) => (
                        <li key={i}>
                          <FaCheckCircle className="check-icon" /> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="book-btn">
                    <a href="/Enqiry">Book Now</a>
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default ProductSecurity;
