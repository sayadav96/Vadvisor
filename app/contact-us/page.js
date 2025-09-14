"use client";
import { SectionIntro } from "@/components/SectionIntro";
import { useState, useEffect } from "react";
import { ScrollingLogos } from "@/components/ScrollingLogos";
import { ScrollingServices } from "@/components/ScrollingServices";
import axios from "axios";
import { ConnectButton } from "@/components/ConnectButton";
import confetti from "canvas-confetti";

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
    yourNumber: "",
    yourEmail: "",
    studyDestination: "United Kingdom",
    intakeYear: "",
  });
  const [status, setStatus] = useState("");
  const [showPopup, setShowPopup] = useState(false);

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
      <section className="max-w-[1920px] mx-auto bg-[url(/images/contact-hero-img.webp)] bg-cover bg-center text-center py-[9rem] px-5 md:px-20 lg:px-[10rem] max-sm:pb-14 max-sm:text-left">
        <div className="relative -top-4">
          <h1 className="mx-auto text-4xl sm:text-5xl xl:text-6xl/[1.25] font-bold text-[#6c6d6d] max-w-[70rem]">
            Go Global Without Leaving Home
            <br />
            <span className="text-[#f4a53c]">
              Virtual Study Abroad Services <br /> You Can Rely On!
            </span>
          </h1>
          <p className="mx-auto mt-8 text-[#6d6c6c] max-w-[50rem] text-md sm:text-lg/[1.5]">
            Have questions or need assistance? Reach out to us through the
            contact form below, and our team will get back to you as soon as
            possible. We&apos;re here to help! Your inquiries are important to
            us, and we look forward to connecting with you.
          </p>
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
      {/* SCROLLING LOGOS SECTION */}

      {/* REFERRAL FORM SECTION */}
      <section
        id="contact-form"
        className="max-w-[1920px] bg-white mx-auto grid grid-cols-9 gap-0 pt-[4rem]"
      >
        <div className="overflow-hidden max-sm:hidden bg-[url(/images/contact-form-img.webp)] bg-no-repeat bg-cover md:col-span-3 lg:col-span-4"></div>
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
