"use client";
import { SectionIntro } from "@/components/SectionIntro";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import { ScrollingLogos } from "@/components/ScrollingLogos";
import { ScrollingServices } from "@/components/ScrollingServices";
import { ConnectButton } from "@/components/ConnectButton";
import Image from "next/image";

const tickIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
  >
    <mask
      id="mask0_309_204"
      style={{ maskType: "luminance" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="30"
      height="30"
    >
      <path
        d="M14.75 28.5C16.556 28.5022 18.3447 28.1476 20.0132 27.4564C21.6817 26.7653 23.1972 25.7513 24.4726 24.4726C25.7513 23.1972 26.7653 21.6817 27.4564 20.0132C28.1476 18.3447 28.5022 16.556 28.5 14.75C28.5022 12.944 28.1476 11.1554 27.4564 9.48685C26.7653 7.81833 25.7513 6.30282 24.4726 5.02739C23.1972 3.74875 21.6817 2.73472 20.0132 2.04358C18.3447 1.35243 16.556 0.997783 14.75 1.00001C12.944 0.997783 11.1554 1.35243 9.48685 2.04358C7.81833 2.73472 6.30282 3.74875 5.02739 5.02739C3.74875 6.30282 2.73472 7.81833 2.04358 9.48685C1.35243 11.1554 0.997783 12.944 1.00001 14.75C0.997783 16.556 1.35243 18.3447 2.04358 20.0132C2.73472 21.6817 3.74875 23.1972 5.02739 24.4726C6.30282 25.7513 7.81833 26.7653 9.48685 27.4564C11.1554 28.1476 12.944 28.5022 14.75 28.5Z"
        fill="white"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9.25 14.75L13.375 18.875L21.625 10.625"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </mask>
    <g mask="url(#mask0_309_204)">
      <path d="M-1.75 -1.75H31.25V31.25H-1.75V-1.75Z" fill="#F4A53C" />
    </g>
  </svg>
);

const Country = ({ data, heroImg, dropdownItems }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown((prevIndex) => (prevIndex === index ? null : index)); // Toggle individual dropdowns
  };
  const [formData, setFormData] = useState({
    yourName: "",
    yourEmail: "",
    yourNumber: "",
    referralName: "",
    referralEmail: "",
    referralNumber: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value || "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Email sent successfully!");
        setTimeout(() => setStatus(""), 3000);
        setFormData({
          yourName: "",
          yourEmail: "",
          yourNumber: "",
          referralName: "",
          referralEmail: "",
          referralNumber: "",
        });
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <main>
      {/* HERO SECTIION */}
      <section
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0.25)),url(${heroImg})`,
          backgroundPosition: "left",
        }}
        className={
          "max-w-[1920px] mx-auto py-[10.5rem] grid sm:grid-cols-5 items-start bg-cover bg-center px-5 md:px-20 lg:px-[10rem] max-sm:pb-14"
        }
      >
        <div className="col-span-3 relative -top-14">
          <div>
            <h1 className="text-4xl sm:text-5xl xl:text-5xl/[1.25] font-bold text-[#6c6d6d] max-w-[70rem]">
              {data.heroSection.title[0]}
              <span className="text-[#f4a53c]">
                {data.heroSection.title[1]}
              </span>
            </h1>
            <p className="mt-8 text-[#2d2d2d] max-w-[30rem] text-md sm:text-lg/[1.5]">
              {data.heroSection.desc}
            </p>
          </div>
          <div className="max-sm:pb-[6rem]">
            <ConnectButton className={"relative -bottom-[4rem]"} />
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="max-w-[1920px] mx-auto flex flex-row flex-wrap justify-evenly max-sm:justify-between items-start py-[5rem] px-5 md:px-5 lg:px-[10rem] md:divide-x-2 divide-solid divide-[#cccccc]">
        {" "}
        {data.statsSection.map((stat, index) => {
          return (
            <div key={index} className="grow max-md:basis-[50%] max-md:my-4">
              <p className="text-3xl lg:text-4xl text-[#f4a53c] font-semibold text-center max-sm:text-left">
                {stat.num}
              </p>
              <p className="text-md text-[#6d6c6c] text-center max-sm:text-left max-sm:w-[8rem]">
                {stat.text}
              </p>
            </div>
          );
        })}
      </section>

      {/* FLAG SECTION */}
      <section className="max-w-[1920px] mx-auto bg-[#f2f2f2] py-[4rem] px-5 md:px-20 lg:px-[10rem]">
        <div className="grid sm:grid-cols-9 justify-between items-start gap-x-10">
          <div className="sm:col-span-5 max-sm:mb-8">
            <SectionIntro
              headingtext1={data.flagSection.title[0]}
              headingtext2={data.flagSection.title[1]}
              headingtext3=""
              paragraph={data.flagSection.desc}
            ></SectionIntro>
          </div>
          <div className="sm:col-span-4 justify-self-center sm:justify-self-end">
            <Image
              className="w-auto h-auto"
              src={data.flagSection.flagImgPath}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              loading="lazy"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-8 mt-8">
          {/* Left Column Dropdowns */}
          <div className="space-y-4">
            {dropdownItems
              .slice(0, dropdownItems.length / 2)
              .map((item, index) => (
                <div
                  key={index}
                  onClick={() => toggleDropdown(index)}
                  className={
                    "flex flex-col bg-white px-9 py-3 text-md sm:text-lg text-[#6d6d6d] shadow-md cursor-pointer " +
                    (openDropdown === index ? "rounded-[25px]" : "rounded-full")
                  }
                >
                  <div className="flex justify-between items-center">
                    <p className="basis-[90%]">{item.title}</p>
                    <span className="basis-[10%] text-right">
                      {openDropdown === index ? "︽" : "︾"}
                    </span>
                  </div>
                  {openDropdown === index && (
                    <div className="mt-3 py-3 border-t border-gray-300">
                      <p className="text-gray-500 text-sm">{item.text}</p>
                    </div>
                  )}
                </div>
              ))}
          </div>
          {/* Right Column Dropdowns */}
          <div className="space-y-4">
            {dropdownItems
              .slice(dropdownItems.length / 2)
              .map((item, index) => (
                <div
                  key={index + dropdownItems.length} // Ensures unique key for second column
                  onClick={() => toggleDropdown(index + dropdownItems.length)}
                  className={
                    "flex flex-col bg-white px-9 py-3 text-md sm:text-lg text-[#6d6d6d] shadow-md cursor-pointer " +
                    (openDropdown === index + dropdownItems.length
                      ? "rounded-[25px]"
                      : "rounded-full")
                  }
                >
                  <div className="flex justify-between items-center">
                    <p className="basis-[90%]">{item.title}</p>
                    <span className="basis-[10%] text-right">
                      {openDropdown === index + dropdownItems.length
                        ? "︽"
                        : "︾"}
                    </span>
                  </div>
                  {openDropdown === index + dropdownItems.length && (
                    <div className="mt-3 py-3 border-t border-gray-300">
                      <p className="text-gray-500 text-sm">{item.text}</p>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-[1920px] mx-auto py-[4rem] px-5 md:px-20 lg:px-[10rem]">
        <div className="flex justify-between max-sm:flex-col items-start">
          <div className="grow max-sm:mb-8">
            <SectionIntro
              headingtext1="Why Choose "
              headingtext2="VAdvisor Overseas"
              headingtext3=""
              paragraph="Navigate your study abroad journey with ease, backed by our comprehensive support services every step of the way."
            ></SectionIntro>
          </div>
          <ConnectButton mobileHidden={true} />
        </div>
        <div className="mt-8 max-sm:mt-4">
          <ScrollingServices />
        </div>
      </section>

      {/* UNIVERSITY CAROUSEL SECTION */}
      <section className="max-w-[1920px] mx-auto py-[4rem] px-5 md:px-20 lg:px-[10rem]">
        <div className="flex justify-between max-sm:flex-col items-start">
          <div className="grow max-sm:mb-8">
            <SectionIntro
              headingtext1={data.universitiesSection.title[0]}
              headingtext2={data.universitiesSection.title[1]}
              headingtext3=""
              paragraph={data.universitiesSection.desc}
            ></SectionIntro>
          </div>
          <ConnectButton mobileHidden={true} />
        </div>
        <Carousel
          responsive={{
            superLargeDesktop: {
              breakpoint: { max: 4000, min: 1501 },
              items: 3,
            },
            desktop: {
              breakpoint: { max: 1501, min: 1024 },
              items: 2,
            },
            tablet: {
              breakpoint: { max: 1024, min: 640 },
              items: 2,
            },
            mobile: {
              breakpoint: { max: 640, min: 0 },
              items: 1,
            },
          }}
          arrows={true}
          className="mt-12"
          itemClass=""
        >
          {data.universitiesSection.topUnis.map((college, index) => {
            return (
              <div
                key={index}
                className="flex justify-center items-center mx-2"
              >
                <div className="w-fit h-fit inline-block bg-gradient-to-t from-black to-60% to-transparent z-2 rounded-lg">
                  <Image
                    draggable="false"
                    src={college.path}
                    alt=""
                    className="w-[380px] h-[235px] relative object-cover -z-10 rounded-lg"
                    height={0}
                    width={0}
                    sizes="100vw"
                    loading="lazy"
                  />
                </div>{" "}
                <div className="absolute bottom-2 mx-auto px-3 flex sm:max-lg:flex-col flex-row justify-between w-full max-w-[380px] z-1">
                  <span className="text-sm sm:text-md text-white">
                    {college.name}
                  </span>
                  <span className="text-[0.75rem] lg:text-sm text-white uppercase">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      className="inline"
                    >
                      <path
                        d="M7.5 7.1875C7.0856 7.1875 6.68817 7.02288 6.39515 6.72985C6.10212 6.43683 5.9375 6.0394 5.9375 5.625C5.9375 5.2106 6.10212 4.81317 6.39515 4.52015C6.68817 4.22712 7.0856 4.0625 7.5 4.0625C7.9144 4.0625 8.31183 4.22712 8.60485 4.52015C8.89788 4.81317 9.0625 5.2106 9.0625 5.625C9.0625 5.83019 9.02208 6.03337 8.94356 6.22294C8.86504 6.41251 8.74995 6.58476 8.60485 6.72985C8.45976 6.87495 8.28751 6.99004 8.09794 7.06856C7.90837 7.14708 7.70519 7.1875 7.5 7.1875ZM7.5 1.25C6.33968 1.25 5.22688 1.71094 4.40641 2.53141C3.58594 3.35188 3.125 4.46468 3.125 5.625C3.125 8.90625 7.5 13.75 7.5 13.75C7.5 13.75 11.875 8.90625 11.875 5.625C11.875 4.46468 11.4141 3.35188 10.5936 2.53141C9.77312 1.71094 8.66032 1.25 7.5 1.25Z"
                        fill="white"
                      />
                    </svg>{" "}
                    {college.location}
                  </span>
                </div>
              </div>
            );
          })}
        </Carousel>
      </section>

      {/* COSTS SECTION */}
      <section className="max-w-[1920px] mx-auto py-[4rem] px-5 md:px-20 lg:px-[10rem] bg-[#f2f2f2] grid lg:grid-cols-7 gap-16">
        <div className="flex flex-col justify-center items-start col-span-3">
          <div className="basis-[50%] max-sm:mb-8">
            <SectionIntro
              headingtext1={data.costsSection.title[0]}
              headingtext2={data.costsSection.title[1]}
              headingtext3=""
              paragraph={data.costsSection.desc}
            ></SectionIntro>
          </div>
          <ConnectButton mobileHidden={true} />
        </div>
        <div className="col-span-4">
          <div>
            <p className="text-lg text-[#6d6d6d] text-center">Tuition Fees</p>
            {data.costsSection.tuitionFees.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between bg-white px-8 lg:px-16 py-5 my-4 text-md sm:text-lg text-[#6d6d6d] rounded-full shadow-md">
                  <p className="max-sm:basis-[40%] font-semibold">
                    {item.title}
                  </p>
                  <span className="max-sm:basis-[60%] text-right">
                    {item.amt}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div>
            <p className="text-lg text-[#6d6d6d] text-center mt-10">
              Living Expenses
            </p>
            {data.costsSection.livingExpenses.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between bg-white px-8 lg:px-16 py-5 my-4 text-md sm:text-lg text-[#6d6d6d] rounded-full shadow-md">
                  <p className="max-sm:basis-[40%] font-semibold">
                    {item.title}
                  </p>
                  <span className="max-sm:basis-[60%] text-right">
                    {item.amt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOP COURSES SECTION */}
      <section className="max-w-[1920px] mx-auto grid grid-rows-5">
        <div className="bg-[url(/images/library.webp)] object-cover bg-center brightness-[70%] row-span-1 sm:row-span-2"></div>
        <div className="py-[4rem] px-5 md:px-20 lg:px-[10rem] row-span-4 sm:row-span-3">
          <div className="flex justify-between max-sm:flex-col items-start">
            <div className="grow max-sm:mb-8">
              <SectionIntro
                headingtext1={data.topCoursesSection.title[0]}
                headingtext2={data.topCoursesSection.title[1]}
                headingtext3=""
                paragraph={data.topCoursesSection.desc}
              ></SectionIntro>
            </div>
            <ConnectButton mobileHidden={true} />
          </div>
          <div className="grid grid-cols-2 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-6 mt-8">
            {data.topCoursesSection.topCourses.map((course, index) => (
              <div
                key={index}
                className="flex gap-3 text-[#585858] text-md sm:text-lg"
              >
                <div className="basis-7%">{tickIcon}</div>
                <span>{course.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCROLLING LOGOS SECTION */}
      <section className="max-w-[1920px] mx-auto bg-white sm:py-[3rem]">
        <ScrollingLogos homePage={false} logoPath={data.logos} />
      </section>

      {/* SCHOLARSHIPS SECTION */}
      <section className="max-w-[1920px] mx-auto py-[4rem] px-5 md:px-20 lg:px-[10rem] bg-white grid lg:grid-cols-7 gap-10">
        <div className="flex flex-col justify-center items-start col-span-3">
          <div className="basis-[50%] mb-8">
            <SectionIntro
              headingtext1={data.scholarshipsSection.title[0]}
              headingtext2={data.scholarshipsSection.title[1]}
              headingtext3=""
              paragraph={data.scholarshipsSection.desc}
            ></SectionIntro>
          </div>
          <ConnectButton />
        </div>
        <div className="col-span-4">
          <div className="grid grid-cols-2 grid-rows-4 gap-4 justify-center items-center auto-rows-max mt-8">
            {data.scholarshipsSection.scholarships.map((schol, index) => (
              <div
                key={index}
                className="flex gap-3 text-[#585858] text-md sm:text-lg"
              >
                <div className="basis-7%">{tickIcon}</div>
                <span>{schol.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
export default Country;
