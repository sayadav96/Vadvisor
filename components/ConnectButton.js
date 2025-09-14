import React from "react";
import Link from "next/link";

export const ConnectButton = ({ mobileHidden, className }) => {
  return (
    <Link href="/contact-us#contact-form">
      <button
        type="submit"
        className={`bg-[#f4a53c] text-white py-3 px-6 rounded-full mt-4 font-semibold ${
          mobileHidden ? "max-sm:hidden" : ""
        } ${className || ""}`}
      >
        Connect With An Expert
      </button>
    </Link>
  );
};
