import Marquee from "react-fast-marquee";
import Image from "next/image";

const universities = [
  { path: "/images/countries/uk/logos/kings.webp" },
  { path: "/images/countries/uk/logos/manchester.webp" },
  { path: "/images/countries/ireland/logos/trinity.webp" },
  { path: "/images/countries/ireland/logos/ucd.webp" },
  { path: "/images/countries/australia/logos/anu.webp" },
  { path: "/images/countries/australia/logos/melbourne.webp" },
  { path: "/images/countries/new-zealand/logos/auckland.webp" },
  { path: "/images/countries/new-zealand/logos/otago.webp" },
  { path: "/images/countries/germany/logos/lmu.webp" },
  { path: "/images/countries/germany/logos/tum.webp" },
  { path: "/images/countries/dubai/logos/heriot-watt.webp" },
  { path: "/images/countries/dubai/logos/uod.webp" },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1501 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1501, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const ScrollingLogos = ({ homePage, logoPath }) => {
  return (
    <Marquee autoFill className="overflow-hidden">
      {(homePage ? universities : logoPath).map((partner, index) => {
        return (
          <div
            key={index}
            className="flex justify-center mx-10 items-center transition-transform duration-300 transform hover:scale-[110%] overflow-visible"
          >
            <Image
              draggable="false"
              src={partner.path}
              alt=""
              className="max-h-[80px] h-auto w-auto"
              height={0}
              width={0}
              sizes="100vw"
              loading="lazy"
            />
          </div>
        );
      })}
    </Marquee>
  );
};
