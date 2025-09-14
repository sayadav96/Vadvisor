"use client";
import Link from "next/link";
import { SectionIntro } from "@/components/SectionIntro";
import { ConnectButton } from "@/components/ConnectButton";
import { ScrollingLogos } from "@/components/ScrollingLogos";
import { useState } from "react";
import Image from "next/image";

const services = [
  {
    path: "bg-[url(/images/books.webp)] rounded-e-md",
    title1: "Study ",
    title2: " Abroad Courses",
    text: "Our specialized study abroad courses prepare students for success in an international academic setting. Covering cultural adaptation, essential study skills, and new academic systems, these courses help ease the transition and enhance learning outcomes. Each program is designed to tackle common challenges, offering valuable insights that support students both academically and personally.",
  },
  {
    path: "bg-[url(/images/student-building.webp)] rounded-s-md",
    title1: "Students ",
    title2: " Accommodations",
    text: "VAdvisor helps students with their trusted partners make finding the right accommodation effortless. Whether you prefer a cozy apartment or a student residence, we ensure a hassle-free housing experience, allowing you to focus on your studies and enjoy your time abroad!",
  },
  {
    path: "bg-[url(/images/money-jar.webp)] rounded-e-md",
    title1: "University ",
    title2: " Deposits/Remittance",
    text: "Handling international payments can be challenging, especially for students. VAdvisor streamlines the remittance process, ensuring secure and timely transfers for tuition, deposits, and other university fees. We collaborate with trusted financial partners to offer safe, transparent, and hassle-free transactions, giving students peace of mind to focus on their studies.",
  },
  {
    path: "bg-[url(/images/flight-ticket.webp)] rounded-s-md",
    title1: "Flight ",
    title2: "Booking",
    text: "VAdvisor partners with top flight booking platforms to help students find affordable and flexible travel options. With access to exclusive student discounts, real-time price comparisons, and personalized support, we ensure a seamless booking experience. Plus, we assist with accommodation and other travel needs, making your study abroad journey stress-free.",
  },
  {
    path: "bg-[url(/images/health-insurance.webp)] rounded-e-md",
    title1: "Health Insurance & ",
    title2: "Travel Insurance",
    text: "VAdvisor helps students secure the right health and travel insurance for their study abroad journey. Partnering with trusted providers, we ensure coverage for medical expenses, emergencies, trip interruptions, and other travel risks. With flexible plans tailored to destination requirements, we make navigating insurance simple, giving students peace of mind so they can focus on their studies.",
  },
  {
    path: "bg-[url(/images/forex.webp)] rounded-s-md",
    title1: "Forex Card & ",
    title2: "Currency Exchange",
    text: "VAdvisor simplifies managing finances abroad by helping students with Forex cards and currency exchange. Through our trusted partners, we provide secure, prepaid Forex cards that support multiple currencies, reducing the risks of carrying cash. We also ensure students get competitive exchange rates for everyday expenses, tuition, and emergencies. With our expert guidance, managing foreign currency becomes hassle-free, allowing students to focus on their studies with confidence.",
  },
  {
    path: "bg-[url(/images/currency.webp)] rounded-e-md",
    title1: "Money ",
    title2: "Transfer",
    text: "VAdvisor, in partnership with Flywire, offers seamless money transfers designed specifically for students studying abroad. Unlike traditional banks, our service is tailored to your needs, ensuring secure and hassle-free transactions. With us handling your transfers, you can focus on your education while we take care of your finances with ease and reliability.",
  },
];

