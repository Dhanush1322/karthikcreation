import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './OurTvChannels.css';

const tvChannels = [
  { name: 'Colours TV', image: '/entertainment/t4.png' },
  { name: 'TV 9', image: '/entertainment/t3.png' },
  { name: 'Public TV', image: '/entertainment/t5.png' },
  { name: 'Swarna TV', image: '/entertainment/t2.png' },
  { name: 'Zee 5', image: '/entertainment/t1.png' },
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
            <img src={channel.image} alt={channel.name} className="tv-logo" />
            <p>{channel.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTvChannels;
