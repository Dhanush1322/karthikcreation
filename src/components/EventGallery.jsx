import React, { useState, useEffect } from 'react';
import '../styles/EventGallery.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const events = [
  {
    title: 'Annual Tech Summit',
    category: 'Corporate',
    description: 'Corporate Conference | Mumbai',
    image: './gallery/g6.png',
  },
  {
    title: 'Sharma-Patel Wedding',
    category: 'Wedding',
    description: 'Wedding Reception | Delhi',
    image: './gallery/g5.png',
  },
  {
    title: 'Smartphone X Launch',
    category: 'Corporate',
    description: 'Product Launch | Bangalore',
    image: './gallery/g4.png',
  },
  {
    title: 'Global Trade Expo',
    category: 'Exhibitions',
    description: 'Exhibition | Chennai',
    image: './gallery/g3.png',
  },
  {
    title: 'Summer Music Festival',
    category: 'Entertainments',
    description: 'Concert | Hyderabad',
    image: './gallery/g2.png',
  },
  {
    title: 'Business Excellence Awards',
    category: 'Corporate',
    description: 'Awards Ceremony | Pune',
    image: './gallery/g1.png',
  },
];

const categories = ['All', 'Corporate', 'Wedding', 'Exhibitions', 'Operations', 'Entertainments'];

function EventGallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const filteredEvents =
    activeCategory === 'All'
      ? events
      : events.filter((event) => event.category === activeCategory);

  return (
    <div className="event-gallery-section" data-aos="fade-up">
      <h2 className="event-gallery-title" data-aos="fade-down">Event Gallery</h2>
      <p className="subtitle" data-aos="fade-up" data-aos-delay="100">
        Explore our portfolio of successful events and creative setups
      </p>
      <div className="underline" data-aos="zoom-in" />

      <div className="event-gallery-category-tabs" data-aos="fade-up" data-aos-delay="150">
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? 'active' : ''}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="event-grid">
        {filteredEvents.map((event, idx) => (
          <div
            key={idx}
            className="event-gallery-card"
            data-aos="fade-up"
            data-aos-delay={idx * 150}
          >
            <img src={event.image} alt={event.title} />
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventGallery;
