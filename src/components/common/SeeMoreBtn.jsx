"use client";

import Link from "next/link";

const SeeMoreBtn = ({ type }) => {


  let link = '/all-subtitle'
  if(type == 'latest') {
    link = '/all-subtitle';
  }else if(type == 'top-movies') {
    link = '/all-movies';
  }else if(type == "tv-series") {
    link = '/all-tv-series';
  }
  
  return (
    <Link
      href={link}
      className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-bold py-2 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none"
    >
      See More
    </Link>
  );
};

export default SeeMoreBtn;
