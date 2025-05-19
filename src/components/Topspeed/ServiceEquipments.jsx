import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ServiceEquipments.css';
import { FaSnowflake, FaSuitcaseRolling, FaVideo, FaWineBottle } from 'react-icons/fa';

function ServiceEquipments() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      icon: <FaSnowflake />,
      title: 'A/C Coolers & Towers',
      description: 'Industrial-grade cooling solutions for events and outdoor gatherings of all sizes.',
    },
    {
      icon: <FaSuitcaseRolling />,
      title: 'Baggage Scanner',
      description: 'Professional security scanning equipment for events requiring enhanced security measures.',
    },
    {
      icon: <FaVideo />,
      title: 'CCTV Cameras',
      description: 'Temporary and permanent surveillance solutions with professional monitoring options.',
    },
    {
      icon: <FaWineBottle />,
      title: 'Alcohol Tester',
      description: 'Professional breathalyzer equipment for events and venues where alcohol is served.',
    },
  ];

  return (
    <div className="services-wrapper" data-aos="fade-up">
      <h2 className="services-title" data-aos="fade-right">Services Equipments</h2>
      <p className="services-subtitle" data-aos="fade-left">
        State-of-the-art security and event equipment to ensure safety and comfort at your events at venues.
      </p>
      <div className="services-grid">
        {services.map((item, idx) => (
          <div
            key={idx}
            className="service-enqiry-card"
            data-aos="zoom-in"
            data-aos-delay={idx * 150}
          >
            <div className="service-icon">{item.icon}</div>
            <h3 className="service-title">{item.title}</h3>
            <p className="service-desc">{item.description}</p>
            <a href="#" className="service-link">Learn more →</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceEquipments;
