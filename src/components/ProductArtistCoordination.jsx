import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/ProductArtistCoordination.css';
import { FaStar } from 'react-icons/fa';
import useArtists from '../Hooks/useArtists';

function ProductArtistCoordination() {
  const { artists, images, loading } = useArtists();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="artist-section" data-aos="fade-up">
      <h2 className="section-title" data-aos="fade-down">Artist Coordination</h2>
      <p className="section-description" data-aos="fade-down" data-aos-delay="100">
        Access our extensive network of talented performers and entertainers for your event.
      </p>

      {loading ? (
        <p>Loading artists...</p>
      ) : (
        <div className="artist-grid">
          {artists.map((artist, index) => (
            <div className="artist-card" key={artist._id} data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="artist-image">
                {images[artist._id] ? (
                  <img src={images[artist._id]} alt={artist.title} />
                ) : (
                  <div style={{ height: '200px', backgroundColor: '#f0f0f0' }}>Loading image...</div>
                )}
                <span className="badge">
                  {artist.availability_status === 1 ? "Available" : "Not Available"}
                </span>
              </div>
              <div className="artist-info">
                <p>{artist.heading}</p>
                <div className="artist-rating">
                  <FaStar className="star-icon" />
                  <span>{artist.rating} ({artist.number_of_events} events)</span>
                </div>
              </div>
              <button className="book-btn">
                <a href="/Enqiry">Book Now</a>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductArtistCoordination;
