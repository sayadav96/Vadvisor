"use client";
import { SectionIntro } from "@/components/SectionIntro";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import { ScrollingLogos } from "@/components/ScrollingLogos";
import { ScrollingServices } from "@/components/ScrollingServices";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import confetti from "canvas-confetti";

const arrowIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="73"
    height="16"
    viewBox="0 0 73 16"
    fill="none"
  >
    <path
      d="M72.7071 8.70711C73.0976 8.31658 73.0976 7.68342 72.7071 7.29289L66.3431 0.928932C65.9526 0.538408 65.3195 0.538408 64.9289 0.928932C64.5384 1.31946 64.5384 1.95262 64.9289 2.34315L70.5858 8L64.9289 13.6569C64.5384 14.0474 64.5384 14.6805 64.9289 15.0711C65.3195 15.4616 65.9526 15.4616 66.3431 15.0711L72.7071 8.70711ZM0 9H72V7H0V9Z"
      fill="#2E2E2E"
      fillOpacity="0.3"
    />
  </svg>
);

/* Data for the steps section */
const steps = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.3333 11.6667C13.3333 9.89856 14.0357 8.20286 15.286 6.95262C16.5362 5.70238 18.2319 5 20 5C21.7681 5 23.4638 5.70238 24.714 6.95262C25.9643 8.20286 26.6667 9.89856 26.6667 11.6667C26.6667 13.4348 25.9643 15.1305 24.714 16.3807C23.4638 17.631 21.7681 18.3333 20 18.3333C18.2319 18.3333 16.5362 17.631 15.286 16.3807C14.0357 15.1305 13.3333 13.4348 13.3333 11.6667ZM13.3333 21.6667C11.1232 21.6667 9.00358 22.5446 7.44078 24.1074C5.87797 25.6702 5 27.7899 5 30C5 31.3261 5.52678 32.5979 6.46447 33.5355C7.40215 34.4732 8.67392 35 10 35H30C31.3261 35 32.5979 34.4732 33.5355 33.5355C34.4732 32.5979 35 31.3261 35 30C35 27.7899 34.122 25.6702 32.5592 24.1074C30.9964 22.5446 28.8768 21.6667 26.6667 21.6667H13.3333Z"
          fill="#F4A53C"
        />
      </svg>
    ),
    title: "Step 1",
    description: "Refer a friend",
  },
  {
    icon: arrowIcon,
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 43 43"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.375 34.0417C5.375 34.992 5.75253 35.9035 6.42453 36.5755C7.09654 37.2475 8.00797 37.625 8.95833 37.625L34.0417 37.625C34.992 37.625 35.9035 37.2475 36.5755 36.5755C37.2475 35.9035 37.625 34.992 37.625 34.0417V23.2917C37.625 22.3413 37.2475 21.4299 36.5755 20.7579C35.9035 20.0859 34.992 19.7083 34.0417 19.7083H23.2917V8.95833C23.2917 8.00797 22.9141 7.09654 22.2421 6.42454C21.5701 5.75253 20.6587 5.375 19.7083 5.375H8.95833C8.00797 5.375 7.09654 5.75253 6.42453 6.42454C5.75253 7.09654 5.375 8.00797 5.375 8.95833L5.375 34.0417ZM21.5 21.5L8.95833 21.5L8.95833 34.0417H21.5L21.5 21.5Z"
          fill="#F4A53C"
        />
      </svg>
    ),
    title: "Step 2",
    description: "We guide their study abroad journey",
  },
  {
    icon: arrowIcon,
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <g clipPath="url(#clip0_285_194)">
          <path
            d="M24.4312 18.6562C24.4312 18.6562 24.4312 18.6625 24.4375 18.6625C25.0125 19.875 25.3375 21.2313 25.3375 22.6625C25.3312 27.8188 21.1562 32 16 32C10.8438 32 6.66875 27.8188 6.66875 22.6688C6.66875 21.2375 6.99375 19.8813 7.56875 18.6688C7.675 18.4438 7.79375 18.2188 7.91875 18C8.19375 17.525 8.50625 17.0813 8.85625 16.6688C10.5687 14.6313 13.1375 13.3375 16.0063 13.3375C18.1063 13.3375 20.0438 14.0312 21.6063 15.2063C22.175 15.6375 22.6938 16.125 23.1562 16.675C23.5063 17.0875 23.8188 17.5375 24.0938 18.0063C24.2188 18.2188 24.3312 18.4438 24.4375 18.6625L24.4312 18.6562ZM26.0812 17.4813C24.2 13.8313 20.3937 11.3313 16 11.3313C11.6062 11.3313 7.8 13.8313 5.91875 17.4813L0 12.6687L16 0L32 12.6687L26.0812 17.4875V17.4813Z"
            fill="#F4A53C"
          />
        </g>
        <defs>
          <clipPath id="clip0_285_194">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Step 3",
    description: "Get student enrolled in University",
  },
  {
    icon: arrowIcon,
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 35 35"
        fill="none"
      >
        <path
          d="M16.4056 2.91699C10.2529 2.92283 7.07081 3.03366 5.05102 5.05199C3.03268 7.07324 2.92185 10.2539 2.91602 16.4066H10.0823C9.55839 15.7518 9.18185 14.9917 8.97831 14.1782C8.19518 11.0399 11.0389 8.19616 14.1773 8.97928C15.0114 9.18783 15.7668 9.57137 16.4056 10.0832V2.91699ZM2.91602 18.5941C2.92185 24.7453 3.03268 27.9274 5.05102 29.9472C7.07227 31.967 10.2529 32.0764 16.4056 32.0837V20.5964C15.8304 21.7477 14.9458 22.716 13.851 23.3926C12.7563 24.0693 11.4947 24.4276 10.2077 24.4274C9.9176 24.4274 9.6394 24.3122 9.43428 24.1071C9.22917 23.9019 9.11393 23.6237 9.11393 23.3337C9.11393 23.0436 9.22917 22.7654 9.43428 22.5603C9.6394 22.3551 9.9176 22.2399 10.2077 22.2399C11.2747 22.2401 12.3106 21.8803 13.1477 21.2187C13.9848 20.557 14.5742 19.6323 14.8204 18.5941H2.91602ZM18.5931 32.0837C24.7443 32.0764 27.9264 31.967 29.9462 29.9472C31.966 27.9289 32.0754 24.7453 32.0827 18.5941H20.1783C20.4245 19.6323 21.0139 20.557 21.851 21.2187C22.6881 21.8803 23.724 22.2401 24.791 22.2399C25.0811 22.2399 25.3593 22.3551 25.5644 22.5603C25.7695 22.7654 25.8848 23.0436 25.8848 23.3337C25.8848 23.6237 25.7695 23.9019 25.5644 24.1071C25.3593 24.3122 25.0811 24.4274 24.791 24.4274C23.504 24.4276 22.2424 24.0693 21.1477 23.3926C20.0529 22.716 19.1683 21.7477 18.5931 20.5964V32.0837ZM32.0827 16.4066C32.0754 10.2539 31.966 7.07178 29.9462 5.05199C27.9279 3.03366 24.7443 2.92283 18.5931 2.91699V10.0832C19.2475 9.55955 20.007 9.18302 20.82 8.97928C23.9598 8.1947 26.805 11.0385 26.0189 14.1782C25.8158 14.9916 25.4398 15.7517 24.9164 16.4066H32.0827Z"
          fill="#F4A53C"
        />
        <path
          d="M13.6479 11.1025C14.4354 11.3 15.1345 11.7547 15.6343 12.3945C16.1342 13.0343 16.4061 13.8227 16.4071 14.6346V16.4065H14.6352C13.8233 16.4055 13.0349 16.1336 12.3951 15.6338C11.7552 15.1339 11.3006 14.4348 11.1031 13.6473C11.0157 13.2958 11.0207 12.9277 11.1176 12.5787C11.2144 12.2296 11.4 11.9116 11.6561 11.6555C11.9122 11.3994 12.2302 11.2139 12.5792 11.117C12.9283 11.0201 13.2964 11.0151 13.6479 11.1025ZM18.5946 14.6346V16.4065H20.3664C22.0362 16.4065 23.4931 15.269 23.8985 13.6473C23.9861 13.2957 23.9811 12.9273 23.8842 12.5782C23.7872 12.229 23.6015 11.9109 23.3452 11.6547C23.0889 11.3985 22.7707 11.213 22.4214 11.1163C22.0722 11.0195 21.7039 11.0148 21.3523 11.1025C20.565 11.3003 19.8662 11.7551 19.3667 12.3949C18.8672 13.0347 18.5954 13.8229 18.5946 14.6346Z"
          fill="#F4A53C"
        />
      </svg>
    ),
    title: "Step 4",
    description: "Win exciting gifts!",
  },
];

