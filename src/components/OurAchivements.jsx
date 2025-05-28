import React, { useEffect } from 'react';
import '../styles/OurAchivments.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const achievements = [
  {
    title: 'Recognized as Best Event Management Company',
    description: 'Recognized for excellence in corporate event management and innovative solutions.',
    image: '/img/cc.jpg',
    tag: '🏆 National Event Industry Awards',
    highlightClass: 'highlight-blue',
  },
  {
    title: 'Expos and Events catered by Us as a vendor to Our Clients Annually',
    description: 'State-of-the-art audio-visual equipment for events of any scale and complexity.',
    image: '/img/hch1.png',
    tag: '🎧 Professional-grade Equipment',
    highlightClass: '',
  },
  {
    title: 'Our Sucessful Services catered by Us',
    description: 'Managed a 3-day international tech conference with 2,500+ attendees and 50+ speakers.',
    image: '/img/hch2.png',
    tag: '✅ TechCorp International',
    highlightClass: 'highlight-green',
  },
];

function OurAchivements() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="our-achievements" data-aos="fade-up">
      <h2 className="section-heading" data-aos="fade-down">Our Achievements</h2>
      <p className="section-subheading" data-aos="fade-up" data-aos-delay="100">
        We have been working on related Planning, and Execution from attention to detail, proportions and scale,
        together with commonsense ensure the finished concept with the Right Solution and Judgment.
        We have Achieved in providing services at all of Places—Public and Private, Institutional, Commercial, 
        Residential, Schools, Hospitals, Larger mixed Communities, Institutions, Apartments, Houses, etc.
      </p>
      <div className="underline" data-aos="zoom-in" />

      <div className="achievement-cards">
        {achievements.map((item, index) => (
          <div
            className={`card ${item.highlightClass}`}
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150} // stagger animation
          >
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span className="tag">{item.tag}</span>
          </div>
        ))}
      </div>

      
    </div>
  );
}

export default OurAchivements;
