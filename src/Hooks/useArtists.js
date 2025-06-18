import { useEffect, useState } from 'react';
import axios from 'axios';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA5YzZlMzE4NGRkOGQwNWQxMjg5YjgiLCJlbWFpbCI6Im11aGFtbWFkc2hvYWliMjgwM0BnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJhdXRoVG9rZW4iOnRydWUsImlhdCI6MTc0ODQzNDA4MiwiZXhwIjoxODM0ODM0MDgyfQ.olVsB5_gf6j4qSv8TitQfkoAQj8Qh6RGWzQuTFHqP84';

export default function useArtists() {
  const [artists, setArtists] = useState([]);
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArtists();
  }, []);

  const fetchArtists = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        'https://karthikcreation.ap-1.evennode.com/api/admin/getAllArtist',
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (res.data.Status && res.data.data.length) {
        const artistData = res.data.data;
        setArtists(artistData);

        // Load images in parallel
        const imagePromises = artistData.map(async (artist) => {
          try {
            const imgRes = await axios.get(
              `https://karthikcreation.ap-1.evennode.com/api/admin/viewArtistFile?fileUrl=${artist.img}`,
              {
                headers: {
                  Authorization: `Bearer ${token}`
                },
                responseType: 'blob'
              }
            );
            return { id: artist._id, url: URL.createObjectURL(imgRes.data) };
          } catch (err) {
            console.error(`Image fetch error for ${artist._id}`, err);
            return { id: artist._id, url: null };
          }
        });

        const imgResults = await Promise.all(imagePromises);
        const imgMap = {};
        imgResults.forEach(({ id, url }) => {
          if (url) imgMap[id] = url;
        });

        setImages(imgMap);
      } else {
        console.error('Artist API returned no data');
      }
    } catch (err) {
      console.error('Failed to fetch artists', err);
    } finally {
      setLoading(false);
    }
  };

  return { artists, images, loading };
}
