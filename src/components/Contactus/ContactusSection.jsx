import React, { useEffect, useState } from 'react';
import '../../styles/Contactus/ContactusSection.css';
import { Phone, Mail, User, MessageSquare, FileText, MapPin } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ContactusSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    mail: '',
    message: '',
  });

  const [status, setStatus] = useState(null);
  const [successMsg, setSuccessMsg] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA5YzZlMzE4NGRkOGQwNWQxMjg5YjgiLCJlbWFpbCI6Im11aGFtbWFkc2hvYWliMjgwM0BnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJhdXRoVG9rZW4iOnRydWUsImlhdCI6MTc0ODQzNDA4MiwiZXhwIjoxODM0ODM0MDgyfQ.olVsB5_gf6j4qSv8TitQfkoAQj8Qh6RGWzQuTFHqP84";

    try {
      const response = await fetch('https://karthikcreation.ap-1.evennode.com/api/user/addMessages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.message === "Message submitted successfully!" && result.guestMsg) {
        setStatus('success');
        setSuccessMsg(result.message);
        setFormData({ name: '', phone: '', mail: '', message: '' }); // reset form
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="contactus-wrapper">
      <div className="contact-left" data-aos="fade-right">
        <h2>Get Your Instant Free Quote Now</h2>
        <p className="subtitle">We’re here to assist you with any event needs.</p>
        <p className="description">
          Whether you need a quick quote or detailed event planning support, we're just a message away.
        </p>

        <div className="contact-details">
          <div className="contact-item">
            <div className="icon-circle"><Phone size={18} /></div>
            <span>+91 73530 00044 / +91 98455 85425/ +91 95380 05736</span>
          </div>
          <div className="contact-item">
            <div className="icon-circle"><Mail size={18} /></div>
            <span>marketing@karthikcreations.org / marketing@topspeedsec.org</span>
          </div>
          <div className="contact-item">
            <div className="icon-circle"><MapPin size={18} /></div>
            <span>KARTHIK CREATIONS<br />
              #897/3/7, NGEF Layout, 60FT Road,<br />
              Balgasangadhar Nagar, Mallathahalli,<br />
              Bangalore-560056.</span>
          </div>
        </div>
      </div>

      <div className="contact-right" data-aos="fade-left">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <User size={16} />
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <Phone size={16} />
            <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <Mail size={16} />
            <input type="email" name="mail" placeholder="Email Address" value={formData.mail} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <MessageSquare size={16} />
            <textarea name="message" placeholder="How can we help you? Feel free to get in touch!" rows="4" value={formData.message} onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="submit-btn">
            {status === 'submitting' ? 'Submitting...' : 'Submit'}
          </button>
          {status === 'success' && <p className="success-msg">{successMsg}</p>}
          {status === 'error' && <p className="error-msg">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </div>
  );
}

export default ContactusSection;
