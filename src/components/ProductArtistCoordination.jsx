import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/ProductArtistCoordination.css';
import { FaStar, FaMusic, FaCompactDisc, FaUserFriends } from 'react-icons/fa';

function ProductArtistCoordination() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const artists = [
    {
      title: "Harmony Collective",
      role: "Live Band",
      rating: 4.8,
      events: 42,
      genres: ["Pop", "Jazz", "R&B", "Rock"],
      description: "Versatile 5-piece band performing popular hits across multiple genres. Perfect for corporate events, weddings, and gala dinners. Includes sound equipment.",
      icon: <FaMusic />,
      image: "./Product/Dholu Kulita1.png"
    },
    {
      title: "DJ Maxwell",
      role: "DJ & Producer",
      rating: 5.0,
      events: 78,
      genres: ["House", "Top 40", "EDM", "Hip Hop"],
      description: "Experienced DJ with expertise in reading crowds and creating the perfect atmosphere. Brings professional equipment and lighting. Specializes in corporate events and weddings.",
      icon: <FaCompactDisc />,
      image: "./Product/Lights Sound & Setup1.png"
    },
    {
      title: "Rhythm Fusion Dance Company",
      role: "Dance Performers",
      rating: 4.2,
      events: 25,
      genres: ["Contemporary", "Hip Hop", "Ballroom", "Cultural"],
      description: "Professional dance troupe offering captivating performances in various styles. Group size flexible from 4–12 dancers. Custom choreography available for themed events.",
      icon: <FaUserFriends />,
      image: "./Product/Lights Sound & Setup2.png"
    },
    {
      title: "Harmony Collective",
      role: "Live Band",
      rating: 4.2,
      events: 25,
      genres: ["Corporate", "Galas", "Weddings", "Bilingual"],
      description: "Experienced bilingual event host with background in broadcasting. Specializes in corporate events, award ceremonies, and gala dinners. Known for professionalism and audience engagement.",
      icon: <FaUserFriends />,
      image: "./Product/Lights Sound & Setup3.png"
    },
    
  ];

  return (
    <div className="artist-section" data-aos="fade-up">
      <h2 data-aos="fade-down">Artist Coordination</h2>
      <p data-aos="fade-down" data-aos-delay="100">
        Access our extensive network of talented performers and entertainers for your event.
      </p>

      <div className="artist-grid">
        {artists.map((artist, index) => (
          <div
            className="artist-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="artist-image">
              <img src={artist.image} alt={artist.title} />
            </div>
            <div className="artist-info" >
               <div className="artist-rating">
                <FaStar className="star-icon" />
                <span>{artist.rating} ({artist.events} events)</span>
              </div>
          
                  <button className="book-btn">Book Now</button>
             
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductArtistCoordination;
