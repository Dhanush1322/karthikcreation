import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/ProductSecurity.css';
import { FaCheckCircle } from 'react-icons/fa';

function ProductSecurity() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    {
      title: "Security Scanner",
      image: "/Product/ps1.jpg",
      features: [
        "to check carry",
        "Scan checkpoints or trigger zones that activate scanning or alarms.",
        "Each “point” is a node monitored by the central scanner."
      ]
    },
    {
      title: "Event Furniture",
      image: "/Product/ps2.jpg",
      features: [
        "Corporate Event Chairs",
        "Exhibition Chairs",
        "Cushion Sofas",
        "Foldable Beds"
      ]
    },
    {
      title: "Security Equipment Package",
      image: "/Product/ps3.jpg",
      features: [
        "Male & Female Security Guards",
        "Bouncers (Men/Women)",
        "CCTV Cameras",
        "Baggage Scanners"
      ]
    },
    {
      title: "Event Staff & Services",
      image: "/Product/ps4.jpg",
      features: [
        "Hostess - Men / Women",
        "Housekeeping Staff",
        "Ceremonial Dressed (Maharaja)",
        "Cue Managers"
      ]
    },
    {
      title: "Event Support Equipment",
      image: "/Product/ps5.jpg",
      features: [
        "LED Mobile Chargers",
        "Megaphones",
        "Cartoon Characters",
        "Barricades & Bollards"
      ]
    },
    {
      title: "Cooling Solutions",
      image: "/Product/ps6.jpg",
      features: [
        "A/C Units",
        "A/C Towers",
        "Coolers",
        "Ventilation Systems"
      ]
    }
  ];

  return (
    <div className="security-section" data-aos="fade-up">
      <h2 data-aos="fade-down">KARTHIK CREATIONS & TOP SPEED SECURITY SERVICES</h2>
      <p data-aos="fade-down" data-aos-delay="100">
        End-to-End Event Services & Equipment Solutions - Your Complete Event Management Partner
      </p>

      <div className="security-grid">
        {services.map((service, index) => (
          <div className="security-card" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
            <div className="security-image">
              <img src={service.image} alt={service.title} />
              <span className="badge">Available</span>
            </div>
            <div className="security-info">
              <h4>{service.title}</h4>
              <ul>
                {service.features.map((feature, i) => (
                  <li key={i}><FaCheckCircle className="check-icon" /> {feature}</li>
                ))}
              </ul>
              <button className="book-btn">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSecurity;
