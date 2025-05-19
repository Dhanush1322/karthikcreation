import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Aboutsection.css';

function Aboutsection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <h2 className="about-section-heading" data-aos="fade-up">
        About Karthik Creations
      </h2>
      <div className="about-section">
        <div className="about-text" data-aos="fade-right">
          <h3>Your Premier Event Management Partner</h3>
          <p>
            Karthik Creations has established itself as a leading event management
            company specializing in creating memorable experiences for
            corporate events, weddings, exhibitions, and entertainment shows.
          </p>
          <p>

            Our dedicated team of event professionals brings creativity, precision,
            and passion to every project, ensuring flawless execution from concept
            to completion.
          </p>

          <div className="features-grid">
            <div className="feature-item" data-aos="zoom-in">
              <img src="/img/icon1.png" alt="Excellence" />
              <div>
                <strong>Excellence</strong>
                <p>Committed to delivering exceptional quality in every detail</p>
              </div>
            </div>
            <div className="feature-item" data-aos="zoom-in" data-aos-delay="100">
              <img src="/img/icon2.png" alt="Client-Focused" />
              <div>
                <strong>Client-Focused</strong>
                <p>Your vision and satisfaction are our top priorities</p>
              </div>
            </div>
            <div className="feature-item" data-aos="zoom-in" data-aos-delay="200">
              <img src="/img/icon3.png" alt="Innovation" />
              <div>
                <strong>Innovation</strong>
                <p>Creative solutions that make your event stand out</p>
              </div>
            </div>
            <div className="feature-item" data-aos="zoom-in" data-aos-delay="300">
              <img src="/img/icon4.png" alt="Expert Team" />
              <div>
                <strong>Expert Team</strong>
                <p>Skilled professionals with extensive industry experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-image" data-aos="fade-left">
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
