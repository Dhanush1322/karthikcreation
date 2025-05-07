import React from 'react';
import '../styles/Legacy.css';

const milestones = [
  {
    year: '1905',
    title: 'Foundation',
    description: "Karthik Creation's was established by Mr. Mahanthesh RS with a vision to provide innovative design solutions to the local market.",
  },
  {
    year: '1925',
    title: 'First Major Project',
    description: 'Completed our first major commercial project, establishing our reputation for quality and attention to detail.',
  },
  {
    year: '1950',
    title: 'Expansion',
    description: 'Expanded our services to include comprehensive design solutions and launched our sister concern firm – "Top Speed".',
  },
  {
    year: '1985',
    title: 'Industry Recognition',
    description: 'Received our first industry award for excellence in design and customer satisfaction, marking our position as an industry leader.',
  },
  {
    year: '2005',
    title: 'Centennial Celebration',
    description: 'Celebrated 100 years of excellence with the launch of innovative new services and expansion into international markets.',
  },
  {
    year: 'Present',
    title: 'Industry Leader',
    description: 'Today, we stand as a certified company with top-quality services, maintaining the highest standards with a vision of becoming a Qualified Solutions Provider.',
  },
];

function Legacy() {
  return (
    <div className="legacy-container">
      <div className="legacy-header">
        <h4 className="legacy-subtitle">Our Journey</h4>
        <h2 className="legacy-title">
          A Legacy of Excellence Since <span>1905</span>
        </h2>
        <p className="legacy-description">
          Follow our remarkable journey from humble beginnings to becoming an industry leader in design and innovation.
        </p>
      </div>

      <div className="timelinne">
        {milestones.map((item, index) => (
          <div className="timelinne-item" key={index}>
            <div className="timelinne-circle"></div>
            <div className="timelinne-content">
              <span className="timelinne-year">{item.year}</span>
              <h3 className="timelinne-title">{item.title}</h3>
              <p className="timelinne-text">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Legacy;
