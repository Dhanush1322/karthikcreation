
import React from 'react';
import '../styles/OurAchivments.css'; // Make sure you create this CSS file

function OurAchivements() {
  return (
    <div className="our-achievements">
      <h2 className="section-heading">Our Achievements</h2>
      <p className="section-subheading">
        Award-winning excellence in event management and production
      </p>
      <div className="underline" />

      <div className="achievement-cards">
        <div className="card highlight-blue">
          <img src="/img/t2.png" alt="Best Event" />
          <h3>Best Event Management Company</h3>
          <p>Recognized for excellence in corporate event management and innovative solutions.</p>
          <span className="tag">🏆 National Event Industry Awards</span>
        </div>

        <div className="card">
          <img src="/img/t3.png" alt="AV Solutions" />
          <h3>Premium AV Solutions</h3>
          <p>State-of-the-art audio-visual equipment for events of any scale and complexity.</p>
          <span className="tag">🎧 Professional-grade Equipment</span>
        </div>

        <div className="card highlight-green">
          <img src="/img/t4.png" alt="Tech Summit" />
          <h3>Global Tech Summit</h3>
          <p>Managed a 3-day international tech conference with 2,500+ attendees and 50+ speakers.</p>
          <span className="tag">✅ TechCorp International</span>
        </div>
      </div>

      <div className="cta-button">
        <button>View All Equipment</button>
      </div>
    </div>
  );
}

export default OurAchivements;
