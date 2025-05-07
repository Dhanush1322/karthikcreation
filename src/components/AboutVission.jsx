import React from 'react';
import '../styles/AboutVission.css';
import { FaEye, FaFlagCheckered } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';

function AboutVission() {
  return (
    <div className="vision-mission-section">
      <div className="card vision-card">
        <div className="card-icon">
          <FaEye />
        </div>
        <h3>Our Vision</h3>
        <p>
          To be the most trusted and innovative design solutions provider, creating spaces that
          inspire and transform lives while setting new standards of excellence in the industry.
        </p>
        <ul>
          <li><FaCheckCircle /> Leading innovation in design solutions</li>
          <li><FaCheckCircle /> Creating transformative spaces</li>
          <li><FaCheckCircle /> Setting new industry standards</li>
        </ul>
      </div>

      <div className="card mission-card">
        <div className="card-icon">
          <FaFlagCheckered />
        </div>
        <h3>Our Mission</h3>
        <p>
          To deliver exceptional design solutions that exceed client expectations by combining
          creativity, technical expertise, and unwavering commitment to quality in every project we undertake.
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
