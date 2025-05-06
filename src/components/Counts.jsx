import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import '../styles/Counts.css';

function Counts() {
  const [ref, inView] = useInView({
    triggerOnce: true, // only animate once
    threshold: 0.3,     // adjust as needed
  });

  const stats = [
    { number: 500, label: 'Events Managed' },
    { number: 98, label: 'Client satisfaction %' },
    { number: 50, label: 'Corporate Partners' },
    { number: 15, label: 'Years of Excellence' },
  ];

  return (
    <div className="counts-container" ref={ref}>
      {stats.map((stat, index) => (
        <div className="count-box" key={index}>
          <div className="count-number">
            {inView && <CountUp end={stat.number} duration={2} />}
          </div>
          <div className="count-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

export default Counts;
