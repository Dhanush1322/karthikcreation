import React from 'react';
import '../styles/OurCompanyCulture.css';

function OurCompanyCulture() {
  return (
    <div className="culture-section-wrapper">
      {/* SECTION 1: Work Environment */}
      <div className="culture-section">
        <div className="culture-header">
          <h2>Our Company Culture</h2>
          <p>The environment we create to foster creativity, collaboration, and excellence</p>
        </div>

        <div className="culture-content">
          <div className="culture-text">
            <h3>Work Environment</h3>
            <p>
              At Karthik Creations, we've cultivated a dynamic, inclusive, and supportive
              work environment where creativity thrives and innovation is encouraged.
              Our collaborative workspace is designed to inspire our team and foster
              the exchange of ideas.
            </p>
            <p>
              We believe in maintaining a healthy work-life balance and providing our
              team with the resources and support they need to excel in their roles while
              growing professionally and personally.
            </p>

            <div className="culture-tags">
              <span>Collaborative</span>
              <span>Innovative</span>
              <span>Inclusive</span>
              <span>Supportive</span>
              <span>Growth-Oriented</span>
            </div>
          </div>

          <div className="culture-images">
            <img src="./gallery/go.png" alt="Team celebrating" />
            <img src="./gallery/go 1.png" alt="Team discussion" />
            <img src="./gallery/go 3.png" alt="Outdoor conversation" />
            <img src="./gallery/go 4.png" alt="Office collaboration" />
          </div>
        </div>
      </div>

      {/* SECTION 2: Professional Development */}
      <div className="culture-section reverse">
        <div className="culture-image-wrapper">
          <img src="./gallery/team.png" alt="Professional Development" className="culture-main-image" />
          <div className="image-caption">
            <div className="caption-icon">👥</div>
            <div>
              <strong>Team Excellence</strong>
              <div className="caption-sub">Collaboration in action</div>
            </div>
          </div>
        </div>

        <div className="culture-text">
          <h3>Professional Development</h3>
          <p>
            At Karthik Creations, we've cultivated a dynamic, inclusive, and supportive
            work environment where creativity thrives and innovation is encouraged.
            Our collaborative workspace is designed to inspire our team and foster
            the exchange of ideas.
          </p>
          <p>
            We believe in maintaining a healthy work-life balance and providing our
            team with the resources and support they need to excel in their roles while
            growing professionally and personally.
          </p>

          <div className="culture-tags">
            <span>Collaborative</span>
            <span>Innovative</span>
            <span>Inclusive</span>
            <span>Supportive</span>
            <span>Growth-Oriented</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurCompanyCulture;
