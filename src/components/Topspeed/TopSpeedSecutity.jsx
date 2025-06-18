import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './TopSpeedSecutity.css';
import { Link } from 'react-router-dom';
import useTopSpeedSecurityServices from '../../Hooks/useTopSpeedSecurityServices';

function TopSpeedSecutity() {
  const { services, images, loading } = useTopSpeedSecurityServices();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="top-speed-container" data-aos="fade-up">
      <h2 className="main-heading" data-aos="fade-right">TOP SPEED SECURITY SERVICES</h2>
      <p className="tp-description" data-aos="fade-left">
        <u>
          Services provide for all of Event’s & Expo’s industry & Corporates, Public and Private Places,
          Institutional, Commercial, Residential, Schools, Hospitals, Larger mixed Communities,
          Institutions, Apartments, Houses, etc.
        </u>
      </p>

      {loading ? (
        <p>Loading services...</p>
      ) : (
        <div className="card-wrapper">
          {services.map((service, index) => (
            <div className="service-card" key={service._id || index} data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="card-image">
                {images[service.img] ? (
                  <img src={images[service.img]} alt={service.heading} />
                ) : (
                  <div style={{ height: '200px', backgroundColor: '#f0f0f0' }}>Loading image...</div>
                )}
                <span className="badge">{service.availability_status}</span>
              </div>
              <h3>{service.heading}</h3>
              <ul>
                {service.subheading?.map((item, i) => (
                  <li key={i}>✅ {item}</li>
                ))}
              </ul>
              <div className="card-footer">
                <button className="book-btn">
                  <Link to="/Enqiry">Book Now</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TopSpeedSecutity;
