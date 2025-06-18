import { useState, useEffect } from 'react';
import axios from 'axios';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA5YzZlMzE4NGRkOGQwNWQxMjg5YjgiLCJlbWFpbCI6Im11aGFtbWFkc2hvYWliMjgwM0BnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJhdXRoVG9rZW4iOnRydWUsImlhdCI6MTc0ODQzNDA4MiwiZXhwIjoxODM0ODM0MDgyfQ.olVsB5_gf6j4qSv8TitQfkoAQj8Qh6RGWzQuTFHqP84';

export default function useEventGallery() {
  const [galleryData, setGalleryData] = useState({
    all: [],
    wedding: [],
    corporate: [],
    exhibitions: [],
    operations: [],
    entertainments: [],
    products: [],
  });

  const [imageURLs, setImageURLs] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      setLoading(true);

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

        // Parallel blob fetch
        const allImages = [
          ...allData.all,
          ...allData.wedding,
          ...allData.corporate,
          ...allData.exhibitions,
          ...allData.operations,
          ...allData.entertainments,
          ...allData.products,
        ];

        const uniqueImages = Array.from(new Set(allImages.map(i => i.img)));

        const promises = uniqueImages.map(async (img) => {
          const url = await fetchImageBlob(img);
          return { img, url };
        });

        const results = await Promise.all(promises);

        const imageMap = {};
        results.forEach(({ img, url }) => {
          if (url) imageMap[img] = url;
        });

        setImageURLs(imageMap);
      }

    } catch (err) {
      console.error('Failed to fetch gallery:', err);
    } finally {
      setLoading(false);
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

  return { galleryData, imageURLs, loading };
}
