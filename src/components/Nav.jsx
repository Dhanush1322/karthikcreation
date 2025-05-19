import '../styles/Nav.css';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get the current route path

  // Change logo based on current route
  const logoSrc = location.pathname === '/TopSpeed'
    ? './speed/tlogo.png' // logo for Top Speed page
    : './img/logo.png';         // default logo

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
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Product">Product</Link>
        <Link to="/Entertainment">Entertainment</Link>
        <Link to="/TopSpeed">Top Speed Security Service</Link>
        <Link to="/Enqiry">Client Enquiry Form</Link>
        <Link to="/ContactUs">Contact Us</Link>
      </div>
    </div>
  );
}

export default Nav;
