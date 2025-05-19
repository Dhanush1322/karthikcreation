import React, { useEffect } from 'react';
import '../styles/AboutDirectors.css'; // Your CSS file
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutDirectors() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="director-section" data-aos="fade-up">
      <div className="director-container">
        <div className="director-image" data-aos="fade-right" data-aos-delay="200">
          <img src="./img/profile.jpg" alt="Director" />
        </div>
        <div className="director-content" data-aos="fade-left" data-aos-delay="400">
          <p className="director-subtitle">DIRECTOR’S MESSAGE</p>
          <h2 className="director-name">Mr. Mahantesh RS</h2>
          <p className="director-text">
            As the Director of Karthik Creation’s & Top Speed, I’ve embarked on a journey from being a
            security guard to establishing an enterprise that has earned respect and admiration in the
            industry. The path has been challenging, but through networking, perseverance, and sincerity,
            I’ve carved out a space for myself in this competitive field.
          </p>
          <p className="director-text">
            I believe in delivering more than what is bargained for, packing tremendous value into every
            project we undertake. My background in design has always fueled my passion for experimentation
            and artistic ingenuity, which ultimately led to the founding of this enterprise. Today, I remain
            intimately involved with every project, ensuring we maintain our commitment to excellence.
          </p>
          <div className="about-social-icons flex" data-aos="zoom-in" data-aos-delay="600">
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutDirectors;
