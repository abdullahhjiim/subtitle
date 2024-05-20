"use client";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SeeMoreBtn from "../common/SeeMoreBtn";
import MovieCard from "./MovieCard";

const MovieCardList = () => {
  const [activeTab, setActiveTab] = useState(0);

  const movies = [
    {
      imageUrl: "https://via.placeholder.com/150x300",
      year: "2023",
      name: "Movie Title 1",
      type: "Action",
    },
    {
      imageUrl: "https://via.placeholder.com/150x300",
      year: "2022",
      name: "Movie Title 2",
      type: "Drama",
    },
    {
      imageUrl: "https://via.placeholder.com/150x300",
      year: "2021",
      name: "Movie Title 3",
      type: "Comedy",
    },
    {
      imageUrl: "https://via.placeholder.com/150x300",
      year: "2023",
      name: "Movie Title 1",
      type: "Action",
    },
    {
      imageUrl: "https://via.placeholder.com/150x300",
      year: "2022",
      name: "Movie Title 2",
      type: "Drama",
    },
    {
      imageUrl: "https://via.placeholder.com/150x300",
      year: "2021",
      name: "Movie Title 3",
      type: "Comedy",
    },
    {
      imageUrl: "https://via.placeholder.com/150x300",
      year: "2023",
      name: "Movie Title 1",
      type: "Action",
    },
    {
      imageUrl: "https://via.placeholder.com/150x300",
      year: "2022",
      name: "Movie Title 2",
      type: "Drama",
    },
    {
      imageUrl: "https://via.placeholder.com/150x300",
      year: "2021",
      name: "Movie Title 3",
      type: "Comedy",
    },
    {
      imageUrl: "https://via.placeholder.com/150x300",
      year: "2023",
      name: "Movie Title 1",
      type: "Action",
    },
    {
      imageUrl: "https://via.placeholder.com/150x300",
      year: "2022",
      name: "Movie Title 2",
      type: "Drama",
    },
    {
      imageUrl: "https://via.placeholder.com/150x300",
      year: "2021",
      name: "Movie Title 3",
      type: "Comedy",
    },
  ];

  const tabs = [
    { title: "Tab 1", content: "This is the content of Tab 1." },
    { title: "Tab 2", content: "This is the content of Tab 2." },
    { title: "Tab 3", content: "This is the content of Tab 3." },
    { title: "Tab 4", content: "This is the content of Tab 4." },
    { title: "Tab 1", content: "This is the content of Tab 1." },
    { title: "Tab 2", content: "This is the content of Tab 2." },
    { title: "Tab 3", content: "This is the content of Tab 3." },
    { title: "Tab 4", content: "This is the content of Tab 4." },
  ];

  const handlePrev = () => {
    setActiveTab((prevTab) => (prevTab === 0 ? tabs.length - 1 : prevTab - 1));
  };

  const handleNext = () => {
    setActiveTab((prevTab) => (prevTab === tabs.length - 1 ? 0 : prevTab + 1));
  };

  const handleClick = () => {
    console.log("sss");
  };
  return (
    <div className="relative bg-gray-100 p-8 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <FaArrowLeft
          className="cursor-pointer text-gray-600 hover:text-gray-800"
          onClick={handlePrev}
        />
        <div className="flex overflow-hidden">
          <Marquee>
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`px-4 py-2 m-2 cursor-pointer rounded-full ${
                  index === activeTab
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-800"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </div>
            ))}
          </Marquee>
        </div>
        <FaArrowRight
          className="cursor-pointer text-gray-600 hover:text-gray-800"
          onClick={handleNext}
        />
      </div>
      <div className="p-4 bg-white rounded-lg shadow-md grid grid-cols-3 gap-4">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            imageUrl={movie.imageUrl}
            year={movie.year}
            name={movie.name}
            type={movie.type}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <SeeMoreBtn onClick={handleClick} />
      </div>
    </div>
  );
};

export default MovieCardList;
