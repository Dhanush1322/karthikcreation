import React from 'react';
import '../styles/OurService.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const services = [
  {
    title: 'Excellence',
    image: '/img/c1.png',
    description: 'Comprehensive planning and execution of corporate events, conferences, product launches, and award ceremonies with meticulous attention to detail.',
    animation: 'fade-up'
  },
  {
    title: 'Equipment Rentals',
    image: '/img/c2.png',
    description: 'Premium audio-visual equipment, staging, lighting, furniture, and decor items available for rent to enhance your event experience.',
    animation: 'fade-up'
  },
  {
    title: 'Wedding Management',
    image: '/img/c3.png',
    description: 'Creating magical wedding experiences with personalized planning, stunning decor, and flawless coordination of all wedding day activities.',
    animation: 'fade-up'
  },
  {
    title: 'Security Solutions',
    image: '/img/c4.png',
    description: 'Comprehensive security services including trained personnel, CCTV monitoring, access control, and emergency response planning for events of all sizes.',
    animation: 'fade-right'
  },
  {
    title: 'Entertainment Management',
    image: '/img/c5.png',
    description: 'Sourcing and managing performers, musicians, speakers, and entertainers to create memorable experiences for your guests.',
    animation: 'fade-right'
  },
  {
    title: 'Exhibition Management',
    image: '/img/c6.png',
    description: 'Design, setup, and management of exhibition spaces, trade show booths, and product displays with innovative concepts.',
    animation: 'fade-right'
  },
];

function OurService() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // animation duration in ms
      once: true,      // only animate once
    });
  }, []);

  return (
    <div className="services-section">
      <h2 className="section-title">Our Comprehensive Services</h2>
      <p className="section-subtitle">
        Discover our wide range of event management solutions tailored to meet your specific needs
      </p>
      <div className="services-underline" />

      <div className="home-services-grid">
        {services.map((service, index) => (
          <div className="home-service-card" data-aos={service.animation} key={index}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#">Learn More →</a>
          </div>

        ))}

      </div>
      <div className="cta-button" data-aos="fade-up">
        <button>View All Services</button>
      </div>
    </div>
  );
}

export default OurService;
