"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SectionIntro } from "@/components/SectionIntro";
import { CustomLeftArrow, CustomRightArrow } from "@/components/CustomArrows";
import { Paragraph } from "@/ui/typography";
import { useState } from "react";
import { ScrollingLogos } from "@/components/ScrollingLogos";
import { ScrollingServices } from "@/components/ScrollingServices";
import Link from "next/link";
import Image from "next/image";
import VideoBanner from "@/components/VideoBanner";

const countryLinks = [
  "uk",
  "ireland",
  "australia",
  "new-zealand",
  "germany",
  "dubai",
];

const solidStarIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 35 31"
    fill="none"
  >
    <g clipPath="url(#clip0_658_268)">
      <path
        d="M19.2558 1.08984C18.9338 0.423828 18.2532 0 17.5058 0C16.7584 0 16.0839 0.423828 15.7558 1.08984L11.8487 9.1002L3.123 10.3838C2.39384 10.4928 1.7862 11.0014 1.56137 11.6977C1.33655 12.3939 1.51884 13.1629 2.04141 13.6775L8.373 19.9199L6.87821 28.7416C6.75668 29.4682 7.0605 30.2068 7.66207 30.6367C8.26363 31.0666 9.05964 31.1211 9.71589 30.776L17.5119 26.6285L25.3079 30.776C25.9641 31.1211 26.7602 31.0727 27.3617 30.6367C27.9633 30.2008 28.2671 29.4682 28.1456 28.7416L26.6447 19.9199L32.9763 13.6775C33.4989 13.1629 33.6872 12.3939 33.4563 11.6977C33.2254 11.0014 32.6239 10.4928 31.8947 10.3838L23.1629 9.1002L19.2558 1.08984Z"
        fill="#F4A53C"
      />
    </g>
    <defs>
      <clipPath id="clip0_658_268">
        <rect width="35" height="31" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const blankStarIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 35 31"
    fill="none"
  >
    <g clipPath="url(#clip0_658_268)">
      <path
        d="M19.2558 1.08984C18.9338 0.423828 18.2532 0 17.5058 0C16.7584 0 16.0839 0.423828 15.7558 1.08984L11.8487 9.1002L3.123 10.3838C2.39384 10.4928 1.7862 11.0014 1.56137 11.6977C1.33655 12.3939 1.51884 13.1629 2.04141 13.6775L8.373 19.9199L6.87821 28.7416C6.75668 29.4682 7.0605 30.2068 7.66207 30.6367C8.26363 31.0666 9.05964 31.1211 9.71589 30.776L17.5119 26.6285L25.3079 30.776C25.9641 31.1211 26.7602 31.0727 27.3617 30.6367C27.9633 30.2008 28.2671 29.4682 28.1456 28.7416L26.6447 19.9199L32.9763 13.6775C33.4989 13.1629 33.6872 12.3939 33.4563 11.6977C33.2254 11.0014 32.6239 10.4928 31.8947 10.3838L23.1629 9.1002L19.2558 1.08984Z"
        fill="none"
        stroke="#F4A53C"
        strokeWidth="3px"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_658_268">
        <rect width="35" height="31" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const countries = [
  { id: 1, text: "Study in United Kingdom", path: "/images/countries/uk.webp" },
  { id: 2, text: "Study in Ireland", path: "/images/countries/ireland.webp" },
  {
    id: 3,
    text: "Study in Australia",
    path: "/images/countries/australia.webp",
  },
  {
    id: 4,
    text: "Study in New Zealand",
    path: "/images/countries/new-zealand.webp",
  },
  { id: 5, text: "Study in Germany", path: "/images/countries/germany.webp" },
  { id: 6, text: "Study in Dubai", path: "/images/countries/dubai.webp" },
];

