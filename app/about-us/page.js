"use client";
import { SectionIntro } from "@/components/SectionIntro";
import { useState } from "react";
import { ScrollingLogos } from "@/components/ScrollingLogos";
import { ScrollingServices } from "@/components/ScrollingServices";
import FsLightbox from "fslightbox-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ConnectButton } from "@/components/ConnectButton";
import axios from "axios";
import Image from "next/image";
import confetti from "canvas-confetti";

const coreValues = [
  {
    title: "Excellence",
    text: "Delivering exceptional quality and performance.",
  },
  {
    title: "Commitment",
    text: "Dedicated to achieving long-term success.",
  },
  {
    title: "Knowledge",
    text: "Empowering through expertise and insights.",
  },
];

const certPaths = [
  { path: "/images/certifications/cert-0.webp" },
  { path: "/images/certifications/cert-1.webp" },
  { path: "/images/certifications/cert-2.webp" },
  { path: "/images/certifications/cert-3.webp" },
  { path: "/images/certifications/cert-4.webp" },
  { path: "/images/certifications/cert-5.webp" },
];

const starIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="59"
    height="59"
    viewBox="0 0 59 59"
    fill="none"
  >
    <path
      d="M37.4964 26.277C35.07 23.3762 33.858 21.9258 32.4617 22.147C31.0678 22.3707 30.4164 24.1211 29.1135 27.6217L28.7742 28.5264C28.4055 29.522 28.2186 30.0186 27.8572 30.3849C27.4983 30.7512 27.0017 30.9454 26.0135 31.3338L25.1113 31.6854C21.6278 33.0497 19.8849 33.7332 19.6857 35.127C19.4866 36.5209 20.9641 37.7058 23.9165 40.0707L24.6786 40.6853C25.5194 41.3564 25.9397 41.6932 26.1807 42.1529C26.4265 42.6126 26.4634 43.1461 26.5396 44.2106L26.6109 45.1792C26.8813 48.9232 27.019 50.7964 28.2899 51.4356C29.5609 52.0748 31.1268 51.0546 34.2563 49.0191L35.0651 48.4905C35.955 47.9128 36.4 47.6227 36.9088 47.5391C37.4202 47.458 37.9413 47.5932 38.9763 47.8636L39.9227 48.1095C43.5734 49.0584 45.3999 49.5353 46.3857 48.5348C47.3715 47.5342 46.8602 45.7224 45.8424 42.0939L45.5769 41.1598C45.2893 40.1273 45.1442 39.611 45.2155 39.1022C45.2893 38.5908 45.572 38.1434 46.135 37.2437L46.6512 36.4275C48.6351 33.2685 49.6258 31.6903 48.962 30.4341C48.3007 29.1779 46.4226 29.0746 42.6638 28.873L41.6903 28.8189C40.6234 28.7624 40.0875 28.7329 39.6228 28.4994C39.1558 28.2658 38.8116 27.8528 38.1232 27.0268L37.4964 26.277Z"
      fill="#F4A53C"
    />
    <path
      d="M36.5745 12.702L37.0244 13.9852C37.5185 15.3939 37.7668 16.0994 38.2462 16.6157C38.728 17.1368 39.3869 17.4122 40.707 17.9604L41.9091 18.4619C46.5554 20.3941 48.8785 21.3627 49.1415 23.3367C49.2522 24.1578 48.9768 24.9297 48.3303 25.7902C48.1238 25.7342 47.9156 25.685 47.7059 25.6427C46.4128 25.3796 44.7682 25.2911 43.0916 25.2002L41.887 25.1362L41.3216 25.1043L40.9504 24.6618L40.1735 23.735C39.0919 22.437 38.0348 21.1709 37.0465 20.2909C35.9968 19.3518 34.2416 18.1275 31.8767 18.5061C29.4872 18.8896 28.2138 20.6277 27.5254 21.8667C26.8887 23.0172 26.3159 24.5561 25.7358 26.1122L25.3178 27.2381L25.1408 27.7126C25.0097 27.7617 24.8516 27.824 24.6664 27.8994L23.5454 28.337C21.9966 28.9442 20.4651 29.5416 19.3244 30.198C18.1002 30.9035 16.3744 32.2064 16.0327 34.6057C15.6959 36.9829 16.962 38.7185 17.9183 39.7486C18.6312 40.5131 19.5924 41.3219 20.6175 42.1528C16.7604 43.1976 14.7101 43.5885 13.5449 42.3298C12.2321 40.9138 12.9106 38.3473 14.2701 33.2094L14.6192 31.8819C15.0051 30.4192 15.1993 29.6915 15.1035 28.9663C15.0051 28.2436 14.629 27.6069 13.8768 26.3359L13.1933 25.1805C10.5457 20.7039 9.22313 18.4668 10.1032 16.6845C10.9882 14.9047 13.4933 14.7596 18.5058 14.472L19.8013 14.3982C21.2272 14.3147 21.9376 14.2753 22.5596 13.9435C23.1791 13.6116 23.6388 13.029 24.5582 11.8588L25.394 10.7968C28.6292 6.68399 30.2468 4.62883 32.1053 4.94595C33.9638 5.26308 34.834 7.74108 36.5721 12.6995"
      fill="#F4A53C"
    />
  </svg>
);

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    yourName: "",
    yourNumber: "",
    yourEmail: "",
    studyDestination: "United Kingdom",
    intakeYear: "",
  });

  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value || "" }));
    console.log("form data after change: ", formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    console.log("form data before sending it to api: ", formData);

    try {
      const response = await axios.post(
        "https://vadvisoroverseas.com/mail/contactForm.php",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200) {
        setStatus("Email sent successfully!");
        setTimeout(() => setStatus(""), 3000);
        setFormData({
          yourName: "",
          yourEmail: "",
          yourNumber: "",
          studyDestination: "",
          intakeYear: "",
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
      <section className="max-w-[1920px] mx-auto bg-[url(/images/about-hero-img.webp)] bg-cover bg-center text-center px-5 py-[9rem] md:px-20 lg:px-[10rem] max-sm:pb-14">
        <div className="relative -top-5 max-sm:text-left">
          <h1 className="mx-auto text-4xl sm:text-5xl xl:text-6xl/[1.25] font-bold text-[#6c6d6d] max-w-[70rem]">
            Know more
            <br />
            <span className="text-[#f4a53c]">About Us</span>
          </h1>
          <p className="mx-auto mt-[7%] text-[#6d6c6c] max-w-[45rem] text-md sm:text-lg/[1.5]">
            We are dedicated to providing high-quality services and support to
            help you achieve your goals. With a focus on excellence, innovation,
            and customer satisfaction, our team is here to guide you every step
            of the way. Learn more about us and how we can assist you.
          </p>
        </div>
      </section>

      {/* CORE VALUES SECTION */}
      <section className="max-w-[1920px] mx-auto bg-white py-[4rem] px-5 md:px-20 lg:px-[10rem]">
        <SectionIntro
          headingtext1="Our "
          headingtext2="Core Values"
        ></SectionIntro>
        <div className="flex max-sm:flex-col gap-6">
          {coreValues.map((item, index) => (
            <div
              key={index}
              className="h-[15rem] lg:h-[20rem] px-7 py-7 sm:max-lg:px-5 sm:max-lg:py-5 grow flex flex-col justify-end items-start text-md max-sm:text-lg lg:text-lg bg-[#f2f2f2] rounded-2xl"
            >
              <div className="grow justify-self-start">{starIcon}</div>
              <p className="text-[#f4a53c] font-semibold mb-2">{item.title}</p>
              <p className="text-[#696969] lg:max-w-[70%]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OUR FOUNDER SECTION */}
      <section className="max-w-[1920px] mx-auto bg-white py-[4rem] px-5 md:px-20 lg:px-[10rem]">
        <SectionIntro
          headingtext1="About "
          headingtext2="Our Founder"
        ></SectionIntro>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <Image
              className="mx-auto h-auto w-auto"
              src="/images/founder.webp"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              loading="lazy"
            />
            <div className="flex justify-between items-center mt-6">
              <span className="text-[#6d6d6d]">
                <b>VARUN PUNJABI,</b>
                <br /> FOUNDER & CEO
              </span>
              <div className="flex gap-2">
                <a
                  href="https://www.instagram.com/varun_punjabi_?igsh=ZDNvejJrZmtwbzRt"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Varun Punjabi's Instagram Page"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 46 46"
                    fill="none"
                  >
                    <path
                      d="M24.9701 3.83301C27.1264 3.83876 28.2208 3.85026 29.1657 3.87709L29.5375 3.89051C29.9669 3.90584 30.3905 3.92501 30.9022 3.94801C32.9415 4.04384 34.333 4.36584 35.554 4.83926C36.819 5.32609 37.8846 5.98542 38.9503 7.04917C39.9253 8.007 40.6795 9.16608 41.1602 10.4455C41.6336 11.6664 41.9556 13.0579 42.0515 15.0992C42.0745 15.609 42.0936 16.0326 42.109 16.4638L42.1205 16.8357C42.1492 17.7787 42.1607 18.8731 42.1645 21.0293L42.1665 22.4592V24.97C42.1711 26.368 42.1564 27.7661 42.1224 29.1637L42.1109 29.5355C42.0955 29.9668 42.0764 30.3903 42.0534 30.9002C41.9575 32.9414 41.6317 34.331 41.1602 35.5538C40.6795 36.8333 39.9253 37.9924 38.9503 38.9502C37.9925 39.9252 36.8334 40.6794 35.554 41.1601C34.333 41.6335 32.9415 41.9555 30.9022 42.0513L29.5375 42.1088L29.1657 42.1203C28.2208 42.1472 27.1264 42.1606 24.9701 42.1644L23.5403 42.1663H21.0314C19.6327 42.1713 18.234 42.1566 16.8358 42.1223L16.464 42.1108C16.009 42.0935 15.5541 42.0737 15.0993 42.0513C13.06 41.9555 11.6685 41.6335 10.4456 41.1601C9.16688 40.6791 8.00847 39.9249 7.0512 38.9502C6.07552 37.9925 5.32066 36.8334 4.83937 35.5538C4.36595 34.3329 4.04395 32.9414 3.94812 30.9002L3.89062 29.5355L3.88104 29.1637C3.84571 27.7661 3.82973 26.3681 3.83312 24.97V21.0293C3.82782 19.6313 3.84187 18.2333 3.87529 16.8357L3.8887 16.4638C3.90404 16.0326 3.9232 15.609 3.9462 15.0992C4.04204 13.0579 4.36404 11.6683 4.83745 10.4455C5.31987 9.16556 6.07605 8.00643 7.05312 7.04917C8.00983 6.07464 9.16756 5.32048 10.4456 4.83926C11.6685 4.36584 13.058 4.04384 15.0993 3.94801C15.6091 3.92501 16.0346 3.90584 16.464 3.89051L16.8358 3.87901C18.2334 3.84495 19.6314 3.83026 21.0295 3.83492L24.9701 3.83301ZM22.9998 13.4163C20.4581 13.4163 18.0206 14.426 16.2233 16.2232C14.4261 18.0205 13.4165 20.458 13.4165 22.9997C13.4165 25.5413 14.4261 27.9789 16.2233 29.7761C18.0206 31.5733 20.4581 32.583 22.9998 32.583C25.5414 32.583 27.979 31.5733 29.7762 29.7761C31.5735 27.9789 32.5831 25.5413 32.5831 22.9997C32.5831 20.458 31.5735 18.0205 29.7762 16.2232C27.979 14.426 25.5414 13.4163 22.9998 13.4163ZM22.9998 17.2497C23.7549 17.2495 24.5026 17.3982 25.2003 17.687C25.898 17.9759 26.5319 18.3993 27.0659 18.9331C27.6 19.467 28.0236 20.1008 28.3127 20.7984C28.6018 21.4959 28.7506 22.2436 28.7507 22.9987C28.7509 23.7538 28.6023 24.5016 28.3134 25.1992C28.0246 25.8969 27.6011 26.5308 27.0673 27.0649C26.5334 27.5989 25.8996 28.0225 25.2021 28.3116C24.5045 28.6007 23.7568 28.7495 23.0017 28.7497C21.4767 28.7497 20.0142 28.1439 18.9358 27.0655C17.8575 25.9872 17.2517 24.5247 17.2517 22.9997C17.2517 21.4747 17.8575 20.0121 18.9358 18.9338C20.0142 17.8555 21.4767 17.2497 23.0017 17.2497M33.0642 10.5413C32.4288 10.5413 31.8194 10.7938 31.3701 11.2431C30.9208 11.6924 30.6684 12.3018 30.6684 12.9372C30.6684 13.5726 30.9208 14.182 31.3701 14.6313C31.8194 15.0806 32.4288 15.333 33.0642 15.333C33.6996 15.333 34.309 15.0806 34.7583 14.6313C35.2076 14.182 35.46 13.5726 35.46 12.9372C35.46 12.3018 35.2076 11.6924 34.7583 11.2431C34.309 10.7938 33.6996 10.5413 33.0642 10.5413Z"
                      fill="#F4A53C"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/share/15vKZ6AwbW/?mibextid=qi2Omg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Varun Punjabi's Facebook Page"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 49 49"
                    fill="none"
                  >
                    <path
                      d="M44.9154 24.4997C44.9154 13.2297 35.7687 4.08301 24.4987 4.08301C13.2287 4.08301 4.08203 13.2297 4.08203 24.4997C4.08203 34.3813 11.1054 42.6093 20.4154 44.508V30.6247H16.332V24.4997H20.4154V19.3955C20.4154 15.4551 23.6208 12.2497 27.5612 12.2497H32.6654V18.3747H28.582C27.4591 18.3747 26.5404 19.2934 26.5404 20.4163V24.4997H32.6654V30.6247H26.5404V44.8143C36.8508 43.7934 44.9154 35.0959 44.9154 24.4997Z"
                      fill="#F4A53C"
                    />
                  </svg>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/varun-punjabi-95664b10a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  rel="noopener noreferrer"
                  aria-label="Varun Punjabi's LinkedIn Page"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 49 49"
                    fill="none"
                  >
                    <path
                      d="M38.7917 6.125C39.8746 6.125 40.9132 6.55521 41.679 7.32098C42.4448 8.08675 42.875 9.12537 42.875 10.2083V38.7917C42.875 39.8746 42.4448 40.9132 41.679 41.679C40.9132 42.4448 39.8746 42.875 38.7917 42.875H10.2083C9.12537 42.875 8.08675 42.4448 7.32098 41.679C6.55521 40.9132 6.125 39.8746 6.125 38.7917V10.2083C6.125 9.12537 6.55521 8.08675 7.32098 7.32098C8.08675 6.55521 9.12537 6.125 10.2083 6.125H38.7917ZM37.7708 37.7708V26.95C37.7708 25.1848 37.0696 23.4918 35.8214 22.2436C34.5732 20.9954 32.8802 20.2942 31.115 20.2942C29.3796 20.2942 27.3583 21.3558 26.3783 22.9483V20.6821H20.6821V37.7708H26.3783V27.7054C26.3783 26.1333 27.6442 24.8471 29.2163 24.8471C29.9743 24.8471 30.7014 25.1482 31.2374 25.6843C31.7734 26.2203 32.0746 26.9473 32.0746 27.7054V37.7708H37.7708ZM14.0467 17.4767C14.9564 17.4767 15.8288 17.1153 16.472 16.472C17.1153 15.8288 17.4767 14.9564 17.4767 14.0467C17.4767 12.1479 15.9454 10.5963 14.0467 10.5963C13.1316 10.5963 12.2539 10.9598 11.6069 11.6069C10.9598 12.2539 10.5963 13.1316 10.5963 14.0467C10.5963 15.9454 12.1479 17.4767 14.0467 17.4767ZM16.8846 37.7708V20.6821H11.2292V37.7708H16.8846Z"
                      fill="#F4A53C"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="text-[#6d6d6d] sm:text-lg">
            <p>
              VAdvisor Overseas Education Consultant, bringing over 5 years of
              expertise in empowering students to take their overseas education
              global. As a British Council-certified UK agent, I’ve had the
              privilege of guiding over 200 students to unlock life-changing
              opportunities by securing their visas and embarking on
              international journeys.
              <br />
              <br />
              At VAdvisor, we specialize in delivering personalized, end-to-end
              support to ensure students pursue their dreams abroad with a
              smooth and hassle-free journey with confidence. Whether you’re
              aiming for the UK, Ireland, Australia, New Zealand, Germany, or
              Dubai, we’re here to make your aspirations a reality with seamless
              guidance at every step—plus exciting offers like cashback to help
              you along the way.
              <br />
              <br />
              Your global education journey begins here—let us unlock endless
              possibilities for your future!
            </p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-[#6d6d6d] text-xl font-semibold">
            Certifications
          </h3>
          <Carousel
            responsive={{
              superLargeDesktop: {
                breakpoint: { max: 4000, min: 1501 },
                items: 5,
              },
              desktop: {
                breakpoint: { max: 1501, min: 1024 },
                items: 5,
              },
              tablet: {
                breakpoint: { max: 1024, min: 640 },
                items: 4,
              },
              mobile: {
                breakpoint: { max: 640, min: 0 },
                items: 3,
              },
            }}
            arrows={true}
            className="mt-6"
            itemClass="mx-2"
          >
            {certPaths.map((cert, index) => (
              <div
                key={index}
                className="h-[157px] cursor-pointer"
                onClick={() => openLightboxOnSlide(index + 1)}
              >
                <Image
                  src={cert.path}
                  alt=""
                  className="h-[160px] w-auto overflow-hidden object-contain"
                  width={0}
                  height={0}
                  sizes="100vw"
                  loading="lazy"
                />
              </div>
            ))}
          </Carousel>
          <FsLightbox
            toggler={lightboxController.toggler}
            sources={certPaths.map((x) => x.path)}
            slide={lightboxController.slide}
            exitFullscreenOnClose={true}
          />
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-[1920px] mx-auto bg-[#f2f2f2] py-[2rem] px-5 md:px-20 lg:px-[10rem]">
        <div className="flex flex-between max-sm:flex-col items-start">
          <div className="grow max-sm:mb-8">
            <SectionIntro
              subHeadingText="Our Services"
              headingtext1="Why Choose "
              headingtext2="VAdvisor Overseas"
              headingtext3=""
              paragraph="Navigate your study abroad journey with ease, backed by our comprehensive support services every step of the way."
            ></SectionIntro>
          </div>
          <ConnectButton mobileHidden={true} />
        </div>
        <div className="sm:mt-8">
          <ScrollingServices />
        </div>
      </section>

      {/* REFERRAL FORM SECTION */}
      <section className="max-w-[1920px] bg-white mx-auto grid grid-cols-9 gap-0 pt-[4rem]">
        <div className="overflow-hidden max-sm:hidden bg-[url(/images/contact-form-img.webp)] md:col-span-3 lg:col-span-4"></div>
        <div className="px-5 sm:px-16 md:pt-16 pt-0 pb-16 xl:w-[90%] col-span-9 md:col-span-6 lg:col-span-5">
          <SectionIntro
            className=""
            subHeadingText="Form for Students"
            headingtext1="Student "
            headingtext2="Enquiry Form"
            headingtext3=""
            paragraph=""
          />
          <form onSubmit={handleSubmit}>
            <div className="mt-16">
              <div className="text-gray-700 font-bold mb-2">Your Details</div>
              <div className="grid grid-flow-row grid-cols-2 grid-rows-3 gap-4">
                <input
                  type="text"
                  name="yourName"
                  placeholder="Name"
                  value={formData.yourName}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-100 rounded-lg"
                  required
                />
                <input
                  type="tel"
                  name="yourNumber"
                  placeholder="Number"
                  value={formData.yourNumber}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-100 rounded-lg"
                  required
                />
                <input
                  type="email"
                  name="yourEmail"
                  placeholder="E-mail"
                  value={formData.yourEmail}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-100 rounded-lg col-span-2"
                  required
                />
                <select
                  name="studyDestination"
                  value={formData.studyDestination}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-100 rounded-lg col-span-1"
                  required
                >
                  <option value="United Kingdom" defaultValue>
                    United Kingdom
                  </option>
                  <option value="Ireland">Ireland</option>
                  <option value="Australia">Australia</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Germany">Germany</option>
                  <option value="Dubai">Dubai</option>
                </select>
                <input
                  type="number"
                  name="intakeYear"
                  placeholder="Intake Year"
                  value={formData.intakeYear}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-100 rounded-lg col-span-1"
                  required
                  min={new Date().getFullYear()}
                  max={2099}
                  step={1}
                />
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
        </div>
      </section>
      {/* SCROLLING LOGOS SECTION */}
      <section className="max-w-[1920px] mx-auto bg-white py-[5rem]">
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
