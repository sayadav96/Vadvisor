import React, { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const VideoBanner = ({ videoSrc }) => {
  const [isMuted, setIsMuted] = useState(true);
  
  // Use a ref for the video element
  const videoRef = useRef(null);
  
  // Use a ref for the root section element to observe
  const sectionRef = useRef(null); 

  // --- Intersection Observer Logic ---
  useEffect(() => {
    const videoElement = videoRef.current;
    const sectionElement = sectionRef.current;

    if (!videoElement || !sectionElement) return;

    // Options: The video is considered "visible" if 50% of the section is in the viewport
    const options = {
      root: null, // viewport as the root
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Video is 50% or more visible: Play
          videoElement.play();
        } else {
          // Video is less than 50% visible: Pause
          videoElement.pause();
        }
      });
    }, options);

    // Start observing the main banner section
    observer.observe(sectionElement);

    // Cleanup function: disconnect the observer when the component unmounts
    return () => {
      observer.unobserve(sectionElement);
    };
  }, []); // Empty dependency array ensures this runs only once on mount
  // --- END Intersection Observer Logic ---


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
    // 1. Attach the sectionRef to the root element for observation
    <section 
      ref={sectionRef} 
      className="max-w-[1920px] bg-white md:px-20 lg:px-[10rem] pt-[7rem] sm:pt-10 mx-auto relative overflow-x-hidden h-[50vh] md:h-screen"
    >
      
      {/* Video Element Container */}
      <div className="absolute top-0 left-0 w-full h-[50vh] md:h-screen z-0">
        <video
          ref={videoRef} // Attach the videoRef here
          // REMOVED: autoPlay. The useEffect hook handles the initial play/pause state.
          loop
          muted={isMuted}
          playsInline
          preload="metadata" // Best practice for scroll-triggered videos
          className="w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Mute/Unmute Button (Stays in the top right corner) */}
      <button
        onClick={toggleMute}
        className="absolute top-5 right-5 shadow-md z-30 p-2 md:p-3 rounded-full bg-white/30 backdrop-blur-sm text-white hover:bg-white/50 transition-colors"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
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