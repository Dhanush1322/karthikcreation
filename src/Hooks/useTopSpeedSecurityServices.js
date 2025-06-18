import { useEffect, useState } from 'react';
import axios from 'axios';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA5YzZlMzE4NGRkOGQwNWQxMjg5YjgiLCJlbWFpbCI6Im11aGFtbWFkc2hvYWliMjgwM0BnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJhdXRoVG9rZW4iOnRydWUsImlhdCI6MTc0ODQzNDA4MiwiZXhwIjoxODM0ODM0MDgyfQ.olVsB5_gf6j4qSv8TitQfkoAQj8Qh6RGWzQuTFHqP84'; // Replace with actual token

export default function useTopSpeedSecurityServices() {
  const [services, setServices] = useState([]);
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        'https://karthikcreation.ap-1.evennode.com/api/admin/getAllTopSpeedSecurityService',
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (res.data.Status && res.data.data.length) {
        setServices(res.data.data);

        // Load images in parallel
        const imagePromises = res.data.data.map(async (service) => {
          if (service.img) {
            try {
              const imgRes = await axios.get(
                `https://karthikcreation.ap-1.evennode.com/api/admin/viewTopSpeedSecurityServiceFile?fileUrl=${service.img}`,
                {
                  headers: {
                    Authorization: `Bearer ${token}`
                  },
                  responseType: 'blob'
                }
              );
              return { name: service.img, url: URL.createObjectURL(imgRes.data) };
            } catch (err) {
              console.error(`Image fetch error for ${service.img}`, err);
              return { name: service.img, url: '' };
            }
          }
          return { name: service.img, url: '' };
        });

        const imageResults = await Promise.all(imagePromises);
        const imgMap = {};
        imageResults.forEach(({ name, url }) => {
          if (url) imgMap[name] = url;
        });
        setImages(imgMap);
      } else {
        console.error('No services data');
      }
    } catch (err) {
      console.error('Failed to fetch services', err);
    } finally {
      setLoading(false);
    }
  };

  return { services, images, loading };
}
