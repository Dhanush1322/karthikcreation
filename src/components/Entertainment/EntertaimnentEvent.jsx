import React from 'react';
import '../../styles/Entertainment/EntertainmentEvent.css';

const eventCategories = [
  {
    image: '/entertainment/k 1.png',
    title: 'Movies & Premiers',
    subtitle: 'Latest blockbusters and exclusive premieres',
  },
  {
    image: '/entertainment/k2.png',
    title: 'TV Shows & Serials',
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
  return (
    <div className="entertainment-event-container">
      <h2 className="event-heading">
        Explore Event Categories
      </h2>
      <div className="event-cards-wrapper">
        {eventCategories.map((event, index) => (
          <div className="event-card" key={index}>
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
