"use client";
import { ReactTyped } from "react-typed";

const SearchCm = () => {
  return (
    <div className="w-[400px]">
      <ReactTyped
        strings={[
          "এখানে খুঁজুন ... বাংলা সাবটাইটল",
          "এখানে খুঁজুন ... মুভির নাম  ",
          "এখানে খুঁজুন ... রিলিজ ইয়ার ",
          "এখানে খুঁজুন ... ক্যাটাগরি ",
        ]}
        typeSpeed={100}
        backSpeed={80}
        attr="placeholder"
        loop
      >
        <input
          type="text"
          placeholder="এখানে খুঁজুন ... "
          className="py-2 pl-10 pr-4  block w-full rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500"
        />
      </ReactTyped>
    </div>
  );
};

export default SearchCm;
