import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './EntertainmentSolutions.css';

const entertainmentItems = [
  {
    title: "Play Arena & Bounces",
    description: "Fun and safe play equipment for children",
    image: "./entertainment/ee2.png",
  },
  {
    title: "Cartoon Characters & Performers",
    description: "Professional live entertainer and character performers for childrens",
    image: "./entertainment/ee1.png",
  },
  {
    title: "Antique Two Or Display",
    description: "Showcase vintage scooters and motorcycles – the older and shinier, the better!",
    image: "./entertainment/ee3.png",
  },
  {
    title: "Artificially Created outdoor flowing water fountains",
    description: "Setup for events & Weddings",
    image: "./entertainment/ee3.png",
  },
  {
    title: "Selfies Booth",
    description: "Step into the booth and snap selfies with cool backgrounds, funky lights, and themed props.",
    image: "./entertainment/ee5.png",
  },
  {
    title: "Representing Kannada State",
    description: "Professional performers for cultural and political and many more etc..",
    image: "./entertainment/dan.jpg",
  },
];

function EntertainmentSolutions() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="entertainment-section">
      <h2>Entertainment Solutions</h2>
      <p>Access our extensive network of talented performers and entertainers for your event.</p>
      <div className="entertainment-grid">
        {entertainmentItems.map((item, index) => (
          <div
            className="entertainment-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img src={item.image} alt={item.title} className="entertainment-image" />
            <div className="entertainment-info">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EntertainmentSolutions;
