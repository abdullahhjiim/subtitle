
import Image from "next/image";
import Link from "next/link";
import UserMenu from "../header/UserMenu";

const Navbar = async () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto grid grid-cols-2 items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-xl font-bold text-gray-800">
            <Image src='/assets/logo.svg' height={30} width={40} alt="subtitle bangla logo" />
          </Link>
        </div>

        {/* Search Bar */}
        {/* <div className="hidden md:flex w-1/2 mx-4 justify-center">
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
        </div> */}

        {/* Links */}
        <div className="hidden md:flex space-x-6 justify-end items-center">
          {/* <Link
            href="/blog"
            className="text-gray-800 hover:text-gray-700 font-semibold hover:font-bold hover:text-pink-500 duration-500"
          >
            Blog
          </Link> */}
          <Link
            href="/contact"
            className="text-gray-800 hover:text-gray-700 font-semibold hover:font-bold hover:text-pink-500 duration-500"
          >
            Contact
          </Link>
          <a
            href="#"
            className="text-gray-800 hover:text-gray-700 font-semibold hover:font-bold hover:text-pink-500 duration-500"
          >
            Services
          </a>
          <UserMenu />
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
