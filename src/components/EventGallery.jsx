import React, { useState, useEffect } from 'react';
import '../styles/EventGallery.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const events = [
  {
    title: 'Political Functions',
    category: 'All',
    description: 'Corporate Conference ',
    image: './gallery/g6.png',
  },
  {
    title: 'Sharma-Patel Wedding',
    category: 'All',
    description: 'Wedding Reception',
    image: './gallery/g5.jpg',
  },
  {
    title: 'Expo & Weddings',
    category: 'All',
    description: 'Product Launch ',
    image: './gallery/g4.jpg',
  },
  {
    title: ' Expos & Corporate Events',
    category: 'All',
    description: 'Exhibition',
    image: './gallery/g3.jpg',
  },
  {
    title: 'Cultural functions',
    category: 'All',
    description: 'Cult',
    image: './gallery/g2.jpg',
  },
  {
    title: 'Business Excellence Awards',
    category: 'All',
    description: 'Awards Ceremony',
    image: './gallery/g1.jpg',
  },

  {
    category: 'Corporate',
    image: './gallery/cor1.jpg',
  },
  {
    category: 'Corporate',
    image: './gallery/cor2.jpg',
  },
  {
    category: 'Corporate',
    image: './gallery/',
  },
  {
    category: 'Corporate',
    image: './gallery/',
  },
  {
    category: 'Corporate',
    image: './gallery/cor3.png',
  },
  {
    category: 'Corporate',
    image: './gallery/cor4.png',
  },

  {
    category: 'Corporate',
    image: './gallery/cor5.png',
  },
  {
    category: 'Corporate',
    image: './gallery/cor6.png',
  },
  {
    category: 'Corporate',
    image: './gallery/',
  },
  {
    category: 'Corporate',
    image: './gallery/cor7.png',
  },
  {
    category: 'Corporate',
    image: './gallery/cor8.png',
  },
   {
    category: 'Corporate',
    image: './gallery/cor9.png',
  },
   {
    category: 'Corporate',
    image: './gallery/cor10.png',
  },
   {
    category: 'Corporate',
    image: './gallery/cor11.png',
  },
   {
    category: 'Corporate',
    image: './gallery/cor12.png',
  },
   {
    category: 'Corporate',
    image: './gallery/cor13.png',
  },
   {
    category: 'Corporate',
    image: './gallery/cor14.png',
  },
   {
    category: 'Corporate',
    image: './gallery/cor15.png',
  },


];

const categories = ['All', 'Corporate', 'Wedding', 'Exhibitions', 'Operations', 'Entertainments', 'Products'];

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
            {activeCategory === 'All' && (
              <>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}

export default EventGallery;
