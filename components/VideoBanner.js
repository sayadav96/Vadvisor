import React, { useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react'; 

const VideoBanner = ({ videoSrc }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  
  if (!videoSrc) {
    console.error("VideoBanner requires a 'videoSrc' prop.");
    return null;
  }

  return (
    // Main section height: 50vh on mobile, full screen (h-screen) on desktop
    <section className="max-w-[1920px] bg-white md:px-20 lg:px-[10rem] pt-[7rem] sm:pt-10 mx-auto relative overflow-x-hidden h-[50vh] md:h-screen">
      
      {/* Video Element Container */}
      {/* Container height mirrors the section height to ensure fill */}
      <div className="absolute top-0 left-0 w-full h-[50vh] md:h-screen z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover" 
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Mute/Unmute Button (Stays in the bottom corner) */}
      <button
        onClick={toggleMute}
        // z-30 ensures it is above the video (z-0)
        className="absolute bottom-5 right-5 z-30 p-3 rounded-full bg-white/30 backdrop-blur-sm text-white hover:bg-white/50 transition-colors"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>
      
    </section>
  );
};

export default VideoBanner;