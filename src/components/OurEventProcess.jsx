import React, { useEffect } from 'react';
import '../styles/OurEventProcess.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="event-process-container" data-aos="fade-up">
      <h2 className="event-process-title" data-aos="fade-down">Our Event Planning Process</h2>
      <p className="event-process-subtitle" data-aos="fade-up" data-aos-delay="100">
        A systematic approach to delivering exceptional events
      </p>

      <div className="timeline">
        {processSteps.map((step, index) => (
          <div className="timeline-row" key={index}>
            <div
              className={`timeline-card ${index % 2 === 0 ? 'left' : 'right'}`}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={index * 150}
            >
              <img src="./img/pp1.png" alt="Process step" />
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
            <div
              className="timeline-dot"
              data-aos="zoom-in"
              data-aos-delay={index * 150 + 100}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurEventProcess;
