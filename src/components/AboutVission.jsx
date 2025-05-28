import React, { useEffect } from 'react';
import '../styles/AboutVission.css';
import { FaEye, FaFlagCheckered, FaCheckCircle } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutVission() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="vision-mission-section">
      <div className="card vision-card" data-aos="fade-left">
        <div className="card-icon">
          <FaEye />
        </div>
        <h3>Our Vision</h3>
        <p>
         Growth & Success with comes through Strength of all the team 
members of the firm to be Dedicated,  Intelligent, Loyal, Smart working, 
and United..
        </p>
        <ul>
          <li><FaCheckCircle /> Leading innovation in design solutions</li>
          <li><FaCheckCircle />Creating transformative spaces</li>
          <li><FaCheckCircle /> Setting new industry standards</li>
        </ul>
      </div>

      <div className="card mission-card" data-aos="fade-right">
        <div className="card-icon">
          <FaFlagCheckered />
        </div>
        <h3>Our Mission</h3>
        <p>
          Be a reliable contributor for an environment that encourages Professional
 Excellence, develop and  maintain long-term Business Relationship
 with our Customers, as services providers in the field of  
Events & Expo’s – ( B2B & B2C ), Corporate Events, Conferences, 
Weddings, Govt.Events & Functions,  Weddings & Entertainment.
        </p>
        <ul>
          <li><FaCheckCircle /> Exceeding client expectations</li>
          <li><FaCheckCircle /> Balancing creativity with technical expertise</li>
          <li><FaCheckCircle /> Maintaining unwavering quality commitment</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutVission;
