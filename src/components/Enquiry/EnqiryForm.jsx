import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../styles/enqiry/EnquiryForm.css';
import en1 from '/enquiry/en1.png';
import en2 from '/enquiry/en2.png';
import en3 from '/enquiry/en3.png';
import en4 from '/enquiry/en4.png';

function EnquiryForm() {
  const [referenceModel, setReferenceModel] = useState('');
  const [referenceList, setReferenceList] = useState([]);
  const [referenceId, setReferenceId] = useState('');
  const [formData, setFormData] = useState({
    full_name: '',
    optional_name: '',
    company_name: '',
    phone_no: '',
    optional_phone_no: '',
    email: '',
    optional_email: '',
    company_address: '',
    optional_address: '',
    schedule_date: '',
    booking_days: ''
  });

  // 🔑 Your token
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA5YzZlMzE4NGRkOGQwNWQxMjg5YjgiLCJlbWFpbCI6Im11aGFtbWFkc2hvYWliMjgwM0BnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJhdXRoVG9rZW4iOnRydWUsImlhdCI6MTc0ODQzNDA4MiwiZXhwIjoxODM0ODM0MDgyfQ.olVsB5_gf6j4qSv8TitQfkoAQj8Qh6RGWzQuTFHqP84';

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    if (referenceModel) {
      fetchReferenceData(referenceModel);
    }
  }, [referenceModel]);

  const fetchReferenceData = async (model) => {
    let url = '';
    if (model === 'artist') {
      url = 'http://karthikcreation.ap-1.evennode.com/api/admin/getAllArtist';
    } else if (model === 'service') {
      url = 'http://karthikcreation.ap-1.evennode.com/api/admin/getService';
    } else if (model === 'topspeedsecurityservice') {
      url = 'http://karthikcreation.ap-1.evennode.com/api/admin/getAllTopSpeedSecurityService';
    }

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.data.Status && Array.isArray(response.data.data)) {
        setReferenceList(response.data.data);
      } else {
        setReferenceList([]);
      }
    } catch (err) {
      console.error(`Failed to fetch ${model}:`, err);
      setReferenceList([]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      reference_model: referenceModel,
      reference_id: referenceId,
      ...formData
    };

    try {
      const res = await axios.post(
        'https://karthikcreation.ap-1.evennode.com/api/user/addUserEnquiry',
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (res.data.status) {
        alert('Enquiry submitted successfully!');
        setFormData({
          full_name: '',
          optional_name: '',
          company_name: '',
          phone_no: '',
          optional_phone_no: '',
          email: '',
          optional_email: '',
          company_address: '',
          optional_address: '',
          schedule_date: '',
          booking_days: ''
        });
        setReferenceModel('');
        setReferenceList([]);
        setReferenceId('');
      } else {
        alert('Failed to submit enquiry');
      }
    } catch (err) {
      console.error('Submit error:', err);
      alert('An error occurred while submitting the form');
    }
  };

  return (
    <div className="form-container" data-aos="fade-up">
      <div className="image-wrapper" data-aos="fade-right">
        <img src={en1} alt="" className="bg-img img1" />
        <img src={en2} alt="" className="bg-img img2" />
        <img src={en3} alt="" className="bg-img img3" />
        <img src={en4} alt="" className="bg-img img4" />
      </div>

      <form className="enquiry-form" data-aos="zoom-in" onSubmit={handleSubmit}>
        <h2>Client Enquiry Form</h2>
        <p>Please fill out the form below and we’ll get back to you shortly.</p>
        <hr />

        <label>Reference Model</label>
        <select value={referenceModel} onChange={e => setReferenceModel(e.target.value)} required>
          <option value="">Select reference model</option>
          <option value="artist">Artist</option>
          <option value="service">Service</option>
          <option value="topspeedsecurityservice">Top Speed Security Service</option>
        </select>

        {referenceList.length > 0 && (
          <>
            <label>Select {referenceModel} Heading</label>
            <select
              value={referenceId}
              onChange={e => setReferenceId(e.target.value)}
              required
            >
              <option value="">Select</option>
              {referenceList.map(item => (
                <option key={item._id} value={item._id}>
                  {item.heading}
                </option>
              ))}
            </select>
          </>
        )}

        <div className="input-row">
          <div>
            <label>Full Name</label>
            <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} required placeholder="Enter your full name" />
          </div>
          <div>
            <label>Company Name</label>
            <input type="text" name="company_name" value={formData.company_name} onChange={handleChange} placeholder="Enter your company name" />
          </div>
        </div>

        <div className="input-row">
          <div>
            <label>Phone Number</label>
            <input type="tel" name="phone_no" value={formData.phone_no} onChange={handleChange} required placeholder="Enter your phone number" />
          </div>
          <div>
            <label>Optional Name</label>
            <input type="text" name="optional_name" value={formData.optional_name} onChange={handleChange} placeholder="Enter your optional name" />
          </div>
        </div>

        <div className="input-row">
          <div>
            <label>Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter your email address" />
          </div>
          <div>
            <label>Optional Mobile Number</label>
            <input type="tel" name="optional_phone_no" value={formData.optional_phone_no} onChange={handleChange} placeholder="Enter your optional mobile number" />
          </div>
        </div>

        <div className="input-row">
          <div>
            <label>Company Address</label>
            <input type="text" name="company_address" value={formData.company_address} onChange={handleChange} placeholder="Company address" />
          </div>
          <div>
            <label>Optional Email ID</label>
            <input type="email" name="optional_email" value={formData.optional_email} onChange={handleChange} placeholder="Enter your optional email id" />
          </div>
        </div>

        <div className="input-row">
          <div>
            <label>Date of the Event</label>
            <input type="date" name="schedule_date" value={formData.schedule_date} onChange={handleChange} placeholder="Enter your event date" />
          </div>
          <div>
            <label>Optional Address</label>
            <input type="text" name="optional_address" value={formData.optional_address} onChange={handleChange} placeholder="Enter your optional address" />
          </div>
        </div>

        <div>
          <label>Booking Days</label>
          <input type="number" name="booking_days" value={formData.booking_days} onChange={handleChange} placeholder="Number of booking days" />
        </div>

        <div className="checkbox-row">
          <input type="checkbox" required />
          <span>I agree to the terms and conditions and privacy policy</span>
        </div>

        <button type="submit">Submit Enquiry</button>
      </form>
    </div>
  );
}

export default EnquiryForm;
