import React, { useEffect } from 'react';
import '../styles/AboutDirectors.css'; // Your CSS file
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaSquareXTwitter } from "react-icons/fa6";
function AboutDirectors() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="director-section" data-aos="fade-up">
      <div className="director-container">
        <div className="director-image" data-aos="fade-right" data-aos-delay="200">
          <img src="./img/profile.jpg" alt="Director" />
        </div>
        <div className="director-content" data-aos="fade-left" data-aos-delay="400">
          <p className="director-subtitle">DIRECTOR’S MESSAGE</p>
          <h2 className="director-name">Mr. Mahantesh RS</h2>
          <p className="director-text">
            As the Director of Karthik Creation's & Top Speed, I've embarked on a journey from being a
            security guard to establishing an enterprise that has earned respect and admiration in the industry. The path has been challenging, but through networking, perseverance, and sincerity,
            I've carved out a space for myself in this competitive field.

          </p>
          <p>
            I believe in delivering more than what is bargained for, packing tremendous value into every project we undertake. My background in design has always fueled my passion for experimentation and
            artistic ingenuity, which ultimately led to the founding of this enterprise. Today, I remain intimately involved with every project, ensuring we maintain our commitment to excellence.

          </p>
          <h4 style={{ color: 'black', fontWeight: 'bold' }}>
            Company Profile: KARTHIK CREATIONS
          </h4>

          <p className="director-text">
            Karthik Creations, is an event managements company.
            We are the Event organizers and Suppliers
            of equipment’s for various Events & Expo’s conducted PAN INDIA .
          </p>
          <p>Their sister concern “TOP SPEED SECURITIES” is the pioneer for security services since 20 Years and
            are associated for leading Event’s & Expo’s industry & Corporate</p>
          <p>Under one roof projects are executed and delivered to deserting clients. What is believed of something
            to build the trust with us, which is appreciated.</p>
          <p>Our In-house team with professionals as Site Managers, & Back Hand Team Members who are
            well-versed in handling the scope of projects, ensuring quality execution while adhering to prescribed
            timelines and budgets.Our Firm does not compromise related to quality and steadiness delivered to
            the respected clients</p>

          <div className="about-social-icons flex" data-aos="zoom-in" data-aos-delay="600">
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#" aria-label="Twitter"><FaSquareXTwitter /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutDirectors;
