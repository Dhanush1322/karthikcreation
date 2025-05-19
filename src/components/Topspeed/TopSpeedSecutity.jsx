import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './TopSpeedSecutity.css';

const services = [
  {
    title: 'Security scanner',
    image: '/speed/ss4.png',
    badge: 'Available',
    features: [
      '✅ Door Frame Metal Detector',
      '✅ Hand Held Metal Detector',
      '✅ Walkie Talkie',
    ],
  },
  {
    title: 'Security Equipment',
    image: '/speed/ss3.png',
    badge: 'Available',
    features: [
      '✅ CCTV Cameras',
      '✅ Baggage Scanners',
      '✅ Barricades',
    ],
  },
  {
    title: 'Emergency Services',
    image: '/speed/ss2.png',
    badge: 'Available',
    features: [
      '✅ Ambulance Service',
      '✅ Normal Ambulance + Nurse',
      '✅ ICU on Wheels',
    ],
  },
  {
    title: 'Event Staff & Services',
    image: '/speed/ss5.png',
    badge: 'Available',
    features: [
      '✅ Male & Female Security Guards',
      '✅ Hostess - Men / Women',
      '✅ Housekeeping Staff',
      '✅ Ceremonial Dressed (Maharaja)',
      '✅ Protocol - Safari Men',
      '✅ Bouncers - Men / Women',
    ],
  },
  {
    title: 'Fire Safety Gear',
    image: '/speed/ss1.png',
    badge: 'Available',
    features: [
      '✅ Fire Extinguisher',
      '✅ Fire Buckets',
    ],
  },
  {
    title: 'Traffic Control Pass',
    image: '/speed/ss6.png',
    badge: 'Traffic Control Pass',
    features: [
      '✅ Traffic Batons',
      '✅ Under Car Checking Mirror',
      '✅ Megaphone',
      '✅ Tow Vehicle',
      '✅ Traffic Cones',
    ],
  },
];

function TopSpeedSecutity() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="top-speed-container" data-aos="fade-up">
      <h2 className="main-heading" data-aos="fade-right">TOP SPEED SECURITY SERVICES</h2>
      <p className="tp-description" data-aos="fade-left">
        <u>
          Services provided: all of Event’s & Expo’s industry & Corporates, Places-Public and Private,
          Institutional, Commercial, Residential, Schools, Hospitals, Larger mixed Communities,
          Institutions, Apartments, Houses, etc.
        </u>
      </p>

      <div className="card-wrapper">
        {services.map((service, index) => (
          <div className="service-card" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
            <div className="card-image">
              <img src={service.image} alt={service.title} />
              <span className="badge">{service.badge}</span>
            </div>
            <h3>{service.title}</h3>
            <ul>
              {service.features.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div className="card-footer">
              <button className="book-btn">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopSpeedSecutity;
