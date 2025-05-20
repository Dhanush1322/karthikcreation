import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/ProductEventService.css';

const eventData = [
  {
    title: 'Government & Political Events',
    description: 'Specialized in organizing political functions, rallies, and roadshows with logistics management.',
    image: '/Product/p6.jpg',
  },
  {
    title: 'B2B & B2C Exhibitions',
    description: 'Expert trade show execution focused on networking and showcasing.',
    image: '/Product/p5.jpg',
  },
  {
    title: 'Corporate & Commercial Events',
    description: 'Conferences, launches, and grand openings across multiple industries.',
    image: '/Product/p4.jpg',
  },
  {
    title: 'Government & Political Events',
    description: 'Premium rentals for lighting, staging, and decorations.',
    image: '/Product/p3.jpg',
  },
  {
    title: 'B2B & B2C Exhibitions',
    description: 'Access to performers, DJs, and coordination services.',
    image: '/Product/p2.jpg',
  },
  {
    title: 'Corporate & Commercial Events',
    description: 'Security services with trained staff and control systems.',
    image: '/Product/p1.jpg',
  },
];

function ProductEventService() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="product-event-service" data-aos="fade-up">
      <h2>Comprehensive Event Services</h2>
      <p className="subtext">
        At Karthik Creations, we  offer a complete range of event services designed to meet all your needs. From equipment rentals to artist coordination and security solutions, we have everything covered to make your event a success.
      </p>
      <div className="compro-event-grid">
        {eventData.map((event, index) => (
          <div
            className="compro-event-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <img src={event.image} alt={event.title} />
            <div className="compro-event-content">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <a href="#">Learn more →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductEventService;
