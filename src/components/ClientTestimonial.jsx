import React from 'react';
import '../styles/ClientTestimonial.css';

const testimonials = [
  {
    name: 'Priya Mehta',
    title: 'Marketing Director, Tech Solutions Ltd',
    feedback:
      'Karthik Creations exceeded our expectations for our annual corporate conference. Their attention to detail and professional approach made our event a tremendous success. The AV setup was flawless, and their team was responsive throughout the planning process.',
    stars: 5,
    image: '/img/p1.png', // replace with your actual image path
  },
  {
    name: 'Rahul & Anjali Sharma',
    title: 'Wedding Clients',
    feedback:
      'Our wedding day was absolutely perfect thanks to Karthik Creations. From the stunning decor to the seamless coordination, everything was handled with professionalism and care. They truly understood our vision and brought it to life beyond our expectations.',
    stars: 5,
    image: '/img/p1.png', // replace with your actual image path
  },
  {
    name: 'Vikram Desai',
    title: 'CEO, Innovate Manufacturing',
    feedback:
      "We've worked with Karthik Creations for three consecutive years on our industry exhibition. Their expertise in booth design and setup has consistently helped us stand out from competitors. Their team is creative, responsive, and delivers exceptional quality.",
    stars: 5,
    image: '/img/p1.png', // replace with your actual image path
  },
];

function ClientTestimonial() {
  return (
    <div className="testimonial-container">
      <h2 className="testimonial-title">Client Testimonials</h2>
      <p className="testimonial-subtitle">
        What our clients say about their experience with Karthik Creations
      </p>
      
      <div className="testimonial-cards">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">{'⭐'.repeat(item.stars)}</div>
            <p className="feedback">"{item.feedback}"</p>
            <div className="client-info">
              <img src={item.image} alt={item.name} className="client-img" />
              <div>
                <strong>{item.name}</strong>
                <p className="client-title">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientTestimonial;
