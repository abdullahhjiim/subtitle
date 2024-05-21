"use client";
import { signOut } from "next-auth/react";
const Logout = () => {
  const handleSignOut = () => {
    // signOut({callbackUrl: '/login'});
    signOut({ callbackUrl: "http://localhost:3033/login" });
  };
  return (
    <li>
        <a
          type="submit"
          onClick={handleSignOut}
          className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
        >
          Logout
        </a>
    </li>
  );
};

export default Logout;
