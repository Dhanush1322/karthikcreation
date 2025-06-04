import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './TopSpeedSecutity.css';

function TopSpeedSecutity() {
  const [services, setServices] = useState([]);
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA5YzZlMzE4NGRkOGQwNWQxMjg5YjgiLCJlbWFpbCI6Im11aGFtbWFkc2hvYWliMjgwM0BnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJhdXRoVG9rZW4iOnRydWUsImlhdCI6MTc0ODQzNDA4MiwiZXhwIjoxODM0ODM0MDgyfQ.olVsB5_gf6j4qSv8TitQfkoAQj8Qh6RGWzQuTFHqP84'; // 🔐 Replace this with your actual token

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const fetchData = async () => {
      try {
        const response = await fetch('http://karthikcreation.ap-1.evennode.com/api/admin/getAllTopSpeedSecurityService', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        const result = await response.json();
        if (result.Status) {
          setServices(result.data);
        } else {
          console.error('Failed to fetch services:', result);
        }
      } catch (error) {
        console.error('API error:', error);
      }
    };

    fetchData();
  }, [token]);

  const fetchImage = async (filename) => {
    try {
      const response = await fetch(`http://karthikcreation.ap-1.evennode.com/api/admin/viewTopSpeedSecurityServiceFile/${filename}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const blob = await response.blob();
      return URL.createObjectURL(blob);
    } catch (error) {
      console.error('Image fetch error:', error);
      return '';
    }
  };

  const [imageURLs, setImageURLs] = useState({});

  useEffect(() => {
    const loadImages = async () => {
      const urls = {};
      for (const service of services) {
        if (service.img) {
          urls[service.img] = await fetchImage(service.img);
        }
      }
      setImageURLs(urls);
    };

    if (services.length > 0) {
      loadImages();
    }
  }, [services]);

  return (
    <div className="top-speed-container" data-aos="fade-up">
      <h2 className="main-heading" data-aos="fade-right">TOP SPEED SECURITY SERVICES</h2>
      <p className="tp-description" data-aos="fade-left">
        <u>
          Services provided: all of Event’s & Expo’s industry & Corporates, Places-Public and Private,
          Institutional, Commercial, Residential, Schools, Hospitals, Larger mixed Communities,
          Institutions, Apartments, Houses, etc.
        </u>
      </p>

      <div className="card-wrapper">
        {services.map((service, index) => (
          <div className="service-card" key={service._id || index} data-aos="zoom-in" data-aos-delay={index * 100}>
            <div className="card-image">
              {imageURLs[service.img] ? (
                <img src={imageURLs[service.img]} alt={service.heading} />
              ) : (
                <div>Loading image...</div>
              )}
              <span className="badge">{service.availability_status}</span>
            </div>
            <h3>{service.heading}</h3>
            <ul>
              {service.subheading?.map((item, i) => (
                <li key={i}>✅ {item}</li>
              ))}
            </ul>
            <div className="card-footer">
              <button className="book-btn">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopSpeedSecutity;