const services = [
  { id: 1, text: "Scholarships" },
  { id: 2, text: "Fee Remittance" },
  { id: 3, text: "SOP & LOR Writing" },
  { id: 4, text: "Air Tickets" },
  { id: 5, text: "Travel Insurance" },
];

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    yourName: "",
    yourEmail: "",
    yourNumber: "",
    referralName: "",
    referralEmail: "",
    referralNumber: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value || "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    console.log("form data before sending it to api: ", formData);

    try {
      const response = await axios.post("/api/referral", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
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
        setShowPopup(true); // Show the thank you popup
        setTimeout(() => setShowPopup(false), 3000); // Hide the popup after 3 seconds
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred. Please try again.");
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      {/* HERO SECTIION */}
      <section className="max-w-[1920px] mx-auto grid sm:grid-cols-10 grid-flow-row sm:grid-flow-col py-10 bg-white md:px-20 lg:px-[10rem]">
        <div className="col-span-4 px-5">
          <h1 className="text-4xl font-bold pt-6 sm:pt-12 pb-8 text-[#585858]">
            Refer and Earn
            <br />
            <span className="text-[#f4a53c]"> Rewards upto Rs. 10,000</span>
          </h1>
          <p className="">
            Refer your friends to us and they’ll receive expert guidance and
            personalized support tailored to their needs. Plus, you’ll be
            rewarded for helping them take the first step toward achieving their
            goals and dreams.
          </p>
          <Link href="#referral-form">
            <button className="lg:block px-5 py-2 mt-12 bg-[#F4A53C] text-white rounded-full border-2 border-[#F4A53C] focus:outline-none min-w-[180px] max-sm:hidden">
              Join the Referral Program
            </button>
          </Link>
        </div>
        <div className="col-span-6">
          <Image
            src="/images/referral-hero-img.webp"
            alt=""
            className="max-sm:h-[20rem] h-auto w-auto max-sm:object-cover sm:w-auto sm:relative max-sm:pt-[1rem] sm:top-10 max-sm:mt-6 max-sm:mx-auto"
            width={0}
            height={0}
            sizes="100vw"
            loading="lazy"
          />
        </div>
      </section>

      {/* REFERRAL STEPS SECTION */}
      <section className="max-w-[1920px] mx-auto  py-[4rem]  bg-white">
        <div className="px-5 md:px-20 lg:px-[10rem]">
          <SectionIntro
            className=""
            subHeadingText="Steps for Referral"
            headingtext1="Student Referral"
            headingtext2="Program"
            headingtext3=""
            paragraph=""
          />
        </div>
        <div className="bg-[#f5f5f5] w-full px-5 md:px-20 xl:px-[10rem] py-[4rem] mt-8">
          <div className="mx-auto grid max-sm:grid-cols-2 max-sm:grid-rows-[1fr_auto_1fr] max-sm:gap-y-4 items-center sm:grid-rows-1 sm:grid-cols-7 sm:items-start sm:col-gap-8">
            {steps.map((step, index) =>
              index % 2 === 0 ? (
                <div
                  key={index}
                  className="text-center sm:text-left sm:w-40 max-sm:w-[10rem]"
                >
                  <div className="flex justify-center sm:justify-start mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-lg text-[#f4a53c] font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{step.description}</p>
                </div>
              ) : (
                <div
                  key={index}
                  className={`${
                    index === 3 ? "max-sm:col-span-3" : ""
                  } h-full flex flex-row items-center justify-center max-sm:scale-0 sm:max-lg:scale-50`}
                >
                  {step.icon}
                </div>
              )
            )}
          </div>
        </div>
        <div className="w-full mx-auto px-5 sm:px-[10%] mt-6">
          {/* Dropdown Header */}
          <div
            onClick={toggleDropdown}
            className="flex justify-between items-center px-4 py-4 border-b border-t border-gray-300 cursor-pointer"
          >
            <span className="text-gray-600">Terms and Conditions</span>
            <span className="text-gray-600 transform transition-transform duration-300">
              {isOpen ? "︽" : "︾"}
            </span>
          </div>

          {/* Dropdown Content */}
          {isOpen && (
            <div className="px-4 py-2 border-t border-gray-300">
              <ul className="text-gray-500 text-sm list-decimal">
                <li className="my-1">
                  Cashback offers are available exclusively for admissions to
                  partner universities.
                </li>
                <li className="my-1">
                  This offer is personal to the customer and is
                  non-transferrable.
                </li>
                <li className="my-1">
                  &nbsp;VAdvisor employees and their families are not eligible
                  for this offer.
                </li>
                <li className="my-1">
                  Students flying for the January intake will receive cash back
                  in March, while those flying for the September intake will
                  receive cash back in December, from VAdvisor.
                </li>
                <li className="my-1">
                  Commission will be distributed based on the first-come,
                  first-served policy.
                </li>
                <li className="my-1">
                  &nbsp;If the referred student is already an existing student
                  with VAdvisor, then they will not be considered as your
                  referral.
                </li>
                <li className="my-1">
                  If a student refers a friend from the same classes / college,
                  the referral will not be considered if there is already an
                  existing contract between the class / college and VAdvisor.
                </li>
                <li className="my-1">
                  A student referring someone who is changing agents may not
                  qualify for ‘Refer and Earn,’ unless the case is reviewed and
                  approved on an individual basis.
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>
      {/* SERVICES CAROUSEL SECTION */}
      <section className="max-w-[1920px] mx-auto">
        <ScrollingServices orangeBackground={true} />
      </section>
      {/* REFERRAL FORM SECTION */}
      <section
        id="referral-form"
        className="max-w-[1920px] mx-auto py-[4rem] px-5 md:px-20 lg:px-[10rem]"
      >
        <SectionIntro
          className=""
          subHeadingText="Form for Referral"
          headingtext1="Student Referral "
          headingtext2="Form"
          headingtext3=""
          paragraph=""
        />
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row md:grid-flow-col gap-6">
            <div>
              <div className="text-gray-700 font-bold mb-2">Your Details</div>
              <div className="grid grid-flow-row grid-cols-2 grid-rows-2 gap-4">
                <input
                  type="text"
                  name="yourName"
                  placeholder="Your Name"
                  value={formData.yourName}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-100 rounded-lg"
                  required
                />
                <input
                  type="tel"
                  name="yourNumber"
                  placeholder="Your Number"
                  value={formData.yourNumber}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-100 rounded-lg"
                  required
                />
                <input
                  type="email"
                  name="yourEmail"
                  placeholder="Your E-mail"
                  value={formData.yourEmail}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-100 rounded-lg col-span-2"
                  required
                />
              </div>
            </div>
            <div>
              <div className="text-gray-700 font-bold mb-2">
                Referral Details
              </div>
              <div className="grid grid-flow-row grid-cols-2 grid-rows-2 gap-4">
                <input
                  type="text"
                  name="referralName"
                  placeholder="Referral's Name"
                  value={formData.referralName}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-100 rounded-lg"
                  required
                />
                <input
                  type="tel"
                  name="referralNumber"
                  placeholder="Referral's Number"
                  value={formData.referralNumber}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-100 rounded-lg"
                  required
                />
                <input
                  type="email"
                  name="referralEmail"
                  placeholder="Referral's E-mail"
                  value={formData.referralEmail}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-100 rounded-lg col-span-2"
                  required
                />
              </div>
            </div>
          </div>
          <div className="mt-6 col-span-2">
            <button
              type="submit"
              className="bg-[#f4a53c] text-white py-3 px-6 rounded-full mt-4"
            >
              Submit Form
            </button>
            {status && <p className="mt-2 text-gray-600">{status}</p>}
          </div>
        </form>
      </section>
      {/* SCROLLING LOGOS SECTION */}
      <section className="max-w-[1920px] mx-auto py-[2rem] sm:py-[4rem] bg-white">
        <ScrollingLogos homePage={true} />
      </section>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[100]">
          <div className="bg-white p-8 rounded-lg shadow-lg z-[99]">
            <h2 className="text-2xl font-bold mb-4 text-[#f4a53c]">
              Thank you!
            </h2>
            <p className="text-black">
              Your form has been submitted successfully.
            </p>
          </div>
        </div>
      )}
    </main>
  );
};

export default Page;
