/* eslint-disable @next/next/no-img-element */
import { slugify } from "@/utils/slugify";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { FaRegStar } from "react-icons/fa";
import { GiDuration } from "react-icons/gi";
import { IoTimerOutline } from "react-icons/io5";

const CardSingle = ({ data }) => {
  return (
    <>
    <div className="md:block hidden">
    <div className="flex hover:scale-[1.02] hover:border-gray-300 border-2 duration-500 items-center bg-white shadow-lg rounded-lg overflow-hidden md:h-24 h-16 mb-4">
      <div className="h-full md:w-24 w-16 flex-shrink-0">
        <img
          src={data?.thumbnail}
          alt={data?.title}
          className="object-cover h-full w-full"
        />
      </div>

      <div className="flex flex-col justify-between flex-grow px-4 ">
        <div>
          <h2 className="lg:text-2xl md:text-lg font-bold text-gray-800 -mt-4 truncate">
            {data?.title} Bangla Subtitle
          </h2>
          <div className="flex gap-3 lg:text-sm md:text-xs mt-2">
            <div className="flex gap-2 items-center font-semibold bg-gray-300 px-2 py-1 rounded-md">
              {" "}
              <IoTimerOutline /> <span>
              {data.createdAt ? formatDistanceToNow(new Date(data.createdAt), { addSuffix: true }) : 'N/A'}

                </span>{" "}
            </div>
            <div className="flex gap-2 items-center  font-semibold bg-gray-300 px-2 py-1 rounded-md">
              {" "}
              <FaRegStar /> <span>{data?.ratings ?? 2}</span>{" "}
            </div>
            <div className="flex gap-2 items-center font-semibold bg-gray-300 px-2 py-1 rounded-md">
              {" "}
              <GiDuration /> <span>{data?.runtime ?? 0}</span>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-2 lg:w-48 md:w-40">
        <p className="lg:w-8 lg:h-8 w-6 h-6 rounded-full bg-purple-600 text-white font-bold text-center uppercase flex justify-center flex-col">
          {data?.author?.name[0]}
        </p>
        <p className="text-gray-800 font-semibold capitalize lg:text-base md:text-sm">
          {data?.author?.name}
        </p>
      </div>

      <div className="flex-shrink-0 lg:pr-4 pr-3 lg:text-xl md:text-xs ">
        <Link
          target="_blank"
          href={`/bangla-subtitle/${data?.id}-${slugify(data?.title)}`}
          className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white md:px-4 md:py-2 lg:px-4 px-3 lg:py-2 py-3 rounded hover:bg-blue-700 transition"
        >
          Download
        </Link>
      </div>
    </div>
    </div>



    <div className="md:hidden">
    <div className="hover:scale-[1.02] hover:border-gray-300 border-2 duration-500 items-center bg-white shadow-lg rounded-lg overflow-hidden mb-4 p-2 text-center">
      <div className="h-full">
        <img
          src={data?.thumbnail}
          alt={data?.title}
          className="h-full w-full inline"
        />
      </div>

      <div className="flex flex-col justify-between flex-grow px-4 ">
        <div>
          <h2 className=" text-lg font-extrabold text-gray-800 truncate py-1">
            {data?.title} <br /> Bangla Subtitle
          </h2>
          <div className="md:flex gap-3 text-sm mt-2 text-center">
            <div className="flex text-center gap-2 items-center font-semibold bg-gray-300 px-2 py-1 rounded-md">
              {" "}
              <IoTimerOutline /> <span>
              {data.createdAt ? formatDistanceToNow(new Date(data.createdAt), { addSuffix: true }) : 'N/A'}

                </span>{" "}
            </div>

            <div className="flex items-center gap-5 justify-center mt-2">
            <div className="flex gap-2 items-center font-semibold bg-gray-300 px-2 py-1 rounded-md">
              {" "}
              <FaRegStar /> <span>{data?.ratings ?? 2}</span>{" "}
            </div>
            <div className="flex gap-2 items-center font-semibold bg-gray-300 px-2 py-1 rounded-md">
              {" "}
              <GiDuration /> <span>{data?.runtime ?? 0}</span>{" "}
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center  space-x-2 py-4">
        <p className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold text-center uppercase flex justify-center flex-col">
          {data?.author?.name[0]}
        </p>
        <p className="text-gray-800 font-semibold capitalize">
          {data?.author?.name}
        </p>
      </div>

      <div className="text-center pb-5">
        <Link
          target="_blank"
          href={`/bangla-subtitle/${data?.id}-${slugify(data?.title)}`}
          className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white  py-2 px-5 rounded hover:bg-blue-700 transition"
        >
          Download
        </Link>
      </div>
    </div>
    </div>
    </>
   
  );
};

export default CardSingle;


