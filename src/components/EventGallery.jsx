import React, { useState, useEffect } from 'react';
import '../styles/EventGallery.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useEventGallery from '../Hooks/useEventGallery';

const categories = ['All', 'Wedding', 'Corporate', 'Exhibitions', 'Operations', 'Entertainments', 'Products'];

function EventGallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { galleryData, imageURLs, loading } = useEventGallery();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const filteredEvents = galleryData[activeCategory.toLowerCase()] || [];

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

      {loading ? (
        <p>Loading gallery...</p>
      ) : (
        <div className="event-grid">
          <div class="event-gallery-card">

            <img src="/img/logooo.jpeg" alt="Event Image" class="event-media" style={{style:"height:300px;"}}/>

            <h3>About Us</h3>
            <p>About Karthik Creations & Top Speed Detective & Security Services</p>
            <a href="/eventgallery.mp4" target='_black' ><p style={{ color: "red" }}>Watch Video </p></a>
          </div>

          {filteredEvents.map((event, idx) => (
            <div
              key={idx}
              className="event-gallery-card"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              {imageURLs[event.img] ? (() => {
                const url = imageURLs[event.img];
                const extension = event.img.split('.').pop().toLowerCase();
                const videoExtensions = ['mp4', 'webm', 'ogg', 'mov'];
                const imageExtensions = ['jpg', 'jpeg', 'png', 'gif'];

                if (videoExtensions.includes(extension)) {
                  return (
                    <video
                      src={url}
                      controls
                      className="event-media"
                      width="100%"
                      height="auto"
                      preload="metadata"
                    />
                  );
                } else if (imageExtensions.includes(extension)) {
                  return (
                    <img
                      src={url}
                      alt={event.heading || `image-${idx}`}
                      className="event-media"
                      width="100%"
                      height="auto"
                    />
                  );
                } else {
                  return <p>Unsupported media type</p>;
                }
              })() : (
                <p>Loading media...</p>
              )}

              {activeCategory === 'All' && (
                <>
                  <h3>{event.heading}</h3>
                  <p>{event.description}</p>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EventGallery;
