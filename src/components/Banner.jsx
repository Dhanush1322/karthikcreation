import React, { useState, useEffect } from 'react';
import '../styles/Banner.css';

function Banner() {
    const [activeSlide, setActiveSlide] = useState(1);

    const slides = [
        {
            title: <>Creating Memorable<br /><span style={{ color: '#3B82F6' }}>Event</span> That Last a<br />Lifetime</>,
            subtitle: "From corporate gatherings to dream weddings, we deliver exceptional event management services tailored to your unique vision and requirement.",
            backgroundImage: "./img/banner.png"
        },
        {
            title: <>Making Every <span style={{ color: '#3B82F6' }}>Moment</span> Special<br />With Perfect Planning</>,
            subtitle: "We bring creativity, precision, and passion to plan and execute events that leave lasting impressions.",
            backgroundImage: "./img/banner2.png"
        },
        {
            title: <>Your <span style={{ color: '#3B82F6' }}>Dream Event</span><br />Starts Here</>,
            subtitle: "Let us turn your ideas into reality with our expert team and flawless execution.",
            backgroundImage: "./img/banner3.png"
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
                <button className="explore-button">Explore Services</button>
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
