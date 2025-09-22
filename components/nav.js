"use client";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <header className="bg-white max-w-screen sticky top-0 mx-auto shadow-md z-[1100]">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="VAdvisor Logo"
            width={0}
            height={0}
            draggable={false}
            className="h-auto w-[7.5rem]"
            loading="lazy"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden block text-gray-800 focus:outline-none hover:scale-[120%] transform transition-transform duration-300"
          aria-label="Open Navbar Menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <circle
                cx="20"
                cy="20"
                r="19.25"
                fill="#F4A53C"
                stroke="white"
                strokeWidth="1.5"
              />
              <path
                d="M14.3926 26.0802L25.4603 14.5258"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M14.2559 14.6838L25.8055 25.7565"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <circle
                cx="20"
                cy="20"
                r="19.25"
                fill="#F4A53C"
                stroke="white"
                strokeWidth="1.5"
              />
              <path
                d="M11.7383 15.1111H27.7383"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M11.7773 25.7778H27.7773"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>

        {/* Navigation */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-white shadow-md lg:static lg:bg-transparent lg:shadow-none lg:flex lg:items-center lg:space-y-0 lg:space-x-6 lg:justify-center`}
        >
          <ul className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-6 p-4 lg:p-0">
            <li
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <Link href="/" className="text-gray-800 hover:text-[#F4A53C]">
                Home
              </Link>
            </li>

            {/* Study Abroad with Dropdown */}
            <li className="relative group">
              <span
                className="text-gray-800 hover:text-[#F4A53C] flex items-center hover:cursor-pointer"
                onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
              >
                Study Abroad
                <div
                  className={`${
                    isSubMenuOpen ? "rotate-0" : "-rotate-90"
                  } ml-6 lg:hidden font-[900]`}
                >
                  {isSubMenuOpen ? "⌵" : "⌵"}
                </div>
              </span>

              {/* Dropdown */}
              <div
                className={`${
                  isSubMenuOpen ? "max-lg:visible" : "max-lg:hidden"
                } overflow-hidden lg:absolute lg:left-0 bg-white lg:shadow-lg lg:rounded-md lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:visible lg:invisible lg:transition-opacity lg:duration-300`}
              >
                <ul className=" mt-2 w-48">
                  <li
                    onClick={() => {
                      setIsMenuOpen(!isMenuOpen);
                    }}
                  >
                    <Link
                      href="/uk"
                      className="block px-4 py-2 text-gray-800 hover:text-[#F4A53C]  lg:hover:bg-[#F4A53C] lg:hover:text-white"
                      onClick={() => {
                        setIsMenuOpen(!isMenuOpen);
                      }}
                    >
                      Study in UK
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      setIsMenuOpen(!isMenuOpen);
                    }}
                  >
                    <Link
                      href="/ireland"
                      className="block px-4 py-2 text-gray-800 hover:text-[#F4A53C]  lg:hover:bg-[#F4A53C] lg:hover:text-white"
                    >
                      Study in Ireland
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      setIsMenuOpen(!isMenuOpen);
                    }}
                  >
                    <Link
                      href="/australia"
                      className="block px-4 py-2 text-gray-800 hover:text-[#F4A53C]  lg:hover:bg-[#F4A53C] lg:hover:text-white"
                    >
                      Study in Australia
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      setIsMenuOpen(!isMenuOpen);
                    }}
                  >
                    <Link
                      href="/new-zealand"
                      className="block px-4 py-2 text-gray-800 hover:text-[#F4A53C]  lg:hover:bg-[#F4A53C] lg:hover:text-white"
                    >
                      Study in New Zealand
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      setIsMenuOpen(!isMenuOpen);
                    }}
                  >
                    <Link
                      href="/germany"
                      className="block px-4 py-2 text-gray-800 hover:text-[#F4A53C]  lg:hover:bg-[#F4A53C] lg:hover:text-white"
                    >
                      Study in Germany
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      setIsMenuOpen(!isMenuOpen);
                    }}
                  >
                    <Link
                      href="/dubai"
                      className="block px-4 py-2 text-gray-800 hover:text-[#F4A53C]  lg:hover:bg-[#F4A53C] lg:hover:text-white"
                    >
                      Study in Dubai
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <Link
                href="/referral"
                className="text-gray-800 hover:text-[#F4A53C]"
              >
                Refer and Earn
              </Link>
            </li>
            <li
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <Link
                href="/services"
                className="text-gray-800 hover:text-[#F4A53C]"
              >
                Services
              </Link>
            </li>
            <li
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <Link
                href="/about-us"
                className="text-gray-800 hover:text-[#F4A53C]"
              >
                About Us
              </Link>
            </li>
            <li
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <Link
                href="/contact-us"
                className="text-gray-800 hover:text-[#F4A53C]"
              >
                Contact Us
              </Link>
            </li>
            <li
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <Link className="sm:hidden" href="/contact-us">
                <button className="lg:block px-2 py-2 w-full my-4 bg-[#F4A53C] text-white font-bold rounded-full border-2 border-[#F4A53C] focus:outline-none min-w-[180px] hover:scale-[120%] transform transition-transform duration-300">
                  Free Consultation
                </button>
              </Link>
            </li>
          </ul>
        </nav>

        <Link className="hidden lg:block" href="/contact-us">
          <button className="hidden lg:block px-2 py-2 bg-[#F4A53C] text-white font-bold rounded-full border-2 border-[#F4A53C] focus:outline-none ml-4 min-w-[180px] hover:scale-[120%] transform transition-transform duration-300">
            Free Consultation
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Nav;
