import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import '../styles/Counts.css';

function Counts() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
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
        <motion.div
          className="count-box"
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <div className="count-number">
            {inView && <CountUp end={stat.number} duration={2} />}
          </div>
          <div className="count-label">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}

export default Counts;
