import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './OurTvChannels.css';

const tvChannels = [
  { name: 'Kannada Colours TV', image: '/entertainment/t4.png' },
  { name: 'Kannada TV 9', image: '/entertainment/t3.png' },
  { name: 'Kannada Public TV', image: '/entertainment/t5.png' },
  { name: 'Kannada Swarna TV', image: '/entertainment/t2.jpg' },
  { name: 'Kannada Zee 5', image: '/entertainment/t1.png' },
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
      <h2>Our Association  Media And TV Channels</h2>
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
