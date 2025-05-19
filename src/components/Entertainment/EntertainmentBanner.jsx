import React from 'react';
import '../../styles/Entertainment/EntertainmentBanner.css';

function EntertainmentBanner() {
  return (
    <div className="entertainment-banner">
      {/* Dark overlay */}
      <div className="overlay"></div>

      {/* Content container */}
      <div className="content">
        <h2 className="title">
          Your Entertainment Partner <br />
          <span className="highlight">with Expert Coordination</span>
        </h2>

        <p className="description">
          We specialize in seamless entertainment event management, from movie
          premieres to live concerts. Let us coordinate your perfect entertainment
          experience in Bangalore.
        </p>

        <div className="button-group">
          <button className="btn-primary">Plan Your Event</button>
          <button className="btn-secondary">Contact Coordination</button>
        </div>
      </div>
    </div>
  );
}

export default EntertainmentBanner;
