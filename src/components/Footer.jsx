import React from 'react';
import '../styles/Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <img src="./img/logo.jpeg" alt="Karthik Logo" className="footer-logo" style={{width:'200px', borderRadius:'20px;'}}/>
          <p>
            Creating extraordinary event experiences with meticulous planning, premium
            equipment, and flawless execution since 2005.
          </p>
        <div className="footer-social">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <FaFacebookF />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    <FaLinkedinIn />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <FaXTwitter />
  </a>
</div>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
         <Link to='/'> <li>Home</li></Link>
           
             <Link to='/About'> <li>About Us</li></Link>
           
             <Link to='/Product'>  <li>Services</li></Link>
          
           <Link to='/Enqiry'> <li>Enquiry</li></Link>
           
             <Link to='/ContactUs'>  <li>Contact Us</li></Link>
          
          </ul>
        </div>

        <div className="footer-column">
          <h4>Our Services</h4>
          <ul>
             <Link to='/Entertainment'><li>Corporate Events</li></Link>
            
             <Link to=''> <li>Wedding Management</li></Link>
           
             <Link to=''>  <li>Equipment Rentals</li></Link>
          
             <Link to=''> <li>Artist Coordination</li></Link>
           
             <Link to=''> <li>Security Solutions</li></Link>
           
             <Link to=''><li>Exhibition Management</li></Link>
            
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
          <p>+91 73530 00044 / +91 98455 85425 <br />+91 95380 05736</p>
          <p>marketing@karthikcreations.org / marketing@topspeedsec.org</p>
          <p>Mon - Sun : 9AM - 6PM</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Privacy &nbsp; | &nbsp; Policy Terms of Service &nbsp; | &nbsp; Sitemap</p>
      </div>
    </footer>
  );
}

export default Footer;
