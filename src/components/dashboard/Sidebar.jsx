"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FaChartBar, FaCloudUploadAlt, FaHome, FaUser } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState({
    dashboard: false,
    users: false,
  });

  const toggleSubMenu = (menu) => {
    setIsOpen((prevState) => ({ ...prevState, [menu]: !prevState[menu] }));
  };

  return (
    <div className="min-w-[270px] rounded-md w-64 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      <div className="p-6 text-2xl font-bold">My Dashboard</div>
      <ul className="space-y-2">
        <li className="px-4 py-2 hover:bg-indigo-700 flex items-center">
          <FaHome className="mr-3" />
          Home
        </li>
        <li className="px-4 py-2 hover:bg-indigo-700 flex items-center justify-between" onClick={() => toggleSubMenu('dashboard')}>
          <div className="flex items-center">
            <FaChartBar className="mr-3" />
            Dashboard
          </div>
          <MdKeyboardArrowDown className={`${isOpen.dashboard ? 'transform rotate-180' : ''} transition-transform`} />
        </li>
        {isOpen.dashboard && (
          <ul className="pl-8 space-y-2">
            <li className="px-4 py-2 hover:bg-indigo-600">Analytics</li>
            <li className="px-4 py-2 hover:bg-indigo-600">Reports</li>
          </ul>
        )}
        <li className="px-4 py-2 hover:bg-indigo-700 flex items-center justify-between" onClick={() => toggleSubMenu('users')}>
          <div className="flex items-center">
            <FaUser className="mr-3" />
            Users
          </div>
          <MdKeyboardArrowDown className={`${isOpen.users ? 'transform rotate-180' : ''} transition-transform`} />
        </li>
        {isOpen.users && (
          <ul className="pl-8 space-y-2">
            <li className="px-4 py-2 hover:bg-indigo-600">Profile</li>
            <li className="px-4 py-2 hover:bg-indigo-600">Settings</li>
          </ul>
        )}
         <Link href="/dashboard/upload-subtitle" className="px-4 py-2 hover:bg-indigo-700 flex items-center">
          <FaCloudUploadAlt className="mr-3" />
          Upload Subtitle
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
