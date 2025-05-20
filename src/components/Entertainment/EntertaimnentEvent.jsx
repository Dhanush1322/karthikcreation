import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../styles/Entertainment/EntertainmentEvent.css';

const eventCategories = [
  {
    image: '/entertainment/k2.png',
    title: 'TV Shows',
    subtitle: 'Popular shows and exclusive launches',
  },
  {
    image: '/entertainment/k3.png',
    title: 'Rock Concerts',
    subtitle: 'Electrifying live performances',
  },
  {
    image: '/entertainment/k4.png',
    title: 'Health & Wellness',
    subtitle: 'Premium clubs and wellness events',
  },
  {
    image: '/entertainment/k5.png',
    title: 'Hospitality Events',
    subtitle: 'Luxury gatherings and launches',
  },
  {
    image: '/entertainment/k6.png',
    title: 'Residential Events',
    subtitle: 'High-end property launches',
  },
];

function EntertainmentEvent() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="entertainment-event-container">
      <h2 className="event-heading">Explore Event Categories</h2>
      <div className="event-cards-wrapper">
        {eventCategories.map((event, index) => (
          <div
            className="event-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100} // optional stagger effect
          >
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-info">
              <h3>{event.title}</h3>
              <p>{event.subtitle}</p>
              <a href="#" className="explore-link">Explore →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EntertainmentEvent;
