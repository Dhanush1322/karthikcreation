import React, { useState } from 'react';
import '../styles/Nav.css';

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
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/login">Product</a>
        <a href="/register">Entertainment</a>
        <a href="/register">Package</a>
        <a href="/register">Entertainment</a>
        <a href="/register">Operation Costing</a>
        <a href="/contact">Client Enquiry Form</a>
        <a href="/contact">Contact Us</a>
      </div>
    </div>
  );
}

export default Nav;
