import React from 'react';

const VideoBackground = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-auto min-h-full max-w-none flex justify-center"
      >
        <source src="/assets/bg/background3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 p-4 text-white">{children}</div>
    </div>
  );
};

export default VideoBackground;
