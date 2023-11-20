import React, { useEffect, useRef } from "react";
import diamond from "../assets/diamond.mp4";

const AutoPlayVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Play the video when the component mounts
    videoRef.current.play();
  }, []);

  return (
    <div>
      <video ref={videoRef} className="opacity-20" autoPlay muted loop >
        <source src={diamond} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default AutoPlayVideo;
