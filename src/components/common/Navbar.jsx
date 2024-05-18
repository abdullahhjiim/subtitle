// components/Navbar.js

import Link from "next/link";
import { IoIosLogIn } from "react-icons/io";
import SearchCm from "../header/SearchCm";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-10">
      <div className="container mx-auto grid grid-cols-3 items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="text-xl font-bold text-gray-800">
            Logo
          </a>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex w-1/2 mx-4 justify-center">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <SearchCm />
          </div>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-6 justify-end items-center">
          <a
            href="#"
            className="text-gray-800 hover:text-gray-700 hover:font-semibold duration-500"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-gray-700 hover:font-semibold duration-500"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-gray-700 hover:font-semibold duration-500"
          >
            Services
          </a>
          <Link
            href="/login"
            className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-md text-white hover:bg-opacity-60 hover:font-semibold duration-500"
          >
            <IoIosLogIn /> Login
          </Link>
        </div>

        {/* Responsive Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-800 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden mt-4">
        <div className="flex w-full mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <a href="#" className="block text-gray-800 hover:text-blue-500 mb-2">
          Link 1
        </a>
        <a href="#" className="block text-gray-800 hover:text-blue-500 mb-2">
          Link 2
        </a>
        <a href="#" className="block text-gray-800 hover:text-blue-500">
          Link 3
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