const steps = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="38"
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
    title: "Consult With Our Loan Experts to Check Your Eligibility",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="38"
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
    title: "Identify the Best Banks for Your Education Loan",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="33"
        viewBox="0 0 33 33"
        fill="none"
      >
        <g clipPath="url(#clip0_754_62)">
          <path
            d="M15.6868 0.168262L1.24931 6.35576C0.346963 6.74248 -0.155772 7.70928 0.044033 8.66318C0.243838 9.61709 1.08173 10.3132 2.06142 10.3132V10.8288C2.06142 11.686 2.75106 12.3757 3.60829 12.3757H29.3895C30.2468 12.3757 30.9364 11.686 30.9364 10.8288V10.3132C31.9161 10.3132 32.7604 9.62354 32.9538 8.66318C33.1472 7.70283 32.6444 6.73604 31.7485 6.35576L17.311 0.168262C16.7954 -0.0508789 16.2024 -0.0508789 15.6868 0.168262ZM8.24892 14.4382H4.12392V27.0903C4.08524 27.1097 4.04657 27.1355 4.0079 27.1612L0.91415 29.2237C0.160049 29.7265 -0.181553 30.6675 0.0827049 31.5376C0.346963 32.4077 1.15263 33.0007 2.06142 33.0007H30.9364C31.8452 33.0007 32.6444 32.4077 32.9087 31.5376C33.1729 30.6675 32.8378 29.7265 32.0772 29.2237L28.9835 27.1612C28.9448 27.1355 28.9061 27.1161 28.8675 27.0903L28.8739 14.4382H24.7489V26.8132H22.1708V14.4382H18.0458V26.8132H14.952V14.4382H10.827V26.8132H8.24892V14.4382ZM16.4989 4.12568C17.0459 4.12568 17.5705 4.34298 17.9573 4.72978C18.3441 5.11657 18.5614 5.64118 18.5614 6.18818C18.5614 6.73519 18.3441 7.2598 17.9573 7.64659C17.5705 8.03339 17.0459 8.25068 16.4989 8.25068C15.9519 8.25068 15.4273 8.03339 15.0405 7.64659C14.6537 7.2598 14.4364 6.73519 14.4364 6.18818C14.4364 5.64118 14.6537 5.11657 15.0405 4.72978C15.4273 4.34298 15.9519 4.12568 16.4989 4.12568Z"
            fill="#F4A53C"
          />
        </g>
        <defs>
          <clipPath id="clip0_754_62">
            <rect width="33" height="33" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Apply to Multiple Banks for the Best Rate Comparison",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="33"
        viewBox="0 0 25 34"
        fill="none"
      >
        <g clipPath="url(#clip0_754_69)">
          <path
            d="M4.16667 0C1.86849 0 0 1.90586 0 4.25V29.75C0 32.0941 1.86849 34 4.16667 34H20.8333C23.1315 34 25 32.0941 25 29.75V10.625H16.6667C15.5143 10.625 14.5833 9.67539 14.5833 8.5V0H4.16667ZM16.6667 0V8.5H25L16.6667 0ZM7.29167 17H17.7083C18.2812 17 18.75 17.4781 18.75 18.0625C18.75 18.6469 18.2812 19.125 17.7083 19.125H7.29167C6.71875 19.125 6.25 18.6469 6.25 18.0625C6.25 17.4781 6.71875 17 7.29167 17ZM7.29167 21.25H17.7083C18.2812 21.25 18.75 21.7281 18.75 22.3125C18.75 22.8969 18.2812 23.375 17.7083 23.375H7.29167C6.71875 23.375 6.25 22.8969 6.25 22.3125C6.25 21.7281 6.71875 21.25 7.29167 21.25ZM7.29167 25.5H17.7083C18.2812 25.5 18.75 25.9781 18.75 26.5625C18.75 27.1469 18.2812 27.625 17.7083 27.625H7.29167C6.71875 27.625 6.25 27.1469 6.25 26.5625C6.25 25.9781 6.71875 25.5 7.29167 25.5Z"
            fill="#F4A53C"
          />
        </g>
        <defs>
          <clipPath id="clip0_754_69">
            <rect width="25" height="34" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Submit Your Documents - We'll Handle the Rest",
  },
];

const dropdownItems = [
  {
    title: "Competitive Interest Rates",
    text: "We research, compare, and negotiate loan options from NBFCs, public, and private banks to ensure you receive the best possible interest rate.",
  },
  {
    title: "Timely Approvals",
    text: "We understand the importance of meeting college deadlines! Our loan experts ensure your education loan is approved well before your deadlines.",
  },
  {
    title: "Simplified Documentation",
    text: "Our experts handle the entire documentation and application process, keeping you informed every step of the way.",
  },
  {
    title: "Pre-Approval Assistance",
    text: "Get pre-approvals for your education loan based on your standardized test scores (for US-bound students), giving you peace of mind before you apply.",
  },
  {
    title: "Flexible Loan Options",
    text: "Whether you need a collateral or non-collateral loan, we work with top NBFCs and private banks to offer you the best options for studying abroad.",
  },
  {
    title: "Seamless Support",
    text: "From start to finish, our experts connect you directly with the banks and guide you through every step of the loan process, ensuring a smooth experience.",
  },
];