const testimonials = [
  {
    id: 1,
    name: "Zephaniah",
    text: "I’m beyond thrilled to announce that I’ve been accepted into Nottingham Trent University for MSc Computer Science (Sandwich Course) starting ...",
    rating: 5,
    link: "https://g.co/kgs/5ANNPuC",
  },
  {
    id: 2,
    name: "Alfin",
    text: "Thrilled to share that I’ve been accepted into The University of Manchester for MSc Advanced Chemical Engineering (September 2024 intake)...",
    rating: 5,
    link: "https://g.co/kgs/seBKtgH",
  },
  {
    id: 3,
    name: "Arya",
    text: "Thrilled to share my incredible journey with Jetset vadvisor Overseas Education Consultant! Thanks to their unparalleled expertise, I secured admission to the...",
    rating: 5,
    link: "https://g.co/kgs/csoESm7",
  },
  {
    id: 4,
    name: "Hetal",
    text: "I had an amazing experience with them. I was left behind by many renowned study visa experts in a tough situation. Almost thought I would not make...",
    rating: 5,
    link: "https://g.co/kgs/q7uotRW",
  },
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1501 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1501, min: 1024 },
      items: 5,
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

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="bg-white text-gray-900">
      <VideoBanner videoSrc="/videos/banner.mp4" />

      <section className="max-w-[1920px] mx-auto bg-white sm:pt-20 sm:pb-10">
        <ScrollingLogos homePage={true} />
      </section>
      <section className="max-w-[1920px] mx-auto px-5 md:px-20 lg:px-[10rem] bg-white max-sm:pt-[4rem] sm:py-[4rem]">
        <div className="">
          <SectionIntro
            subHeadingText=""
            headingtext1="Explore Your Academic Journey"
            headingtext2=""
            headingtext3=""
          ></SectionIntro>
        </div>
        <Carousel
          responsive={{
            superLargeDesktop: {
              breakpoint: { max: 4000, min: 1501 },
              items: 2,
              partialVisibilityGutter: 20,
            },
            desktop: {
              breakpoint: { max: 1501, min: 1024 },
              items: 2,
              partialVisibilityGutter: 40,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 1,
              paritialVisibilityGutter: 30,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
              paritialVisibilityGutter: 0,
            },
          }}
          arrows={true}
          customLeftArrow={<CustomLeftArrow mobileHidden />}
          customRightArrow={<CustomRightArrow mobileHidden />}
          renderButtonGroupOutside
          partialVisible={true}
          className="mt-12 pb-16 sm:pb-[6rem] box-border"
          itemClass="px-3"
        >
          {countries.map((country, index) => {
            return (
              <div key={country.id || index} className="flex items-center">
                <Link href={`/${countryLinks[index]}`}>
                  <div className="overflow-hidden rounded-3xl bg-gradient-to-t from-[#000000a2] to-100% to-transparent inline-block">
                    <Image
                      draggable="false"
                      src={country.path}
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="max-sm:h-[22.5rem] sm:h-[15rem] w-[40rem] object-cover sm:max-h-[300px] relative -z-[5]"
                      loading="lazy"
                    />
                  </div>
                  <span className="absolute bottom-4 left-8 text-2xl md:text-3xl text-white font-semibold">
                    {country.text}
                  </span>
                </Link>
              </div>
            );
          })}
        </Carousel>
      </section>
      <section className="max-w-[1920px] mx-auto bg-white px-5 md:px-20 lg:px-[10rem] pb-[4rem] sm:px-20">
        <div className="hidden sm:grid grid-cols-6 grid-flow-row sm:grid-flow-col">
          <div className="sm:col-span-4 col-span-6">
            <SectionIntro
              subHeadingText="Exciting Offers"
              headingtext1="Win Cash Rewards Worth "
              headingtext2="Rs. 18,000*"
              headingtext3=""
              paragraph="Claim your reward for Achieving English Proficiency, Celebrate Your Achievement as your Hard Work Paid Off, Claim Your Cashback Now!"
            ></SectionIntro>
          </div>
        </div>
        <div className="grid grid-cols-7 grid-flow-row sm:grid-flow-col">
          <div className="col-span-7 sm:col-span-4 sm:order-1 order-2">
            <div className="sm:hidden grid grid-cols-6 grid-flow-row sm:grid-flow-col">
              <div className="sm:col-span-4 col-span-6">
                <SectionIntro
                  subHeadingText="Exciting Offers"
                  headingtext1="Win Cash Rewards Worth "
                  headingtext2="Rs. 17,000*"
                  headingtext3=""
                  paragraph="Claim your reward for Achieving English Proficiency, Celebrate Your Achievement as your Hard Work Paid Off, Claim Your Cashback Now!"
                ></SectionIntro>
              </div>
            </div>
            <Paragraph
              text={"On following tests,"}
              className={"py-5 max-sm:mt-4 font-semibold"}
            />
            <div className="flex space-x-4">
              <Image
                src="/images/tests/ielts.png"
                draggable={false}
                alt="img"
                className="max-h-8 h-auto w-auto"
                width={0}
                height={0}
                sizes="100vw"
                loading="lazy"
              />
              <Image
                src="/images/tests/toefl.png"
                draggable={false}
                alt="img"
                className="max-h-8 h-auto w-auto"
                width={0}
                height={0}
                sizes="100vw"
                loading="lazy"
              />
              <Image
                src="/images/tests/pte.png"
                draggable={false}
                alt="img"
                className="max-h-8 h-auto w-auto"
                width={0}
                height={0}
                sizes="100vw"
                loading="lazy"
              />
              <Image
                src="/images/tests/duolingo.png"
                draggable={false}
                alt="img"
                className="max-h-8 h-auto w-auto"
                width={0}
                height={0}
                sizes="100vw"
                loading="lazy"
              />
            </div>
            <p className="rounded-md bg-[#f4a53c33] px-2 py-2 my-10">
              Application and Service Fees for Universities and Visa Assistance
              with Jetset VAdvisor Overseas*
            </p>
            {/*<div className="w-full mx-auto">
              Dropdown Header 
              <div
                onClick={toggleDropdown}
                className="flex justify-between items-center px-4 py-4 border-b border-t border-gray-300 cursor-pointer"
              >
                <span className="text-gray-600">Terms and Conditions</span>
                <span className="text-gray-600 transform transition-transform duration-300">
                  {isOpen ? "︽" : "︾"}
                </span>
              </div>

              {isOpen && (
                <div className="px-4 py-2 border-t border-gray-300">
                  <ol className="text-gray-500 text-sm list-decimal" type="1">
                    <li className="my-2">
                      A student becomes eligible only when the university
                      acknowledges and accepts the particular English
                      proficiency test, they have taken. Jetset vadvisor also offers a
                      refund for the exam fees.
                    </li>
                    <li className="my-2">
                      If a student takes the English proficiency test but does
                      not clear and later discovers that they can be considered
                      for admission based on a Medium of Instruction (MOI) basis
                      where the university accepts it, they will still not be
                      eligible.
                    </li>
                    <li className="my-2">
                      A student whose English proficiency test certificate has
                      expired and is now attempting to apply on the Medium of
                      Instruction (MOI) basis will not be eligible.
                    </li>
                    <li className="my-2">
                      A student who successfully obtains a visa through VAdvisor
                      Overseas Education Consultant’s partner university is
                      eligible for a refund. The refund will be processed within
                      three months of visa approval.
                    </li>
                  </ol>
                </div>
              )}
            </div>*/}
            <Link href="/contact-us#contact-form">
              <button className="lg:block px-5 py-3 max-sm:w-full bg-[#F4A53C] text-white font-bold rounded-full border-2 border-[#F4A53C] focus:outline-none min-w-[180px] mt-10 hover:scale-[120%] transform transition-transform duration-300">
                Claim Your Reward
              </button>
            </Link>
          </div>
          <div className="col-span-7 sm:col-span-3 flex justify-center sm:relative sm:order-2 order-1">
            <Image
              src="images/girlModel.webp"
              alt=""
              className="w-3/4 sm:absolute sm:top-[-14rem]"
              width={0}
              height={0}
              sizes="100vw"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section className="max-w-[1920px] mx-auto bg-[#f2f2f2] px-5 md:px-20 lg:px-[10rem] py-[2rem] sm:px-20">
        <SectionIntro
          subHeadingText="Our Services"
          headingtext1="Why Choose "
          headingtext2="Jetset VAdvisor Overseas"
          headingtext3=""
          paragraph="Navigate your study abroad journey with ease, backed by our comprehensive support services every step of the way."
        ></SectionIntro>
        <div className="mt-8">
          <ScrollingServices homePage={true} />
        </div>
      </section>
      <section className="max-w-[1920px] mx-auto bg-white px-5 md:px-20 lg:px-[10rem] py-[4rem] sm:px-20">
        <SectionIntro
          subHeadingText="Our Testimonials"
          headingtext1="Hear What Our "
          headingtext2="Students Say"
          headingtext3=""
          paragraph="Discover inspiring success stories from students who achieved their study abroad dreams with Jetset VAdvisor Overseas' expert guidance and support."
        ></SectionIntro>
        <Carousel
          responsive={{
            desktop: {
              breakpoint: { max: 4000, min: 1300 },
              items: 3,
              partialVisibilityGutter: 0,
            },
            tablet: {
              breakpoint: { max: 1300, min: 860 },
              items: 2,
              partialVisibilityGutter: 0,
            },
            mobile: {
              breakpoint: { max: 860, min: 0 },
              items: 1,
              partialVisibilityGutter: 0,
            },
          }}
          arrows={true}
          customLeftArrow={<CustomLeftArrow mobileHidden />}
          customRightArrow={<CustomRightArrow mobileHidden />}
          itemClass="px-5 lg:px-9 hover:scale-[105%] transition-transform duration-300"
          keyBoardControl
          partialVisible
          className="pt-16 sm:pb-[6rem]"
        >
          {testimonials.map((t, index) => {
            return (
              <a
                key={t.id || index}
                href={t.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.text}
              >
                <div className="max-h-[270px] min-h-[300px] border flex flex-col justify-end items-start rounded-[20px] border-[#f4a53c] px-4 pb-10 min-[1024px]:max-[1065px]:pb-5 min-[1301px]:max-[1352px]:pb-5 min-[1301px]:max-[1352px]:px-5">
                  <div className="flex flex-row items-center gap-2 absolute top-4 right-10 sm:right-14">
                    <Image
                      className="h-[2rem] w-[2rem]"
                      src="/images/google.png"
                      alt="Google logo"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                    {Array.from({ length: t.rating }, (_, index) => (
                      <div key={index}>{solidStarIcon}</div>
                    ))}
                    {Array.from({ length: 5 - t.rating }, (_, index) => (
                      <div key={index}>{blankStarIcon}</div>
                    ))}
                  </div>
                  <div className="absolute flex items-center justify-center top-[-15px] left-[15px] w-[80px] h-[80px] bg-[#f4a53c] rounded-full text-white text-3xl font-bold">
                    {t.name[0]}
                  </div>
                  <p className="text-[#f4a53c] font-semibold max-sm:text-2xl pb-2">
                    {t.name}
                  </p>
                  <p className="">{t.text}</p>
                </div>
              </a>
            );
          })}
        </Carousel>
      </section>
    </main>
  );
}
