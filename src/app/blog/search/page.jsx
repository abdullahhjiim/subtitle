/* eslint-disable @next/next/no-img-element */
"use client";
import BlogList from "@/components/blog/BlogList";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const searchInputRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (searchParams.get("query")) {
      setSearchQuery(searchParams.get("query"));
    }
  }, [searchParams]);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchInputRef]);

  useEffect(() => {
    
    const getSearchData = async (queryStr) => {
      const res = await fetch(`/api/blogs/search?query=${queryStr}`, {
        method: "GET",
      });
      const data = await res.json();
      setSearchData(data.blogs);
    };

    getSearchData(query);
  }, [query]);

  function debounce(func, delay) {
    let timeout = null;
    return (...args) => {
      if (timeout) clearTimeout(timeout);

      timeout = setTimeout(() => {
        func(...args);
        timeout = null;
      }, delay);
    };
  }

  const fetchSuggestions = debounce((query) => {
    setQuery(query);
  }, 700);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    fetchSuggestions(e.target.value);
  };

  const prepareContent = (fullText) => {
    const words = fullText.split(' ');

    if (words.length > 26) {
      const truncatedText = words.slice(0, 26).join(' ') + '...';
      return truncatedText;
    } else {
      return fullText;
    }
  }

  console.log(searchData);

  return (
    <div className="">
      <div className="container mx-auto">
        <BlogList />
      </div>
      <section className="absolute left-0 top-0 w-full h-full grid place-items-center backdrop-blur-sm z-50">
        <div className="relative w-6/12 mx-auto bg-[#617071] p-8 border border-slate-600/50 rounded-lg shadow-lg shadow-slate-400/10">
          <div>
            <h3 className="font-bold text-xl text-white pl-2 text-slate-400 my-2">
              Search for Your Desire Blogs
            </h3>
            <input
              type="text"
              ref={searchInputRef}
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Start Typing to Search"
              className="w-full bg-transparent p-2 text-base text-white outline-none border-none rounded-lg focus:ring focus:ring-indigo-600"
            />
          </div>

          {searchData.length > 0 && (
            <div className="">
              <h3 className="text-slate-400 font-bold mt-6">Search Results</h3>
              <div className="my-4 divide-y-2 divide-slate-500/30 max-h-[440px] overflow-y-scroll overscroll-contain">
                {searchData.map((item) => {
                  return (
                    <div className="flex gap-6 py-2 cursor-pointer" key={item._id} onClick={() => router.push(`/blog/${item._id}`)}>
                      <img
                        className="h-28 object-contain"
                        src="/assets/blogs/taiulwind-cn-thumb.jpg"
                        alt=""
                      />
                      <div className="mt-2">
                        <h3 className="text-slate-300 text-xl font-bold">
                          {item.title}
                        </h3>

                        <p className="mb-6 text-sm text-slate-500 mt-1">
                          {prepareContent(item.content)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <Link href="/blog">
            <img
              src="/assets/icons/close.svg"
              alt="Close"
              className="absolute right-2 top-2 cursor-pointer w-8 h-8"
            />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SearchPage;
