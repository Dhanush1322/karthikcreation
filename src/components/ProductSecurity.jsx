import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/ProductSecurity.css';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function ProductSecurity() {
  const [services, setServices] = useState([]);
  const [images, setImages] = useState({});
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA5YzZlMzE4NGRkOGQwNWQxMjg5YjgiLCJlbWFpbCI6Im11aGFtbWFkc2hvYWliMjgwM0BnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJhdXRoVG9rZW4iOnRydWUsImlhdCI6MTc0ODQzNDA4MiwiZXhwIjoxODM0ODM0MDgyfQ.olVsB5_gf6j4qSv8TitQfkoAQj8Qh6RGWzQuTFHqP84'; // Use your actual token
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });

    fetch('http://karthikcreation.ap-1.evennode.com/api/admin/getService', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.Status) {
          setServices(data.data);

          data.data.forEach(service => {
            fetch(`http://karthikcreation.ap-1.evennode.com/api/admin/viewServiceFile/${service.img}`, {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            })
              .then(res => res.blob())
              .then(blob => {
                const imageUrl = URL.createObjectURL(blob);
                setImages(prev => ({ ...prev, [service._id]: imageUrl }));
              })
              .catch(err => console.error('Image fetch error:', err));
          });
        } else {
          console.error('Failed to fetch services');
        }
      })
      .catch(err => console.error('API error:', err));
  }, []);

  return (
    <div className="security-section" data-aos="fade-up">
      <h2 data-aos="fade-down">KARTHIK CREATIONS SERVICES</h2>
      <p data-aos="fade-down" data-aos-delay="100">
        End-to-End Event Services & Equipment Solutions
      </p>

      <div className="security-grid">
        {services
          .filter(service => service.availability_status === "Available")
          .map((service, index) => (
            <div className="security-card" key={service._id} data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="security-image">
                {images[service._id] ? (
                  <img src={images[service._id]} alt={service.heading} />
                ) : (
                  <div style={{ height: '200px', backgroundColor: '#f0f0f0' }}>Loading image...</div>
                )}
                <span className="badge">{service.availability_status}</span>
              </div>
              <div className="security-info">
                <h4>{service.heading}</h4>
                <ul>
                  {service.subheading.map((feature, i) => (
                    <li key={i}>
                      <FaCheckCircle className="check-icon" /> {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className="book-btn"
                  onClick={() => navigate('/Enqiry')}
                >
                  Book Now
                </button>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSecurity;
