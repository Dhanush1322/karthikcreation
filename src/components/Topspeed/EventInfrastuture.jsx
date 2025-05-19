import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './EventInfrastructure.css';

const EventInfrastructure = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const infraItems = [
    {
      title: 'Canopies & Pagodas',
      desc: 'Professional crowd control and traffic management solutions for events of all sizes.',
      image: '/speed/e1.png',
      icon: '/speed/ei1.png',
    },
    {
      title: 'Podiums ,Lights & Sound Systems',
      desc: 'Elegant shelter solutions for outdoor events, available in various sizes and designs.',
      image: '/speed/e2.png',
      icon: '/speed/ei2.png',
    },
    {
      title: 'Barricades & Bollards',
      desc: 'Professional presentation equipment including podiums, microphones, and megaphones for events.',
      image: '/speed/e3.png',
      icon: '/speed/ei3.png',
    }
  ];

  return (
    <div className="infra-wrapper" data-aos="fade-up">
      <h2 className="infra-title" data-aos="fade-right">Event Infrastructure</h2>
      <p className="infra-subtitle" data-aos="fade-left">
        Complete event setup solutions including Canopies, Pagoda barriers, structures, and essential event management equipment.
      </p>
      <div className="infra-grid">
        {infraItems.map((item, index) => (
          <div
            className="infra-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            <img src={item.image} alt={item.title} className="infra-image" />
            <div className="infra-card-content">
              <div className="infra-icon"><img src={item.icon} alt="" /></div>
              <h3 className="infra-card-title">{item.title}</h3>
              <p className="infra-card-desc">{item.desc}</p>
              <a href="#" className="infra-link">Read more →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventInfrastructure;
