import React from 'react';
import '../styles/Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <img src="./img/p.png" alt="Karthik Logo" className="footer-logo" />
          <p>
            Creating extraordinary event experiences with meticulous planning, premium
            equipment, and flawless execution since 2010.
          </p>
          <div className="footer-social">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaTwitter />
          </div>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Packages</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Our Services</h4>
          <ul>
            <li>Corporate Events</li>
            <li>Wedding Management</li>
            <li>Equipment Rentals</li>
            <li>Artist Coordination</li>
            <li>Security Solutions</li>
            <li>Exhibition Management</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>
            KARTHIK CREATIONS<br />
            # 897/3/7, NGEF Layout, 60FT Road,<br />
            Balgasangadhar Nagar, Mallathahalli,<br />
            Bangalore-560056.
          </p>
          <p>+91 73530 00044 / 98455 85425</p>
          <p>karthikcreations.2011@gmail.com/
           topspeedsec@2017@gmail.com</p>
          <p>Mon-Fri: 9AM-6PM</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Privacy &nbsp; | &nbsp; Policy Terms of Service &nbsp; | &nbsp; Sitemap</p>
      </div>
    </footer>
  );
}

export default Footer;
