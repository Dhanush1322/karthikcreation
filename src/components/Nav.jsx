import '../styles/Nav.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      {/* Logo Section */}
      <div className="logo">
        <img src="./img/logo.png" alt="logo" />
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
        <Link to="/login">Product</Link>
        <Link to="/register">Entertainment</Link>
        <Link to="/package">Package</Link>
        <Link to="/operation-costing">Operation Costing</Link>
        <Link to="/client-enquiry">Client Enquiry Form</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </div>
  );
}

export default Nav;
