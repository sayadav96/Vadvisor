import Marquee from "react-fast-marquee";

const services = [
  { text: "Scholarships" },
  { text: "Fee Remittance" },
  { text: "SOP & LOR Writing" },
  { text: "Air Tickets" },
  { text: "Travel Insurance" },
  { text: "Student Accomodation" },
  { text: "Application Fee Waiver" },
];

export const ScrollingServices = ({ orangeBackground = false }) => {
  return (
    <Marquee
      autoFill
      className={`${
        orangeBackground ? "bg-[#f4a53c]" : "bg-transparent"
      } py-2 `}
    >
      {services.map((service, index) => {
        return (
          <div
            key={index}
            className="mx-5 flex justify-center items-center h-full transition-transform duration-300 transform hover:scale-[105%]"
          >
            {orangeBackground ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 33 33"
                fill="none"
              >
                <mask
                  id="mask0_285_213"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="1"
                  y="1"
                  width="31"
                  height="31"
                >
                  <path
                    d="M16.5 30.25C18.306 30.2522 20.0947 29.8976 21.7632 29.2064C23.4317 28.5153 24.9472 27.5013 26.2226 26.2226C27.5013 24.9472 28.5153 23.4317 29.2064 21.7632C29.8976 20.0947 30.2522 18.306 30.25 16.5C30.2522 14.694 29.8976 12.9054 29.2064 11.2368C28.5153 9.56833 27.5013 8.05282 26.2226 6.77739C24.9472 5.49875 23.4317 4.48472 21.7632 3.79358C20.0947 3.10243 18.306 2.74778 16.5 2.75001C14.694 2.74778 12.9054 3.10243 11.2368 3.79358C9.56833 4.48472 8.05282 5.49875 6.77739 6.77739C5.49875 8.05282 4.48472 9.56833 3.79358 11.2368C3.10243 12.9054 2.74778 14.694 2.75001 16.5C2.74778 18.306 3.10243 20.0947 3.79358 21.7632C4.48472 23.4317 5.49875 24.9472 6.77739 26.2226C8.05282 27.5013 9.56833 28.5153 11.2368 29.2064C12.9054 29.8976 14.694 30.2522 16.5 30.25Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 16.5L15.125 20.625L23.375 12.375"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </mask>
                <g mask="url(#mask0_285_213)">
                  <path d="M0 0H33V33H0V0Z" fill="white" />
                </g>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
              >
                <path
                  d="M17.508 27.775L33.0455 12.2375C33.4122 11.8708 33.84 11.6875 34.3288 11.6875C34.8177 11.6875 35.2455 11.8708 35.6122 12.2375C35.9788 12.6042 36.1622 13.0399 36.1622 13.5447C36.1622 14.0494 35.9788 14.4846 35.6122 14.85L18.7913 31.7167C18.4247 32.0833 17.9969 32.2667 17.508 32.2667C17.0191 32.2667 16.5913 32.0833 16.2247 31.7167L8.34135 23.8333C7.97468 23.4667 7.79868 23.0316 7.81335 22.528C7.82801 22.0244 8.01929 21.5887 8.38718 21.2208C8.75507 20.8529 9.19079 20.6696 9.69435 20.6708C10.1979 20.6721 10.633 20.8554 10.9997 21.2208L17.508 27.775Z"
                  fill="#F4A53C"
                />
              </svg>
            )}
            <span
              className={
                "text-lg font-[480] " +
                (orangeBackground ? "text-white ml-1" : "")
              }
            >
              {service.text}
            </span>
          </div>
        );
      })}
    </Marquee>
  );
};
