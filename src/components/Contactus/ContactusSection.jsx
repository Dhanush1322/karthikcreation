import React, { useEffect } from 'react';
import '../../styles/Contactus/ContactusSection.css';
import { Phone, Mail, User, MessageSquare, FileText, MapPin } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ContactusSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

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
            <span>+91 98765 43210</span>
          </div>
          <div className="contact-item">
            <div className="icon-circle"><Mail size={18} /></div>
            <span>info@eventsupport.com</span>
          </div>
          <div className="contact-item">
            <div className="icon-circle"><MapPin size={18} /></div>
            <span>123 Main Street, Bengaluru, India</span>
          </div>
        </div>
      </div>

      <div className="contact-right" data-aos="fade-left">
        <form>
          <div className="input-group">
            <User size={16} />
            <input type="text" placeholder="Name" required />
          </div>
          <div className="input-group">
            <Phone size={16} />
            <input type="text" placeholder="Phone" required />
          </div>
          <div className="input-group">
            <Mail size={16} />
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="input-group">
            <FileText size={16} />
            <input type="text" placeholder="Subject" />
          </div>
          <div className="input-group">
            <MessageSquare size={16} />
            <textarea placeholder="How can we help you? Feel free to get in touch!" rows="4" />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactusSection;
