// CustomArrows.js
import React from "react";

export const CustomLeftArrow = ({ onClick, mobileHidden = false, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <button
      onClick={onClick}
      className={`custom-left-arrow text-white p-2 rounded-full absolute bottom-0 right-[120px] z-10 ${
        mobileHidden ? "hidden sm:block" : ""
      }`}
      aria-label="Next Slide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 83 82"
        fill="none"
      >
        <circle
          cx="41.5136"
          cy="40.9568"
          r="39.6397"
          transform="rotate(1.9369 41.5136 40.9568)"
          fill="white"
        />
        <circle
          cx="41.5136"
          cy="40.9568"
          r="38.6487"
          transform="rotate(1.9369 41.5136 40.9568)"
          stroke="#2E2E2E"
          strokeOpacity="0.5"
          strokeWidth="1.98199"
        />
        <path
          d="M58.3604 42.4435C59.1813 42.4435 59.8468 41.778 59.8468 40.957C59.8468 40.1361 59.1813 39.4705 58.3604 39.4705L58.3604 42.4435ZM23.6155 39.9059C23.035 40.4864 23.035 41.4276 23.6155 42.0081L33.0754 51.4681C33.656 52.0486 34.5971 52.0486 35.1777 51.4681C35.7582 50.8876 35.7582 49.9464 35.1777 49.3659L26.7688 40.957L35.1777 32.5482C35.7582 31.9677 35.7582 31.0265 35.1777 30.446C34.5971 29.8655 33.656 29.8655 33.0754 30.446L23.6155 39.9059ZM58.3604 39.4705L24.6666 39.4705L24.6666 42.4435L58.3604 42.4435L58.3604 39.4705Z"
          fill="#2E2E2E"
          fillOpacity="0.6"
        />
      </svg>
    </button>
  );
};

export const CustomRightArrow = ({ onClick, mobileHidden = false }) => {
  return (
    <button
      onClick={onClick}
      className={`custom-right-arrow text-white p-2 rounded-full absolute bottom-[0px] right-[50px] z-10 ${
        mobileHidden ? "hidden sm:block" : ""
      }`}
      aria-label="Next Slide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 83 82"
        fill="none"
      >
        <circle
          cx="41.5137"
          cy="40.9572"
          r="39.6397"
          transform="rotate(-178.063 41.5137 40.9572)"
          fill="white"
        />
        <circle
          cx="41.5137"
          cy="40.9572"
          r="38.6487"
          transform="rotate(-178.063 41.5137 40.9572)"
          stroke="#2E2E2E"
          strokeOpacity="0.5"
          strokeWidth="1.98199"
        />
        <path
          d="M24.667 39.4705C23.846 39.4705 23.1805 40.1361 23.1805 40.957C23.1805 41.778 23.846 42.4435 24.667 42.4435V39.4705ZM59.4119 42.0081C59.9924 41.4276 59.9924 40.4864 59.4119 39.9059L49.9519 30.446C49.3714 29.8655 48.4302 29.8655 47.8497 30.446C47.2692 31.0265 47.2692 31.9677 47.8497 32.5482L56.2585 40.957L47.8497 49.3659C47.2692 49.9464 47.2692 50.8876 47.8497 51.4681C48.4302 52.0486 49.3714 52.0486 49.9519 51.4681L59.4119 42.0081ZM24.667 42.4435H58.3608V39.4705H24.667V42.4435Z"
          fill="#2E2E2E"
          fillOpacity="0.6"
        />
      </svg>
    </button>
  );
};
