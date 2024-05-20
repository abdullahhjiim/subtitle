"use client";
import { ReactTyped } from "react-typed";
import Search from "./Search";


const Hero = () => {
  return (
    //bg-[url('/hero-bg.png')]
    <section className="bg-[#F6F3E9] max-h-[80vh] relative grid place-items-center  bg-cover bg-no-repeat bg-center">
      <div className="container items-center p-12 ">
        <div className="col-span-7">
          <h1 className="font-bold text-3xl lg:text-5xl my-4 text-center lg:w-8/12 mx-auto">
            Search your desire bangla subtitle of  <br />
            <ReactTyped
        strings={["Movie", "TV Series", "Documentary", "Celebraty Interview"]}
        typeSpeed={100}
        backSpeed={80}
        loop
      ></ReactTyped>
          </h1>
          <p className="my-2 text-[#5f5e5e] text-center">
            We have 459k subtitle spread throuout Indonesia with room standards
            equivalent to 5 star rating.
          </p>
          <Search />
        </div>
      </div>
    </section>
  );
};

export default Hero;