const Page = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown((prevIndex) => (prevIndex === index ? null : index)); // Toggle individual dropdowns
  };

  return (
    <main>
      {/* HERO SECTIION */}
      <section
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)),url('/images/services-hero-bg.webp')`,
        }}
        className="max-w-[1920px] mx-auto overflow-hidden grid sm:grid-cols-[repeat(6,auto)_repeat(4,10rem)] grid-flow-row sm:grid-flow-col pt-10 max-sm:py-[4rem] bg-bottom bg-cover bg-[#ffffff] bg-no-repeat md:pl-20 lg:pl-[10rem]"
      >
        <div className="col-span-6 px-5">
          <h1 className="text-4xl sm:text-5xl font-bold pt-6 sm:pt-12 pb-8 text-[#585858]">
            VAdvisor Education Loan:{" "}
            <span className="text-[#f4a53c]">
              Empowering Your Dreams, Funding Your Future!
            </span>
          </h1>
          <p className="">
            VAdvisor partners with leading financial institutions to simplify
            study abroad financing. From comparing loan options to guiding you
            through eligibility, interest rates, and repayment terms, we ensure
            a smooth and transparent process—so you can focus on your studies
            with confidence.
          </p>
          <ConnectButton mobileHidden className={"mt-[4rem]"} />
        </div>
        <div className="col-span-4">
          <Image
            src="/images/services-hero-img2.webp"
            alt=""
            className="w-[39rem] h-auto relative top-[-4rem] right-[-1rem] max-sm:hidden"
            width={0}
            height={0}
            sizes="100vw"
            loading="lazy"
          />
        </div>
      </section>
      {/* REFERRAL STEPS SECTION */}
      <section className="max-w-[1920px] mx-auto pt-[4rem] pb-[3rem] bg-[#f2f2f2] ">
        <div className="px-5 md:px-20 lg:px-[10rem]">
          <SectionIntro
            className=""
            headingtext1="How Vadvisor Makes"
            headingtext2="Financing Effortless"
          />
        </div>
        <div className="w-full px-5 md:px-20 xl:px-[10rem] py-[2rem] mt-8">
          <div className="mx-auto grid sm:grid-cols-4 gap-8 justify-center">
            {steps.map((step, index) => (
              <div key={index} className="text-center sm:w-40">
                <div className="flex justify-center mb-4">{step.icon}</div>
                <p className="text-lg font-normal text-gray-600 max-sm:w-[17rem]">
                  {step.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-[1920px] mx-auto py-[5rem] px-5 md:px-20 lg:px-[10rem]">
        <div className="flex flex-between max-sm:flex-col items-start">
          <div className="grow max-sm:mb-8">
            <SectionIntro
              subHeadingText="Our Partners"
              headingtext1="Trusted "
              headingtext2="Financial Partners"
              headingtext3=""
              paragraph="At VAdvisor, we partner with top financial institutions to offer flexible, competitive education loans. Our trusted partners ensure a smooth, hassle-free process, helping you finance your study abroad journey with ease."
            ></SectionIntro>
          </div>
          <ConnectButton mobileHidden={true} />
        </div>
        <div className="mt-10">
          <ScrollingLogos
            logoPath={[
              { path: "/images/services-logos/axis-bank.webp" },
              { path: "/images/services-logos/auxilo.webp" },
              { path: "/images/services-logos/avanse.webp" },
              { path: "/images/services-logos/unicred.webp" },
              { path: "/images/services-logos/gyandhan.webp" },
              { path: "/images/services-logos/credila.webp" },
              { path: "/images/services-logos/union-bank.webp" },
            ]}
          />
        </div>
      </section>
      <section className="max-w-[1920px] mx-auto bg-[#f2f2f2] py-[4rem] px-5 md:px-20 lg:px-[10rem]">
        <div className="grid sm:grid-cols-10">
          <div className="sm:col-span-5 max-sm:mb-8">
            <SectionIntro
              headingtext1={"Expert Help for "}
              headingtext2={"Study Loans"}
              headingtext3=""
              paragraph={
                "VAdvisor simplifies the education loan process by connecting you with trusted financial institutions. We guide you through loan options, eligibility, interest rates, and repayment terms, ensuring you secure the best funding for your study abroad journey."
              }
            ></SectionIntro>
            <ConnectButton className={"mt-[4rem]"} />
          </div>
          <div className="sm:col-span-5">
            <div className="flex flex-col gap-4">
              {dropdownItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => toggleDropdown(index)}
                  className={
                    "grow flex flex-col bg-white px-9 py-3 text-md sm:text-lg text-[#6d6d6d] shadow-md cursor-pointer " +
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
          </div>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={index}
          className={`max-w-[1920px] grid sm:grid-cols-10 sm:grid-rows-[30rem] max-sm:grid-cols-1 max-sm:grid-rows-7 ${
            index % 2 !== 0 ? "bg-[#f2f2f2]" : ""
          } py-[3rem] mx-auto`}
        >
          <div
            className={`${
              index % 2 !== 0 ? "sm:order-last" : ""
            } overflow-hidden ${
              service.path
            } sm:col-span-4 max-sm:row-span-3 bg-cover bg-right bg-no-repeat`}
          ></div>
          <div className="sm:col-span-6 self-center max-sm:row-span-4">
            <div className="py-[2.5rem] sm:py-[4rem] px-5 sm:px-[6rem]">
              <SectionIntro
                headingtext1={service.title1}
                headingtext2={service.title2}
                paragraph={service.text}
              />
              {index === 1 && (
                <a
                  href="https://amberstudent.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Amber Student Accomodation"
                >
                  <Image
                    src={"/images/services-logos/amber.webp"}
                    alt=""
                    className="h-auto w-[10rem] mt-8 hover:scale-[110%] transition-transform duration-300"
                    height={0}
                    width={0}
                    sizes="100vw"
                    loading="lazy"
                  />
                </a>
              )}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};

export default Page;
