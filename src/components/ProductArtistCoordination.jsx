import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/ProductArtistCoordination.css';
import { FaStar } from 'react-icons/fa';

function ProductArtistCoordination() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const artists = [
    {
      title: "Harmony Collective",
      rating: 4.8,
      events: 42,
      image: "./Product/Dholu Kulita1.png"
    },
    {
      title: "DJ Maxwell",
      rating: 5.0,
      events: 78,
      image: "./Product/Lights Sound & Setup1.png"
    },
    {
      title: "Rhythm Fusion Dance Company",
      rating: 4.2,
      events: 25,
      image: "./Product/Lights Sound & Setup2.png"
    },
    {
      title: "Harmony Collective",
      rating: 4.2,
      events: 25,
      image: "./Product/Lights Sound & Setup3.png"
    },
  ];

  return (
    <div className="artist-section" data-aos="fade-up">
      <h2 className="section-title" data-aos="fade-down">Artist Coordination</h2>
      <p className="section-description" data-aos="fade-down" data-aos-delay="100">
        Access our extensive network of talented performers and entertainers for your event.
      </p>

      <div className="artist-grid">
        {artists.map((artist, index) => (
          <div className="artist-card" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
            <div className="artist-image">
              <img src={artist.image} alt={artist.title} />
            </div>
            <div className="artist-info">
              <div className="artist-rating">
                <FaStar className="star-icon" />
                <span>{artist.rating} ({artist.events} events)</span>
              </div>
              
            </div>
            <button className="book-btn">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductArtistCoordination;
