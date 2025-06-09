import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/ProductArtistCoordination.css';
import { FaStar } from 'react-icons/fa';
import { Navigate, useNavigate } from 'react-router-dom';

function ProductArtistCoordination() {
  const [artists, setArtists] = useState([]);
  const [images, setImages] = useState({});
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA5YzZlMzE4NGRkOGQwNWQxMjg5YjgiLCJlbWFpbCI6Im11aGFtbWFkc2hvYWliMjgwM0BnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJhdXRoVG9rZW4iOnRydWUsImlhdCI6MTc0ODQzNDA4MiwiZXhwIjoxODM0ODM0MDgyfQ.olVsB5_gf6j4qSv8TitQfkoAQj8Qh6RGWzQuTFHqP84'; // Replace with your valid token
const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Fetch artist details
    fetch('https://karthikcreation.ap-1.evennode.com/api/admin/getAllArtist', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.Status) {
          setArtists(data.data);

          // Fetch image for each artist
          data.data.forEach(artist => {
            fetch(`https://karthikcreation.ap-1.evennode.com/api/admin/viewArtistFile/${artist.img}`, {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            })
              .then(res => res.blob())
              .then(blob => {
                const imageUrl = URL.createObjectURL(blob);
                setImages(prev => ({ ...prev, [artist._id]: imageUrl }));
              })
              .catch(err => console.error('Image fetch error:', err));
          });
        } else {
          console.error('Failed to fetch artists');
        }
      })
      .catch(err => console.error('API error:', err));
  }, []);

  return (
    <div className="artist-section" data-aos="fade-up">
      <h2 className="section-title" data-aos="fade-down">Artist Coordination</h2>
      <p className="section-description" data-aos="fade-down" data-aos-delay="100">
        Access our extensive network of talented performers and entertainers for your event.
      </p>

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
              <h4>{artist.title}</h4>
              <div className="artist-rating">
                <FaStar className="star-icon" />
                <span>{artist.rating} ({artist.number_of_events} events)</span>
              </div>
            </div>
            <button className="book-btn" onClick={()=> navigate('/Enqiry')}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductArtistCoordination;
