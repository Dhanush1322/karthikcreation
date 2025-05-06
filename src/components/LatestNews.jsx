import React from 'react';
import '../styles/LatestNews.css';

function LatestNews() {
  return (
    <div className="latest-news-section">
      <h2 className="section-heading">Latest News & Highlights</h2>
      <p className="section-subheading">
        Catch up on our most recent achievements and industry breakthroughs
      </p>
      <div className="underline" />

      <div className="news-cards">
        <div className="news-card highlight-blue">
          <img src="/img/t2.png" alt="Business Awards" />
          <h3>Flawless Execution at the 2025 Business Excellence Awards</h3>
          <p>
            Delivered a seamless experience for 500+ business leaders during the prestigious 2025 Business Excellence Awards.
          </p>
        </div>

        <div className="news-card">
          <img src="/img/t3.png" alt="AV Equipment" />
          <h3>Upgraded AV Inventory with World-Class Equipment</h3>
          <p>
            Rolled out top-tier audio-visual systems to elevate events with immersive visuals and studio-grade audio clarity.
          </p>
        </div>

        <div className="news-card highlight-green">
          <img src="/img/t4.png" alt="Charity Gala" />
          <h3>Supported Charity Gala Raising $1.2M for Children’s Hope</h3>
          <p>
            Honored to contribute pro-bono services at the Children’s Hope Gala, helping raise $1.2M for underprivileged kids.
          </p>
        </div>
      </div>

      <div className="cta-button">
        <button>Explore All News</button>
      </div>
    </div>
  );
}

export default LatestNews;
