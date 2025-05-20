import React, { useEffect } from 'react';
import { FaTv } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './OurTvChannels.css';

const tvChannels = [
  'Colors TV',
  'TV 9',
  'Public TV',
  'Swarna TV',
  'zee TV',
];

function OurTvChannels() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="tv-section">
      <h2>Our TV Channel</h2>
      <div className="tv-grid">
        {tvChannels.map((channel, index) => (
          <div
            className="tv-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <FaTv className="tv-icon" />
            <p>{channel}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTvChannels;
