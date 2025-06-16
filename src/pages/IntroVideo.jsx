
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./IntroVideo.css"; 

const IntroVideo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isPlayed = sessionStorage.getItem("videoPlayed");
    if (isPlayed) {
      navigate("/home");
    }
  }, [navigate]);

  const handleVideoEnd = () => {
    sessionStorage.setItem("videoPlayed", "true");
    navigate("/home");
  };

  return (

<div className="intro-video-container">
      <video
        className="intro-video"
        autoPlay
        muted
        onEnded={handleVideoEnd}
      >
        <source src="ball1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default IntroVideo;
