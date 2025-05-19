import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './securityServices.css';

const securityServices = [
  {
    title: 'Male Security Guards',
    image: '/speed/p 1.png',
    icon: '/speed/1.png',
    description: 'Professionally trained male security personnel for comprehensive protection at events, offices, and private functions.',
  },
  {
    title: 'Lady Security Guards',
    image: '/speed/p 2.png',
    icon: '/speed/2.png',
    description: 'Trained female security personnel ideal for events requiring female security staff, corporate environments, and VIP protection.',
  },
  {
    title: 'Bouncers',
    image: '/speed/p 3.png',
    icon: '/speed/3.png',
    description: 'Professional event security personnel specialized in crowd management and access control for clubs, parties, and high-profile events.',
  },
];

function SecurityServices() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="security-services-container" data-aos="fade-up">
      <h2 className="main-heading" data-aos="fade-right">Security Services</h2>
      <p className="tp-description" data-aos="fade-left">
        Professional security personnel trained to handle various situation security requirements for events, corporate events, and private functions.
      </p>

      <div className="security-card-wrapper">
        {securityServices.map((service, index) => (
          <div className="security-card" key={index} data-aos="zoom-in" data-aos-delay={index * 150}>
            <img src={service.image} alt={service.title} className="security-card-image" />
            <div className="security-card-body">
              <div className="flex items-center gap-3">
                <img src={service.icon} alt="" />
                <h3 className="security-title">{service.title}</h3>
              </div>
              <p className="security-desc">{service.description}</p>
              <a className="learn-more" href="#">Learn more →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SecurityServices;
