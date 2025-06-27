// import '../styles/Nav.css';
// import { Link, useLocation } from 'react-router-dom';
// import { useState } from 'react';

// function Nav() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();

//   const logoSrc = location.pathname === '/TopSpeed'
//     ? './speed/tlogo.png'
//     : './img/logo.png';

//   // Function to handle link click and close menu
//   const handleLinkClick = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <div className="navbar">
//       {/* Logo Section */}
//       <div className="logo">
//         <img src={logoSrc} alt="logo" style={{ width: '70px' }} />
//       </div>

//       {/* Hamburger Icon */}
//       <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//         <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div>
//       </div>

//       <div className={`links ${menuOpen ? 'active' : ''}`}>
//         <a href="/home" onClick={handleLinkClick}>Home</a>
//         <a href="/About" onClick={handleLinkClick}>About</a>
//         <a href="/Product" onClick={handleLinkClick}>Product</a>
//         <a href="/Entertainment" onClick={handleLinkClick}>Entertainment</a>
//         <a href="/TopSpeed" onClick={handleLinkClick}>Top Speed Security Service</a>
//         <a href="/Enqiry" onClick={handleLinkClick}>Client Enquiry Form</a>
//         <a href="/ContactUs" onClick={handleLinkClick}>Contact Us</a>
//       </div>

//     </div>
//   );
// }

// export default Nav;
import '../styles/Nav.css';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const logoSrc = location.pathname === '/TopSpeed'
    ? './speed/tlogo.png'
    : './img/logo.png';

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar">
      {/* Logo Section */}
      <div className="logo">
        <img src={logoSrc} alt="logo" style={{ width: '70px' }} />
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Links + Socials */}
      <div className={`links ${menuOpen ? 'active' : ''}`}>
        <a href="/home" onClick={handleLinkClick}>Home</a>
        <a href="/About" onClick={handleLinkClick}>About</a>
        <a href="/Product" onClick={handleLinkClick}>Product</a>
        <a href="/Entertainment" onClick={handleLinkClick}>Entertainment</a>
        <a href="/TopSpeed" onClick={handleLinkClick}>Top Speed Security Service</a>
        <a href="/Enqiry" onClick={handleLinkClick}>Client Enquiry Form</a>
        <a href="/ContactUs" onClick={handleLinkClick}>Contact Us</a>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
