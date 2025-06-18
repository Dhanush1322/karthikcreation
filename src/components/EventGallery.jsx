import React, { useState, useEffect } from 'react';
import '../styles/EventGallery.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

const categories = ['All', 'Wedding', 'Corporate', 'Exhibitions', 'Operations', 'Entertainments', 'Products'];

function EventGallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [galleryData, setGalleryData] = useState({
    all: [],
    wedding: [],
    corporate: [],
    exhibitions: [],
    operations: [],
    entertainments: [],
    products: [],
  });

  const [imageURLs, setImageURLs] = useState({}); // To store blob URLs
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA5YzZlMzE4NGRkOGQwNWQxMjg5YjgiLCJlbWFpbCI6Im11aGFtbWFkc2hvYWliMjgwM0BnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJhdXRoVG9rZW4iOnRydWUsImlhdCI6MTc0ODQzNDA4MiwiZXhwIjoxODM0ODM0MDgyfQ.olVsB5_gf6j4qSv8TitQfkoAQj8Qh6RGWzQuTFHqP84';

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const res = await axios.get(
        'https://karthikcreation.ap-1.evennode.com/api/admin/getAllEventGallery',
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.data?.data?.data?.length > 0) {
        const gallery = res.data.data.data[0];
        const allData = {
          all: gallery.all || [],
          wedding: gallery.wedding || [],
          corporate: gallery.corporate || [],
          exhibitions: gallery.exhibitions || [],
          operations: gallery.operations || [],
          entertainments: gallery.entertainments || [],
          products: gallery.products || [],
        };

        setGalleryData(allData);

        // Fetch image blobs for all categories
        const allImages = [
          ...allData.all,
          ...allData.wedding,
          ...allData.corporate,
          ...allData.exhibitions,
          ...allData.operations,
          ...allData.entertainments,
          ...allData.products,
        ];

        const imageMap = {};
        for (const item of allImages) {
          if (!imageMap[item.img]) {
            const blobUrl = await fetchImageBlob(item.img);
            if (blobUrl) imageMap[item.img] = blobUrl;
          }
        }

        setImageURLs(imageMap);
      }
    } catch (error) {
      console.error('Failed to fetch gallery:', error);
    }
  };

  const fetchImageBlob = async (filename) => {
    try {
      const res = await axios.get(
        `https://karthikcreation.ap-1.evennode.com/api/admin/viewEventGalleryFile?fileUrl=${filename}`,
        {
          headers: { Authorization: `Bearer ${token}` },
          responseType: 'blob',
        }
      );
      return URL.createObjectURL(res.data);
    } catch (err) {
      console.error('Error loading image:', filename, err);
      return null;
    }
  };

  const filteredEvents = galleryData[activeCategory.toLowerCase()] || [];

  return (
    <div className="event-gallery-section" data-aos="fade-up">
      <h2 className="event-gallery-title" data-aos="fade-down">Event Gallery</h2>
      <p className="subtitle" data-aos="fade-up" data-aos-delay="100">
        Explore our portfolio of successful events and creative setups
      </p>
      <div className="underline" data-aos="zoom-in" />

      <div className="event-gallery-category-tabs" data-aos="fade-up" data-aos-delay="150">
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? 'active' : ''}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="event-grid">
        {filteredEvents.map((event, idx) => (
          <div
            key={idx}
            className="event-gallery-card"
            data-aos="fade-up"
            data-aos-delay={idx * 150}
          >
            {imageURLs[event.img] ? (() => {
              const url = imageURLs[event.img];
              const extension = event.img.split('.').pop().toLowerCase();

              const videoExtensions = ['mp4', 'webm', 'ogg', 'mov'];
              const imageExtensions = ['jpg', 'jpeg', 'png', 'gif'];

              if (videoExtensions.includes(extension)) {
                return (
                  <video
                    src={url}
                    controls
                    className="event-media"
                    width="100%"
                    height="auto"
                    preload="metadata"
                  />
                );
              } else if (imageExtensions.includes(extension)) {
                return (
                  <img
                    src={url}
                    alt={event.heading || `image-${idx}`}
                    className="event-media"
                    width="100%"
                    height="auto"
                  />
                );
              } else {
                // fallback if unknown type
                return <p>Unsupported media type</p>;
              }
            })() : (
              <p>Loading media...</p>
            )}

            {activeCategory === 'All' && (
              <>
                <h3>{event.heading}</h3>
                <p>{event.description}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventGallery;
