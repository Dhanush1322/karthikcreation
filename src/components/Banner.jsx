import React, { useState, useEffect } from 'react';
import '../styles/Banner.css';

function Banner() {
    const [activeSlide, setActiveSlide] = useState(1);

    const slides = [
        {
            title: <>Creating Memorable<br /><span style={{ color: '#3B82F6' }}>Event</span> That Last a<br />Lifetime</>,
            subtitle: "From corporate gatherings to dream weddings, we deliver exceptional event management services tailored to your unique vision and requirement.",
            backgroundImage: "./img/banner.jpg"
        },
        {
            title: <>Creating Memorable<br /><span style={{ color: '#3B82F6' }}>Event</span> That Last a<br />Lifetime</>,
            subtitle: "From corporate gatherings to dream weddings, we deliver exceptional event management services tailored to your unique vision and requirement.",
            backgroundImage: "./img/banner2.jpg"
        },
        {
            title: <>Creating Memorable<br /><span style={{ color: '#3B82F6' }}>Event</span> That Last a<br />Lifetime</>,
            subtitle: "From corporate gatherings to dream weddings, we deliver exceptional event management services tailored to your unique vision and requirement.",
            backgroundImage: "./img/banner3.jpg"
        }
    ];

    // Auto-slide logic
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide(prev => (prev % slides.length) + 1);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Clean up interval on unmount
    }, [slides.length]);

    return (
        <div
            className="banner-section"
            style={{
                backgroundImage: `url(${slides[activeSlide - 1].backgroundImage})`
            }}
        >
            <div className="banner-content-box">
                <h1 className="banner-title">{slides[activeSlide - 1].title}</h1>
                <p className="banner-subtitle">{slides[activeSlide - 1].subtitle}</p>
            </div>

            <div className="banner-buttons">
                <button className="explore-button">Services</button>
                <button className="contact-button">Contact Us</button>
            </div>

            <div className='line-section'>
                {[1, 2, 3].map((num) => (
                    <div
                        key={num}
                        className={`line-${num} circle-button ${activeSlide === num ? 'active' : ''}`}
                        onClick={() => setActiveSlide(num)}
                    >
                        {num}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Banner;
