import React from 'react';
import '../styles/Aboutsection.css'; // Make sure this file exists

function Aboutsection() {
  return (
    <>
      <h2 className="about-section-heading">About Karthik Creations</h2>
    <div className="about-section">
      
      <div className="about-text">
       
        <h3>Your Premier Event Management Partner</h3>
        <p>
          Karthik Creations has established itself as a leading event management
          company specializing in creating memorable experiences for corporate events,
          weddings, exhibitions, and entertainment shows.
        </p>
        <p>
          Our dedicated team of event professionals brings creativity, precision,
          and passion to every project, ensuring flawless execution from concept to
          completion.
        </p>

        <div className="features-grid">
          <div className="feature-item">
            <img src="/img/icon1.png" alt="" />
            <div>
              <strong>Excellence</strong>
              <p>Committed to delivering exceptional quality in every detail</p>
            </div>
          </div>
          <div className="feature-item">
          <img src="/img/icon2.png" alt="" />
            <div>
              <strong>Client-Focused</strong>
              <p>Your vision and satisfaction are our top priorities</p>
            </div>
          </div>
          <div className="feature-item">
          <img src="/img/icon3.png" alt="" />
            <div>
              <strong>Innovation</strong>
              <p>Creative solutions that make your event stand out</p>
            </div>
          </div>
          <div className="feature-item">
          <img src="/img/icon4.png" alt="" />
            <div>
              <strong>Expert Team</strong>
              <p>Skilled professionals with extensive industry experience</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-image">
        <img src="./img/about.png" alt="Team" />
        <div className="quote-box">
          “We transform your vision into unforgettable experience”.
        </div>
      </div>
    </div>
    </>
  );
}

export default Aboutsection;
