import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const IntroVideo = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const video = videoRef.current;

    const handleEnded = () => {
      navigate('/home');
    };

    const handleClick = () => {
      if (video) {
        // Jump forward 10 seconds
        video.currentTime = Math.min(video.duration, video.currentTime + 1);
      }
    };

    if (video) {
      video.play().catch((err) => {
        console.warn('Autoplay was prevented:', err);
      });

      video.addEventListener('ended', handleEnded);
      window.addEventListener('click', handleClick);
    }

    return () => {
      if (video) {
        video.removeEventListener('ended', handleEnded);
      }
      window.removeEventListener('click', handleClick);
    };
  }, [navigate]);

  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <video
        ref={videoRef}
        src="/loader/loader.mp4"  // ✔ your video path
        autoPlay
        muted
        playsInline
        controls={false}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
};

export default IntroVideo;
