"use client";
import { ReactTyped } from "react-typed";

const SearchCm = () => {
  return (
    <div className="w-[400px]">
      <ReactTyped
        strings={[
          "Search here ... Bangla Subtitle",
          "Search here ... Movie Name ",
          "Search here ... Relase Year ",
          "Search here ... Category ",
          "Search here ... Genrors ",
        ]}
        typeSpeed={100}
        backSpeed={80}
        attr="placeholder"
        loop
      >
        <input
          type="text"
          placeholder="Search here ... "
          className="py-2 pl-10 pr-4  block w-full rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500"
        />
      </ReactTyped>
    </div>
  );
};

export default SearchCm;
