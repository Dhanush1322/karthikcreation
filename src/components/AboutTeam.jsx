import React from 'react';
import '../styles/AboutTeam.css'; // Import the external CSS

const teamMembers = [
  {
    name: 'Sophia Rodriguez',
    title: 'Founder & CEO',
    description:
      "With over 20 years of experience in the event industry, Sophia founded Karthik Creations with a vision to redefine event experiences. Her leadership and innovative approach have been instrumental in the company's growth.",
    image: './gallery/pp1.png',
    linkedin: '#',
  },
  {
    name: 'Michael Chen',
    title: 'Chief Operations Officer',
    description:
      'Michael’s innovative vision and artistic talent have redefined the creative approach. His background in design and production helps create immersive event experiences that leave lasting impressions.',
      image: './gallery/pp2.png',
    linkedin: '#',
  },
  {
    name: 'Rajesh Karthik',
    title: 'Founder & CEO',
    description:
      "With over 20 years of experience in the event industry, Rajesh founded Karthik Creations with a vision to redefine event experiences. His leadership and innovative approach have been instrumental in the company's growth.",
      image: './gallery/pp3.png',
    linkedin: '#',
  },
  {
    name: 'Rajesh Karthik',
    title: 'Founder & CEO',
    description:
      "With over 20 years of experience in the event industry, Rajesh founded Karthik Creations with a vision to redefine event experiences. His leadership and innovative approach have been instrumental in the company's growth.",
      image: './gallery/pp4.png',
    linkedin: '#',
  },
  {
    name: 'Rajesh Karthik',
    title: 'Founder & CEO',
    description:
      "With over 20 years of experience in the event industry, Rajesh founded Karthik Creations with a vision to redefine event experiences. His leadership and innovative approach have been instrumental in the company's growth.",
      image: './gallery/pp5.png',
    linkedin: '#',
  },
  {
    name: 'Rajesh Karthik',
    title: 'Founder & CEO',
    description:
      "With over 20 years of experience in the event industry, Rajesh founded Karthik Creations with a vision to redefine event experiences. His leadership and innovative approach have been instrumental in the company's growth.",
      image: './gallery/pp6.png',
    linkedin: '#',
  },
];

function AboutTeam() {
  return (
    <div className="about-team">
      <h2 className="about-team-title">Meet Our Leadership Team</h2>
      <p className="about-team-subtitle">
        The talented professionals behind our exceptional event experiences
      </p>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="team-image" />
            <div className="team-content">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-title">{member.title}</p>
              <p className="team-description">{member.description}</p>
              <a href={member.linkedin} className="team-linkedin" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutTeam;
