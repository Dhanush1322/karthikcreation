import '../styles/Nav.css';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const logoSrc = location.pathname === '/TopSpeed'
    ? './speed/tlogo.png'
    : './img/logo.png';

  // Function to handle link click and close menu
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

      {/* Links Section */}
      <div className={`links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={handleLinkClick}>Home</Link>
        <Link to="/About" onClick={handleLinkClick}>About</Link>
        <Link to="/Product" onClick={handleLinkClick}>Product</Link>
        <Link to="/Entertainment" onClick={handleLinkClick}>Entertainment</Link>
        <Link to="/TopSpeed" onClick={handleLinkClick}>Top Speed Security Service</Link>
        <Link to="/Enqiry" onClick={handleLinkClick}>Client Enquiry Form</Link>
        <Link to="/ContactUs" onClick={handleLinkClick}>Contact Us</Link>
      </div>
    </div>
  );
}

export default Nav;
