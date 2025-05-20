import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Events.css';
import { FaCalendarAlt } from 'react-icons/fa';

const eventsData = [
  {
    title: "Marathon and meditation",
    image: "./entertainment/p.png",
    items: [
      {
        name: "Marathan",
        description: "A comprehensive wellness program featuring yoga, meditation, and nutrition workshops.",
        date: "June 5-6, 2025",
      },
      {
        name: "Fitness Challenge Launch",
        description: "Kickoff event for the 30-day transformation challenge with expert trainers.",
        date: "June 12, 2025",
      },
      {
        name: "Holistic Health Symposium",
        description: "Expert panel discussions on integrative approaches to health and wellness.",
        date: "June 20, 2025",
      },
    ],
  },
  {
    title: "Hospitality Events",
    image: "./entertainment/p1.png",
    items: [
      {
        name: "Corporate Conference Functions",
        description: "Corporate conferences serve as a powerful platform for organizations to connect, collaborate, and communicate their vision.",
        date: "May 28, 2025",
      },
      {
        name: "Personal fuctions",
        description: "Showcase of premium hospitality services and experiences as leading providers",
        date: "June 15, 2025",
      },
      {
        name: "family and get to gether",
        description: "Celebration of fine wines and gourmet cuisine with expert sommeliers.",
        date: "June 25, 2025",
      },
    ],
  },
  {
    title: "Residential Events",
    image: "./entertainment/p2.png",
    items: [
      {
        name: "Azure Heights Launch",
        description: "Exclusive preview of luxury residential apartments with special launch day offers.",
        date: "June 10, 2025",
      },
      {
        name: "Urban Living Showcase",
        description: "Exhibition of modern urban apartments with smart home technology.",
        date: "June 18, 2025",
      },
      {
        name: "House Warming ceremony",
        description: "Housewarming invitation to celebrate a new chapter of warmth, love, and togetherness.",
        date: "June 28, 2025",
      },
    ],
  },
];

function Events() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="events-section">
      <h2>Events</h2>
      <div className="events-grid">
        {eventsData.map((eventGroup, idx) => (
          <div
            className="e-event-card"
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 150}
          >
            <img src={eventGroup.image} alt={eventGroup.title} className="event-image" />
            <div className="event-content">
              <h3>{eventGroup.title}</h3>
              <ul>
                {eventGroup.items.map((item, index) => (
                  <li key={index}>
                    <strong>{item.name}</strong>
                    <p>{item.description}</p>
                    <div className="event-date">
                      <FaCalendarAlt className="calendar-icon" />
                      {item.date}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
