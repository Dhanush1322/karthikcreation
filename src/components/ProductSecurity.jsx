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
      title: "Sofas & Chairs",
      image: "/Product/1.png",
      features: [
        "to Cushion Chairs ( With Cover &  Bow ) carry",
        "Tiffany Chairs",
        "V.VIP - Sofas Sets",
         "V.VIP - Chairs",
          "Wedding Sofas"

      ]
    },
    {
      title: "Sound & Lighting",
      image: "/Product/2.png",
      features: [
        "podiums",
        "Professional Lighting and sound",
        "Microphones",
        "Stage Equipment"
      ]
    },
    {
      title: "Cooling Solutions",
      image: "/Product/4.png",
      features: [
        "A/C Units",
        "A/C Towers",
        "Coolers",
        "Ventilation Systems"
      ]
    },
    {
      title: "Event Support Equipment",
      image: "/Product/6.png",
      features: [
        "Stage step all size",
        
      ]
    },
    {
      title: "Maxima Stalls",
      image: "/Product/3.png",
      features: [
        "German Pagoda ( All Size )",
        "Indian Pagodas ( All Size )",
        "Barricades",
        "Mojo Barricades"
      ]
    },
    {
      title: "Event Furniture",
      image: "/Product/5.png",
      features: [
        "Carpets ( All Colors  & Designs)",
        "Wooden Tables ( 6 x 2 )",
        "Scaffoldings",
        "Carpets ( All Colors  & Designs)",
        "Truss"
      ]
    }
  ];

  return (
    <div className="security-section" data-aos="fade-up">
      <h2 data-aos="fade-down">KARTHIK CREATIONS SERVICES</h2>
      <p data-aos="fade-down" data-aos-delay="100">
          End-to-End Event Services & Equipment Solutions
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
