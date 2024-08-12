"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Search = ({ industriesList, genresList }) => {

  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState({
    year: "",
    genres: "",
    industries: "",
  });

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const state = { ...searchTerm, [name]: value };

    setSearchTerm(state);
  };

  const doSearch = () => {
    if(searchTerm.year || searchTerm.genres || searchTerm.industries) {
      console.log(searchTerm);
      router.push(`/search?year=${searchTerm.year}&genre=${searchTerm.genres}&language=${searchTerm.industries}`);
    }
  }

  const years = [];
  for (let year = 2024; year >= 1975; year--) {
    years.push({ year });
  }

  return (
    <>
      <div className="lg:max-h-[250px] mt-6">
        <div id="searchParams" className={"!shadow-none"}>
          <div>
            <div className="md:text-xl text-base font-extrabold">
            <span >Language</span>
            </div>
            <h4 className="mt-2 md:text-sm text-xs">
              <select
                name="industries"
                id="industries"
                defaultValue={searchTerm.industries}
                onChange={handleInputs}
              >
                <option value="">Select Language</option>
                {industriesList.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </h4>
          </div>
          <div>
          <div className="md:text-xl text-base font-extrabold">
            <span >Genres</span>
            </div>
            <h4 className="mt-2 md:text-sm text-xs">
              <select
                name="genres"
                id="genres"
                defaultValue={searchTerm.genres}
                onChange={handleInputs}
              >
                <option value="">Select Genres</option>
                {genresList.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </h4>
          </div>
          <div>
          <div className="md:text-xl text-base font-extrabold">
            <span >Year</span>
            </div>

            <h4 className="mt-2 md:text-sm text-xs">
              <select
                name="year"
                id="year"
                defaultValue={searchTerm.year}
                onChange={handleInputs}
              >
                <option value="">Select Year</option>
                {years.map((item) => (
                  <option key={item.year} value={item.year}>
                    {item.year}
                  </option>
                ))}
              </select>
            </h4>
          </div>
        </div>
      </div>

      <button className="search-btn md:text-base text-sm" onClick={doSearch}>
        🔍️ &nbsp; { " Search"}
      </button>
    </>
  );
};

export default Search;
