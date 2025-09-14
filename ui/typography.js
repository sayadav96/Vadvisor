import React from "react";

const SubHeading = ({ text, className }) => {
  return (
    <p
      className={`text-[#F4A53C] font-semibold text-2xl md:text-4xl ${
        className || ""
      }`}
    >
      # {text}
    </p>
  );
};

const Heading = ({ text1, highlightedText2, text3, className }) => {
  return (
    <h1 className={`pt-2 font-bold text-4xl md:text-6xl ${className || ""}`}>
      <span className="text-[#434343]">{text1}</span>
      <span className="text-[#F4A53C]"> {highlightedText2}</span>
      <span className="text-[#434343]"> {text3}</span>
    </h1>
  );
};

const Paragraph = ({ text, className }) => {
  return (
    <p
      className={`text-base max-sm:text-md md:text-lg text-[#585858] ${
        className || ""
      }`}
    >
      {text}
    </p>
  );
};

export { Heading, SubHeading, Paragraph };
