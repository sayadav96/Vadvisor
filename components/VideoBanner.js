import React, { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

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
      <div className="absolute top-0 left-0 w-full h-fit md:h-screen z-0">
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
        // --- MODIFIED CLASSES HERE ---
        // MOBILE (default): Smaller padding (p-2)
        // DESKTOP (md:): Larger padding (md:p-3)
        className="absolute top-5 right-5 shadow-md z-30 p-2 md:p-3 rounded-full bg-white/30 backdrop-blur-sm text-white hover:bg-white/50 transition-colors"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {/* LUCIDE ICON SIZE
                  MOBILE (default): Smaller size (size={20})
                  DESKTOP (md:): Larger size (size={24})
                */}
        {isMuted ? (
          <VolumeX size={20} className="md:w-6 md:h-6" />
        ) : (
          <Volume2 size={20} className="md:w-6 md:h-6" />
        )}
      </button>
    </section>
  );
};

export default VideoBanner;
