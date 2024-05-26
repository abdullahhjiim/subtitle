/* eslint-disable @next/next/no-img-element */
"use client";
import UploadForm from "@/components/upload/UploadForm";
import { useState } from "react";

const ReleasePage = () => {
  const [searchData, setSearchData] = useState(null);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const startYear = 2024;
  const endYear = 1955;

  const yearOptions = [
    <option key={"year"} value={null}>
      Select Year
    </option>,
  ];
  for (let year = startYear; year >= endYear; year--) {
    yearOptions.push(
      <option key={year} value={year}>
        {year}
      </option>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSearch = async () => {
    setLoading(true);
    const title = formData?.title;
    const year = formData?.year;
    try{
         const res = await fetch(`/api/subtitle/search?title=${title}&year=${year}`, {method: "GET"});
         const data = await res.json();
         setSearchData(data);

    } catch(err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  console.log(searchData);

  return (
    <div className="ml-8 w-full">
      <div className="flex justify-between gap-12 rounded-md bg-gray-100 p-8">
        <div className="w-1/2 flex justify-center ml-8">
          {error && <p className="text-red-500"> {error}</p>}
          <div>
            <h3 className="text-2xl font-bold p-2 mb-4 ">Search Subtitle</h3>
            {searchData ? (
              <>
                <img
                  src="https://i.ytimg.com/vi/hRBHeFKmxo0/sddefault.jpg"
                  alt="Release Image"
                  className="w-full h-80 object-cover mb-4 rounded-md"
                />
                <h2 className="text-2xl font-bold mb-2">Release Information</h2>
                <p className="text-gray-700"></p>
              </>
            ) : (
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="">Title of Movie, TV Series, Documentery</label>
                <input
                  type="text"
                  name="title"
                  onChange={handleChange}
                  placeholder="Title"
                  className="min-w-[400px] px-2 py-1 border-2 border-gray-500 rounded-md"
                />{" "}
                <br />
                <label htmlFor="">Year of </label>
                <select
                  name="year"
                  id="year"
                  onChange={handleChange}
                  className="min-w-[400px] px-2 py-1 border-2 border-gray-500 rounded-md"
                >
                  {yearOptions}
                </select>
                <div className="flex justify-end mt-8 mr-2">
                  <button
                    onClick={handleSearch}
                    disabled={loading}
                    className="px-3 py-2 bg-gray-900 text-white rounded-md cursor-pointer hover:bg-opacity-70 "
                  >
                    Search
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center p-8">
          <UploadForm />
        </div>
      </div>
    </div>
  );
};

export default ReleasePage;
