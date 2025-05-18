import React from "react";

const FacebookVideo: React.FC = () => {
  return (
    <div className="w-full flex justify-center">
      <video
        controls
        autoPlay
        loop
        className="rounded-lg w-full max-w-2xl"
      >
        <source src="./video/main.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default FacebookVideo;
