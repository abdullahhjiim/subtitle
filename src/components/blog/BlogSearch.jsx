"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ReactTyped } from "react-typed";
import BlogModal from "./BlogModal";

/* eslint-disable @next/next/no-img-element */
const BlogSearch = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (e) => {
        const {value} = e.target;
        if(value.length > 0) {
            router.push(`/blog/search?query=${value}`);
        }
    }
  return (
    <div className="">
        <div className="flex justify-between items-center">
        <h3 className="pb-1 font-medium">You may search from here </h3>
         <button onClick={() => { setIsOpen(true) }} className="px-2 py-1 bg-cyan-900 rounded-md mb-2 text-white hover:bg-opacity-70 duration-500">Write Blog</button>
        </div>
      <div className="w-[400px]">

        <ReactTyped
          strings={[
            "Blog Search Global ... Bangla Subtitle",
            "Blog Search Global ... Movie Name ",
            "Blog Search Global ... Relase Year ",
            "Blog Search Global ... Category ",
            "Blog Search Global ... Genrors ",
          ]}
          typeSpeed={100}
          backSpeed={80}
          attr="placeholder"
          loop
        >
          <input
            type="text"
            placeholder="Blog Search Global ... "
            onChange={handleChange}
            className="py-2 pl-10 pr-4  block w-full rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500"
          />
        </ReactTyped>
      </div>
      <BlogModal isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} />
    </div>
  );
};

export default BlogSearch;
