import React from 'react';
import '../styles/SpeakforthemselfeAbout.css';
import { FaUsers, FaClipboardList, FaSmile, FaMedal } from 'react-icons/fa';

function SpeakforthemselfeAbout() {
  const stats = [
    { icon: <FaUsers />, number: '0', label: 'Years of Excellence' },
    { icon: <FaClipboardList />, number: '2500', label: 'Projects Completed' },
    { icon: <FaSmile />, number: '1800', label: 'Satisfied Clients' },
    { icon: <FaMedal />, number: '0', label: 'Industry Awards' }
  ];

  return (
    <div className="stats-section">
      <div className="stats-header">
        <p className="subheading">Our Achievements</p>
        <h2>The Numbers Speak for Themselves</h2>
        <p className="description">
          Over our long history, we've achieved remarkable milestones that demonstrate our
          commitment to excellence.
        </p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <h3>{stat.number}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpeakforthemselfeAbout;
