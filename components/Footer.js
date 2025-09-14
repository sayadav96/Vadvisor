import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="max-w-[1920px] mx-auto px-5 sm:px-[4 rem] lg:px-[10rem] bg-[#f2f2f2] pt-[2.5rem] pb-2 sm:pb-8 text-md">
      <div className="container mx-auto grid grid-flow-row grid-cols-1 grid-rows-1 sm:grid-cols-6 sm:grid-rows-1">
        {/* Left Section */}
        <div className="mb-6 col-span-4 max-w-[400px] mx-auto sm:mx-0">
          <Image
            src="/images/logo.png"
            alt="VAdvisor Logo"
            className="w-32 h-auto mb-4 relative bottom-4"
            width={0}
            height={0}
            sizes="100vw"
            loading="lazy"
          />
          <p className="text-[#585858] text-left">
            At VAdvisor, we’re dedicated to breaking down geographical barriers
            in education. By offering expert counsel, tailored reinforce, and
            heartfelt support to help students navigate their international
            journey and develop the skills to thrive in a globalized world.
          </p>
        </div>

        {/* Quicklinks and Services */}
        <div className="text-left pr-12 sm:px-4">
          <p className="text-[#f4a53c] font-semibold mb-2 ">Quicklinks</p>
          <ul className="text-[#585858]">
            <li className="mb-1">
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li className="mb-1">
              <Link href="/referral" className="hover:underline">
                Refer and Earn
              </Link>
            </li>
            <li className="mb-1">
              <Link href="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li className="mb-1">
              <Link href="/contact-us" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:underline">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-left pl-12 sm:px-4 max-sm:relative max-sm:right-20">
          <p className="text-[#f4a53c] font-semibold mb-2">Services</p>
          <ul className="text-[#585858]">
            <li className="mb-1">
              <Link href="/uk" className="hover:underline">
                UK
              </Link>
            </li>
            <li className="mb-1">
              <Link href="/ireland" className="hover:underline">
                Ireland
              </Link>
            </li>
            <li className="mb-1">
              <Link href="/australia" className="hover:underline">
                Australia
              </Link>
            </li>
            <li className="mb-1">
              <Link href="/new-zealand" className="hover:underline">
                New Zealand
              </Link>
            </li>
            <li className="mb-1">
              <Link href="/dubai" className="hover:underline">
                Dubai
              </Link>
            </li>
            <li>
              <Link href="/germany" className="hover:underline">
                Germany
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-8 flex flex-col justify-between items-start text-[#585858] text-center sm:text-left">
        {/* Contact Information */}
        <a
          href="mailto:inquiry@vadvisoroverseas.com"
          className="mb-6 flex items-center gap-3"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <path
              d="M0 2.5C0 1.67157 0.671573 1 1.5 1H13.5C14.3284 1 15 1.67157 15 2.5V3.70758L7.50001 7.92632L0 3.70757V2.5Z"
              fill="#F4A53C"
            />
            <path
              d="M0 4.85491V12.5C0 13.3284 0.671573 14 1.5 14H13.5C14.3284 14 15 13.3284 15 12.5V4.85493L7.50001 9.07367L0 4.85491Z"
              fill="#F4A53C"
            />
          </svg>
          inquiry@vadvisoroverseas.com
        </a>
        <div className="mb-6 flex items-center">
          <svg
            className="mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <path
              d="M2.5 0C1.11929 0 0 1.11929 0 2.5V4.5C0 10.299 4.70101 15 10.5 15H12.5C13.8807 15 15 13.8807 15 12.5V11.118C15 10.5499 14.679 10.0305 14.1708 9.77639L11.7549 8.56843C10.9384 8.1602 9.94971 8.56975 9.66105 9.43573L9.36328 10.329C9.25014 10.6684 8.90197 10.8705 8.55114 10.8003C6.35528 10.3612 4.63885 8.64472 4.19967 6.44886C4.12951 6.09803 4.33156 5.74986 4.67097 5.63672L5.7796 5.26718C6.52319 5.01932 6.95058 4.24075 6.76048 3.48035L6.17444 1.1362C6.0075 0.468446 5.40752 0 4.71922 0H2.5Z"
              fill="#F4A53C"
            />
          </svg>
          <a href="tel:+919890017019" rel="noopener noreferrer">
            +91 9890017019
          </a>
          ,&nbsp;
          <a href="tel:91 87931 19018" rel="noopener noreferrer">
            +91 8793119018
          </a>
        </div>
        {/* Social Media Links */}
        <div className="flex space-x-4 mb-6 md:mb-0">
          <a
            href="https://www.facebook.com/share/15z612qNDC/"
            className="border-[1px] border-[#f4a53c] p-3 rounded-full"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Vadvisor Facebook Page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 11 17"
              fill="none"
            >
              <path
                d="M3.64955 16.6419V9.21467H0.973633V6.32013H3.64955V4.1855C3.64955 1.70827 5.2694 0.359375 7.63531 0.359375C8.7686 0.359375 9.74261 0.438186 10.0265 0.473412V3.06226L8.38558 3.06296C7.09886 3.06296 6.84972 3.63405 6.84972 4.4721V6.32013H9.91842L9.51886 9.21467H6.84972V16.6419H3.64955Z"
                fill="#F4A53C"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/vadvisoroverseas?igsh=b3NlOG92cGgyNDVz"
            className="border-[1px] border-[#f4a53c] p-3 rounded-full"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Vadvisor Instagram Page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 21 19"
              fill="none"
            >
              <path
                d="M10.5002 2.07192C13.09 2.07192 13.3967 2.08098 14.4197 2.12456C15.0349 2.13159 15.6441 2.23709 16.2211 2.43647C16.6395 2.58718 17.0194 2.81805 17.3365 3.11422C17.6536 3.41039 17.9008 3.76529 18.0621 4.15609C18.2756 4.69497 18.3885 5.26406 18.3961 5.8386C18.4423 6.79418 18.4524 7.08064 18.4524 9.49958C18.4524 11.9185 18.4427 12.205 18.3961 13.1606C18.3885 13.7351 18.2756 14.3042 18.0621 14.8431C17.9008 15.2339 17.6536 15.5888 17.3365 15.8849C17.0194 16.1811 16.6395 16.412 16.2211 16.5627C15.6441 16.7621 15.0349 16.8676 14.4197 16.8746C13.3971 16.9177 13.0905 16.9272 10.5002 16.9272C7.91002 16.9272 7.60334 16.9182 6.58074 16.8746C5.96562 16.8676 5.35635 16.7621 4.77941 16.5627C4.36102 16.412 3.98105 16.1811 3.66397 15.8849C3.34689 15.5888 3.09971 15.2339 2.93836 14.8431C2.7249 14.3042 2.61195 13.7351 2.60442 13.1606C2.55823 12.205 2.54807 11.9185 2.54807 9.49958C2.54807 7.08064 2.55777 6.79418 2.60442 5.8386C2.61195 5.26406 2.7249 4.69497 2.93836 4.15609C3.09971 3.76529 3.34689 3.41039 3.66397 3.11422C3.98105 2.81805 4.36102 2.58718 4.77941 2.43647C5.35635 2.23709 5.96562 2.13159 6.58074 2.12456C7.6038 2.08142 7.91049 2.07192 10.5002 2.07192ZM10.5002 0.439453C7.86753 0.439453 7.5359 0.449807 6.50129 0.493811C5.69626 0.508768 4.89977 0.65114 4.14571 0.914872C3.49885 1.14251 2.91295 1.49925 2.4289 1.96019C1.93497 2.41247 1.55272 2.96003 1.30885 3.56462C1.02649 4.26894 0.874067 5.01289 0.858054 5.76483C0.811866 6.73033 0.800781 7.04009 0.800781 9.49915C0.800781 11.9582 0.811866 12.268 0.858978 13.2343C0.87499 13.9863 1.02742 14.7302 1.30977 15.4345C1.55337 16.0391 1.9353 16.5866 2.4289 17.039C2.91322 17.5 3.49944 17.8568 4.14663 18.0843C4.9007 18.348 5.69718 18.4904 6.50222 18.5054C7.53683 18.5485 7.86707 18.5597 10.5012 18.5597C13.1353 18.5597 13.4655 18.5494 14.5001 18.5054C15.3051 18.4904 16.1016 18.348 16.8557 18.0843C17.4998 17.8511 18.0848 17.4949 18.5731 17.0385C19.0614 16.5821 19.4424 16.0355 19.6916 15.4337C19.974 14.7294 20.1264 13.9854 20.1424 13.2335C20.1886 12.268 20.1997 11.9582 20.1997 9.49915C20.1997 7.04009 20.1886 6.73033 20.1415 5.76397C20.1255 5.01203 19.9731 4.26808 19.6907 3.56375C19.4471 2.95925 19.0652 2.41169 18.5716 1.95932C18.0873 1.49828 17.501 1.14154 16.8538 0.914009C16.0998 0.650277 15.3033 0.507905 14.4983 0.492949C13.4646 0.449807 13.133 0.439453 10.5002 0.439453Z"
                fill="#F4A53C"
              />
              <path
                d="M10.4985 4.84766C9.51335 4.84766 8.55035 5.12051 7.73124 5.63172C6.91214 6.14293 6.27372 6.86953 5.89673 7.71964C5.51974 8.56975 5.4211 9.50519 5.61329 10.4077C5.80548 11.3101 6.27986 12.1391 6.97645 12.7897C7.67305 13.4404 8.56056 13.8835 9.52676 14.063C10.493 14.2425 11.4945 14.1504 12.4046 13.7983C13.3147 13.4461 14.0926 12.8498 14.64 12.0847C15.1873 11.3197 15.4794 10.4202 15.4794 9.50003C15.4794 8.26614 14.9546 7.08279 14.0205 6.2103C13.0864 5.33782 11.8195 4.84766 10.4985 4.84766ZM10.4985 12.5199C9.85903 12.5199 9.23393 12.3428 8.70224 12.011C8.17055 11.6791 7.75615 11.2075 7.51144 10.6557C7.26673 10.1039 7.2027 9.49668 7.32745 8.91087C7.45221 8.32507 7.76014 7.78698 8.2123 7.36464C8.66446 6.9423 9.24056 6.65468 9.86773 6.53815C10.4949 6.42163 11.145 6.48143 11.7358 6.71C12.3265 6.93857 12.8315 7.32564 13.1868 7.82226C13.542 8.31888 13.7316 8.90275 13.7316 9.50003C13.7316 10.301 13.391 11.0691 12.7847 11.6354C12.1783 12.2018 11.356 12.5199 10.4985 12.5199Z"
                fill="#F4A53C"
              />
              <path
                d="M15.6766 5.7505C16.3195 5.7505 16.8406 5.26376 16.8406 4.66334C16.8406 4.06291 16.3195 3.57617 15.6766 3.57617C15.0338 3.57617 14.5127 4.06291 14.5127 4.66334C14.5127 5.26376 15.0338 5.7505 15.6766 5.7505Z"
                fill="#F4A53C"
              />
            </svg>
          </a>
          <a
            href="http://www.linkedin.com/in/vadvisor-overseas-education-consultant-1201202b1"
            className="border-[1px] border-[#f4a53c] p-3 rounded-full"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Vadvisor LinkedIn Page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 17"
              fill="none"
            >
              <path
                d="M1.48801 3.3645C1.08447 2.98983 0.883789 2.52606 0.883789 1.97425C0.883789 1.42245 1.08554 0.93828 1.48801 0.562538C1.89154 0.18787 2.41099 0 3.04742 0C3.68384 0 4.1829 0.18787 4.58537 0.562538C4.9889 0.937207 5.18958 1.40849 5.18958 1.97425C5.18958 2.54001 4.98783 2.98983 4.58537 3.3645C4.18183 3.73917 3.66989 3.92704 3.04742 3.92704C2.42494 3.92704 1.89154 3.73917 1.48801 3.3645ZM4.85045 5.51374V17.0007H1.22185V5.51374H4.85045Z"
                fill="#F4A53C"
              />
              <path
                d="M16.93 6.64763C17.721 7.50647 18.1159 8.68523 18.1159 10.186V16.797H14.6698V10.652C14.6698 9.89512 14.4734 9.30682 14.0816 8.88813C13.6899 8.46945 13.1619 8.25903 12.5008 8.25903C11.8397 8.25903 11.3116 8.46837 10.9199 8.88813C10.5282 9.30682 10.3318 9.89512 10.3318 10.652V16.797H6.86523V5.48069H10.3318V6.98151C10.6827 6.48124 11.156 6.08617 11.7506 5.79524C12.3452 5.5043 13.0138 5.35938 13.7575 5.35938C15.0819 5.35938 16.1401 5.78879 16.93 6.64763Z"
                fill="#F4A53C"
              />
            </svg>
          </a>
          <a
            href="https://x.com/VAdvisor2025"
            className="border-[1px] border-[#f4a53c] p-3 rounded-full"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Vadvisor Twitter/X Page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 21 19"
              fill="none"
            >
              <path
                d="M0.401354 0L8.23729 10.4796L0.352539 19.0002H2.12759L9.03136 11.5406L14.6089 19.0002H20.6484L12.3719 7.93113L19.7114 0H17.9364L11.579 6.87008L6.442 0H0.402531H0.401354ZM3.01094 1.30757H5.78484L18.0364 17.6926H15.2625L3.01094 1.30757Z"
                fill="#F4A53C"
              />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@VAdvisorOverseasEducation"
            className="border-[1px] border-[#f4a53c] p-3 rounded-full"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Vadvisor Youtube Page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 29 25"
              fill="none"
            >
              <path
                d="M26.9829 6.05957C26.6736 4.90234 25.7655 3.99414 24.612 3.68652C22.5209 3.125 14.137 3.125 14.137 3.125C14.137 3.125 5.75299 3.125 3.66191 3.68652C2.50838 3.99414 1.60028 4.90234 1.29103 6.05957C0.731445 8.1543 0.731445 12.5195 0.731445 12.5195C0.731445 12.5195 0.731445 16.8848 1.29103 18.9795C1.60028 20.1367 2.50838 21.0059 3.66191 21.3135C5.75299 21.875 14.137 21.875 14.137 21.875C14.137 21.875 22.5209 21.875 24.612 21.3135C25.7655 21.0059 26.6736 20.1318 26.9829 18.9795C27.5425 16.8848 27.5425 12.5195 27.5425 12.5195C27.5425 12.5195 27.5425 8.1543 26.9829 6.05957ZM11.3979 16.4844V8.55469L18.4026 12.5195L11.3979 16.4844Z"
                fill="#F4A53C"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="grid grid-flow-row sm:grid-flow-col max-sm:gap-1 max-sm:text-sm justify-center sm:justify-between px-2 sm:mt-8 text-[#585858] border-t border-gray-200 pt-4">
        <span className="text-left">Copyright ©2025 VAdvisor</span>{" "}
        <span className="flex flex-row [@media(max-width:391px)]:flex-col items-end text-right">
          Designed & Developed by&nbsp;{" "}
          <span className="flex flex-row items-end text-right">
            Syspree Digital with&nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 34 31"
              fill="none"
              className="grow"
            >
              <path
                d="M11.4836 23.57C7.50544 20.7754 2.83301 17.4931 2.83301 11.8032C2.83301 5.52192 10.6249 1.06735 16.9997 7.10611L19.833 9.6877C20.248 10.0659 20.9208 10.0658 21.3356 9.68745C21.7505 9.30906 21.7503 8.69568 21.3353 8.31743L18.5983 5.82282C24.605 1.81345 31.1663 6.03921 31.1663 11.8032C31.1663 17.4931 26.4939 20.7754 22.5158 23.57C22.1023 23.8604 21.6963 24.1456 21.3039 24.4277C19.833 25.4849 18.4163 26.4803 16.9997 26.4803C15.583 26.4803 14.1663 25.4849 12.6955 24.4277C12.303 24.1456 11.897 23.8604 11.4836 23.57Z"
                fill="#FF6600"
              />
            </svg>
          </span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
