import React from 'react';
import '../styles/OurCore.css';
import { FaAward, FaHeart, FaLightbulb, FaUsers, FaUserLock, FaLeaf } from 'react-icons/fa';

function OurCore() {
  const coreValues = [
    {
      icon: <FaAward />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from the smallest details to the grandest designs, ensuring the highest quality in all our deliverables.'
    },
    {
      icon: <FaHeart />,
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical standards, building trust with our clients, partners, and team members.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'We embrace creativity and forward-thinking, constantly seeking new solutions and approaches to deliver exceptional results.'
    },
    {
      icon: <FaUsers />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork, fostering an environment where diverse perspectives come together to create exceptional outcomes.'
    },
    {
      icon: <FaUserLock />,
      title: 'Client-Centric',
      description: 'We put our clients at the center of everything we do, listening carefully to their needs and exceeding their expectations.'
    },
    {
      icon: <FaLeaf />,
      title: 'Sustainability',
      description: 'We are committed to environmentally responsible practices, creating designs that are both beautiful and sustainable for future generations.'
    }
  ];

  return (
    <div className="core-values-section">
      <div className="core-header">
        <p className="subheading">What We Stand For</p>
        <h2>Our Core Values</h2>
        <p className="description">
          These principles guide our decisions, shape our culture, and define how we interact
          with our clients and each other.
        </p>
      </div>

      <div className="values-grid">
        {coreValues.map((value, index) => (
          <div key={index} className="value-card">
            <div className="icon">{value.icon}</div>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurCore;
