import React from "react";

/**
 * A video banner component that displays a looping, autoplaying, and muted video.
 *
 * @param {object} props
 * @param {string} props.videoSrc - The source path of the video file (e.g., '/videos/hero-video.mp4').
 */
const VideoBanner = ({ videoSrc }) => {
  if (!videoSrc) {
    // Optionally return null or a fallback element if the source isn't provided
    console.error("VideoBanner requires a 'videoSrc' prop.");
    return null;
  }

  return (
    <section className="max-w-[1920px] bg-white md:px-20 lg:px-[10rem] pt-[7rem] sm:pt-10 mx-auto relative overflow-hidden">
      {/* Video Element */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline // Recommended for mobile autoplay
          className="w-full h-full object-cover"
        >
          {/* The video source is now dynamically set by the videoSrc prop */}
          <source src={videoSrc} type="video/mp4" />
          {/* Fallback for browsers that don't support the video tag */}
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Overlay */}
      <div className="container mx-auto flex flex-col items-center relative z-10 py-20 lg:py-60">
        {/* Optional: Add an overlay div to darken the video for better text visibility */}
        {/* <div className="absolute inset-0 bg-black opacity-30 z-0"></div> */}

        <div className="relative z-10">
          <h1 className="px-5 text-4xl sm:text-5xl font-extrabold text-white text-center sm:px-0 drop-shadow-lg">
            Education Without Borders, Success Without Limits
          </h1>
          {/* You can add more text, buttons, or elements here */}
          <a
            href="/free-video/happy-multi-ethnical-graduates-tossing-caps-running-park-near-university-sunny-graduation-day_478784#fromView=search&page=1&position=3&uuid=ee624fb1-1c64-4e98-8074-3b05d6f2cffd"
            className="text-gray-950 text-opacity-50"
          >
            Image by freepik
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoBanner;
