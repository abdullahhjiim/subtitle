/* eslint-disable @next/next/no-img-element */
"use client";
import { formatHumanReadableDate } from "@/helpers/utility";
import Link from "next/link";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const [userData, setUserData] = useState(null);

  useEffect(() => {
      const getuser = async () => {
          const res = await fetch('/api/auth/user');
          const user = await res.json();
          setUserData(user);
      }
      
      getuser();
  
  },[]);


  let limit = 10;
  useEffect(() => {
    const fetchBlogs = async () => {

      const res = await fetch(`/api/blogs?page=${page}&limit=${limit}`, {cache : 'no-store'});
      const result = await res.json();


      setBlogs((prevBlogs) => [...prevBlogs, ...result?.blogs]);

      if (result.blogs.length + limit >= result.totalBlogs) {
        setHasMore(false);
      }
    };

    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const fetchMoreData = () => {
    if (hasMore) {
      setPage((page) => page + 1);
    }
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

  return (
    <div className="space-y-3 md:col-span-5">
      <InfiniteScroll
        dataLength={blogs.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <p className="text-center py-8 tracking text-sm font-semibold">
            {" "}
            Loading...
          </p>
        }
        endMessage={
          <p className="text-center py-8 tracking text-sm font-semibold">
            There are no more blogs .. Thank you.
          </p>
        }
      >
        {blogs.map((item, index) => {
          let imgNameList = [
            "React-Roadmap.jpg",
            "taiulwind-cn-thumb.jpg",
            "Underrated.jpg",
          ];
          let image = imgNameList[index % 3];

          return (
            <div className="blog-card my-2" key={item._id + index}>
              <Link href={`/blog/${item._id}`}>
                <img
                  className="blog-thumb"
                  src={`/assets/blogs/${image}`}
                  alt=""
                />
              </Link>
              <div className="mt-2 relative">
                <Link
                  href={`/blog/${item._id}`}
                  className="text-slate-300 text-xl lg:text-2xl"
                >
                  {item.title}
                </Link>
                <p className="mb-6 text-base text-slate-500 mt-1 overflow-hidden">
                  {prepareContent(item.content)}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center capitalize space-x-2">
                    <div className="avater-img bg-indigo-600 text-white">
                      <span className="">{item.author?.name[0]}</span>
                    </div>

                    <div>
                      <h5 className="text-slate-500 text-sm">
                        <Link href={`/blog/profile/${item.author._id}`}>
                          {item.author?.name}
                        </Link>
                      </h5>
                      <div className="flex items-center text-xs text-slate-700">
                        <span>
                          {formatHumanReadableDate(new Date(item.createdAt))}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-sm px-2 py-1 text-slate-700">
                    <span>{item.likes.length} Likes</span>
                  </div>
                </div>

                <div className="absolute right-0 top-0">
                  {userData?._id == item.author?._id && (<button>
                    <img src="/assets/icons/3dots.svg" alt="3dots of Action" />
                  </button>)}
                  

                  {/* <div className="action-modal-container">
                    <button className="action-menu-item hover:text-lwsGreen">
                      <img src="/assets/icons/edit.svg" alt="Edit" />
                      Edit
                    </button>
                    <button className="action-menu-item hover:text-red-500">
                      <img src="/assets/icons/delete.svg" alt="Delete" />
                      Delete
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          );
        })}
        {blogs?.length == 0 && <p>No blog found</p>}
      </InfiniteScroll>
    </div>
  );
};

export default BlogList;