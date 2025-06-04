import React, { useEffect } from 'react';
import '../styles/Legacy.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const milestones = [
  {
    year: '2005',
    title: 'Foundation',
    description: "Karthik Creation's was established by Mr. Mahantesh RS with a vision to provide innovative design solutions to the local market.",
  },
  {
    year: '2005',
    title: 'First Major Project',
    description: 'Completed our first major commercial project, establishing our reputation for quality and attention to detail.',
  },
  {
    year: '2005',
    title: 'Expansion',
    description: 'Expanded our services to include comprehensive design solutions and launched our sister concern firm – "Top Speed".',
  },
  {
    year: '2010',
    title: 'Industry Recognition',
    description: 'Received our first industry award for excellence in design and customer satisfaction, marking our position as an industry leader.',
  },
  {
    year: 'Present',
    title: 'Industry Leader',
    description: 'Today, we stand as a certified company with top-quality services, maintaining the highest standards with a vision of becoming a Qualified Solutions Provider.',
  },
];

function Legacy() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="legacy-container">
      <div className="legacy-header" data-aos="fade-down">
        <h4 className="legacy-subtitle">Our Journey</h4>
        <h2 className="legacy-title">
        A Legacy of Excellence Since <span> 2005</span>
        </h2>
        <p className="legacy-description">
      Follow our remarkable journey from humble beginnings to becoming an industry leader in 
                                                  design and innovation. </p>
      </div>

      <div className="timelinne">
        {milestones.map((item, index) => (
          <div
            className="timelinne-item"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
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
