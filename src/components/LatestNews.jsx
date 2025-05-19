import React, { useEffect } from 'react';
import '../styles/LatestNews.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function LatestNews() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="latest-news-section" data-aos="fade-up">
      <h2 className="section-heading" data-aos="fade-down">Latest News & Highlights</h2>
      <p className="section-subheading" data-aos="fade-up" data-aos-delay="100">
        Catch up on our most recent achievements and industry breakthroughs
      </p>
      <div className="underline" data-aos="zoom-in" />

      <div className="news-cards">
        <div className="news-card highlight-blue" data-aos="fade-up" data-aos-delay="100">
          <img src="/img/hch1.png" alt="Business Awards" />
          <h3>Flawless Execution at the 2025 Business Excellence Awards</h3>
          <p>
            Delivered a seamless experience for 500+ business leaders during the prestigious 2025 Business Excellence Awards.
          </p>
        </div>

        <div className="news-card" data-aos="fade-up" data-aos-delay="250">
          <img src="/img/hch2.png" alt="AV Equipment" />
          <h3>Upgraded AV Inventory with World-Class Equipment</h3>
          <p>
            Rolled out top-tier audio-visual systems to elevate events with immersive visuals and studio-grade audio clarity.
          </p>
        </div>

        <div className="news-card highlight-green" data-aos="fade-up" data-aos-delay="400">
          <img src="/img/hch3.png" alt="Charity Gala" />
          <h3>Supported Charity Gala Raising $1.2M for Children’s Hope</h3>
          <p>
            Honored to contribute pro-bono services at the Children’s Hope Gala, helping raise $1.2M for underprivileged kids.
          </p>
        </div>
      </div>

      <div className="cta-button" data-aos="fade-up" data-aos-delay="500">
        <button>Explore All News</button>
      </div>
    </div>
  );
}

export default LatestNews;
