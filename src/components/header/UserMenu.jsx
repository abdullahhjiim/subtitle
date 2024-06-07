

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { IoIosLogIn } from "react-icons/io";
import { auth } from "../../../auth";
import Logout from "./Logout";


const UserMenu = async () => {
  const session = await auth();

  return (
    <div className="">
      {!session?.user?.email ? (
        <Link
          href="/login"
          className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-md text-white hover:bg-opacity-80 hover:text-pink-500 font-semibold hover:font-bold  duration-500"
        >
          <IoIosLogIn /> Login
        </Link>
      ) : (
        <div className="relative inline-block group">
          <div className="flex items-center cursor-pointer ">
            {/* User Avatar */}
            <img
              src="https://cdn.vectorstock.com/i/1000v/51/87/student-avatar-user-profile-icon-vector-47025187.jpg"
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            {/* User Name */}
            {/* <span className="ml-2 text-gray-800">John Doe</span> */}
          </div>
          {/* Menu Items */}
          <div className="hidden group-hover:block absolute z-10 top-8 -left-4 bg-white shadow-md p-2 mt-1 rounded">
            <ul>
              <li>
                <Link
                  href="/dashboard"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Profile
                </a>
              </li>
              <Logout />
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
