import React from 'react';
import '../styles/OurEventProcess.css';

const processSteps = [
  {
    title: 'Initial Consultation',
    description:
      'We begin by understanding your vision, requirements, and objectives for the event. This helps us align our planning with your expectations.',
  },
  {
    title: 'Proposal & Planning',
    description:
      'We create a detailed proposal including venue suggestions, theme concepts, budget estimates, and timelines. Once approved, we develop a comprehensive event plan.',
  },
  {
    title: 'Coordination & Preparation',
    description:
      'We handle all logistics, vendor coordination, equipment setup, and rehearsals. Regular updates keep you informed throughout the preparation phase.',
  },
  {
    title: 'Event Execution',
    description:
      'On the event day, our team manages all aspects of the execution, ensuring everything runs smoothly while you focus on enjoying the event.',
  },
  {
    title: 'Post-Event Analysis',
    description:
      'We conduct a thorough evaluation of the event, gather feedback, and provide a detailed report with insight for future improvements.',
  },
];

function OurEventProcess() {
  return (
    <div className="event-process-container">
      <h2 className="event-process-title">Our Event Planning Process</h2>
      <p className="event-process-subtitle">
        A systematic approach to delivering exceptional events
      </p>
      
      <div className="timeline">
        {processSteps.map((step, index) => (
          <div className="timeline-row" key={index}>
            <div className={`timeline-card ${index % 2 === 0 ? 'left' : 'right'}`}>
              <img src="./img/pp1.png" alt="ddd" />
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
            <div className="timeline-dot" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurEventProcess;
