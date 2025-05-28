import React, { useEffect, useState } from 'react';
import '../styles/LatestNews.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function LatestNews() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [showAll, setShowAll] = useState(false);

  const newsData = [
    {
      title: 'Setting the bar for Passion & success',
      image: '/img/dddd2.png',
      description: 'We are Auk-lauded and recognized of Our excellence to commitment of outstanding performances and achievements which are shaped by the strength of the foundations set by Us.',
      list: [],
      style: 'highlight-blue'
    },
    {
      title: 'Outstanding Achievement Awards',
      image: '/img/dddd.png',
      description: 'The brilliant glow of Our achievement lights the way to Our success',
      list: [
        'In recognition of your exceptional contributions and dedication to excellence.',
        'Awarded for outstanding performance and unwavering commitment to success.',
        'For consistently exceeding expectations and achieving remarkable results.',
      ],
      style: ''
    },
    {
      title: 'Excellence in Service Award',
      image: '/img/dddd4.png',
      description: 'Passion is the spark that illuminates path to success and creates masterpieces along the way. Customer service is not a department... it\'s an attitude for Us.',
      list: [
        'In appreciation of your superior dedication and outstanding service.',
        'Awarded for exemplary service and commitment to excellence',
        'For providing outstanding service and making a significant impact',
      ],
      style: 'highlight-green'
    },
    {
      title: 'Leadership and Innovation Award',
      image: '/img/dddd3.png',
      description: 'Our leadership is building our future with creativity and vision, with setting the pace.',
      list: [
        'In recognition of your exceptional leadership and innovative contributions.',
        'Awarded for pioneering innovative solutions and leading by example.',
        'For demonstrating outstanding leadership and fostering innovation.',
      ],
      style: 'highlight-green'
    },
    {
      title: 'Rising Star Award',
      image: '/img/dddd1.png',
      description: 'With the roots of true achievement which lies in the will to become the best one can become in reaching for the stars that we have raised ourselves to the height of our potential.',
      list: [
        'In recognition of your exceptional potential and emerging talents.',
        'Awarded for your remarkable progress and promising future.',
        'For demonstrating outstanding growth and shining as a rising star.',
      ],
      style: 'highlight-green'
    },
  ];

  const visibleNews = showAll ? newsData : newsData.slice(0, 3);

  return (
    <div className="latest-news-section" data-aos="fade-up">
      <h2 className="section-heading" data-aos="fade-down">Awards and Recognition</h2>
      <p className="section-subheading" data-aos="fade-up" data-aos-delay="100">
        Stay informed about our recent projects and industry insights
      </p>
      <div className="underline" data-aos="zoom-in" />

      <div className="news-cards">
        {visibleNews.map((news, index) => (
          <div className={`news-card ${news.style}`} data-aos="fade-up" data-aos-delay={100 + index * 150} key={index}>
            <img src={news.image} alt={news.title} />
            <h3>{news.title}</h3>
            <p>{news.description}</p>
            {news.list.length > 0 && (
              <ul style={{ marginLeft: '20px' }}>
                {news.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {!showAll && (
        <div className="cta-button" data-aos="fade-up" data-aos-delay="500">
          <button onClick={() => setShowAll(true)}>Explore All News</button>
        </div>
      )}
    </div>
  );
}

export default LatestNews;
