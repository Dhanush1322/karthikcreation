import React from 'react';
import '../../styles/Entertainment/EntertainmentBanner.css';
import { Link } from 'react-router-dom';
function EntertainmentBanner() {
  return (
    <div className="entertainment-banner">
      {/* Dark overlay */}
      <div className="overlay"></div>

      {/* Content container */}
      <div className="content">
        <h2 className="title">
          Entertainment with Expert
          <br />
          <span className="highlight">Coordination</span>
        </h2>

        <p className="description">
          We specialize in seamless entertainment event management, from movie
          premieres to live concerts. Let us coordinate your perfect entertainment
          experience in Bangalore.
        </p>

        <div className="button-group">
          <Link to='/Enqiry'> <button className="btn-primary">Enquiry</button></Link>
       
          <Link to='/ContactUs'> <button className="btn-secondary">Contact Us</button></Link>
         
        </div>
      </div>
    </div>
  );
}

export default EntertainmentBanner;
