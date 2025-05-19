import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../styles/enqiry/EnquiryForm.css';
import en1 from '/enquiry/en1.png';
import en2 from '/enquiry/en2.png';
import en3 from '/enquiry/en3.png';
import en4 from '/enquiry/en4.png';

function EnquiryForm() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="form-container" data-aos="fade-up">
      <div className="image-wrapper" data-aos="fade-right">
        <img src={en1} alt="" className="bg-img img1" />
        <img src={en2} alt="" className="bg-img img2" />
        <img src={en3} alt="" className="bg-img img3" />
        <img src={en4} alt="" className="bg-img img4" />
      </div>

      <form className="enquiry-form" data-aos="zoom-in">
        <h2>Client Enquiry Form</h2>
        <p>Please fill out the form below and we’ll get back to you shortly.</p>
        <hr />

        <label>Enquiry Type</label>
        <select>
          <option>Select Enquiry type</option>
          <option>General</option>
          <option>Support</option>
          <option>Sales</option>
        </select>

        <div className="input-row">
          <div>
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" />
          </div>
          <div>
            <label>Company Name</label>
            <input type="text" placeholder="Enter your company name" />
          </div>
        </div>

        <div className="input-row">
          <div>
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email address" />
          </div>
          <div>
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter your phone number" />
          </div>
        </div>

        <label>Message</label>
        <textarea placeholder="Please provide additional details about your enquiry"></textarea>

        <div className="checkbox-row">
          <input type="checkbox" />
          <span>I agree to the terms and conditions and privacy policy</span>
        </div>

        <button type="submit">Submit Enquiry</button>
      </form>
    </div>
  );
}

export default EnquiryForm;
