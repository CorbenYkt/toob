import React from "react";

const FacebookVideo: React.FC = () => {
  return (
    <div className="w-full justify-center">
      <p className="text-center mt-2 mb-6 text-gray-800">
        Our handmade TOOBs are not only soft and snuggly - they're a breeze to use, too! Watch our quick how-to video to see just how easy it is to keep your little one cosy on the go.
      </p>

      <video
        controls
        autoPlay
        loop
        className="rounded-lg w-full"
      >
        <source src="./video/main.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default FacebookVideo;
