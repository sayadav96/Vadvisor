"use client";

import React, { useState } from "react";
import Image from "next/image";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const openWhatsApp = () => {
    const phoneNumber = "+919890017019";
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };

  return (
    <div
      className="fixed -bottom-5 -right-5 cursor-pointer sm:block z-[100]"
      onClick={openWhatsApp}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-[100px] h-[100px]">
        {/* Base WhatsApp Icon */}
        <Image
          draggable={false}
          src="/icon/whatsapp.png"
          alt="WhatsApp"
          className="w-12 h-12"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
    </div>
  );
};

export default WhatsAppButton;
