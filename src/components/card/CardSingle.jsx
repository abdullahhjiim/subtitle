import { FaRegStar } from "react-icons/fa";
import { GiDuration } from "react-icons/gi";
import { IoTimerOutline } from "react-icons/io5";

const CardSingle = ({
  data,
  buttonLabel,
  buttonLink,
}) => {

  return (
    <div className="flex  hover:scale-[1.02] hover:border-gray-300 border-2 duration-500 items-center bg-white shadow-lg rounded-lg overflow-hidden h-24 mb-4">
      <div className="h-full w-24 flex-shrink-0">
        <img src={data?.thumbnail} alt={data?.title} className="object-cover h-full w-full" />
      </div>
      <div className="flex flex-col justify-between flex-grow px-4 ">
        <div>
          <h2 className="text-xl font-bold text-gray-800 -mt-4">{data?.title}</h2>
          <div className="flex gap-3 text-sm mt-2">
            <div className="flex gap-2 items-center font-semibold bg-gray-300 px-2 py-1 rounded-md"> <IoTimerOutline /> <span>20 min ago</span> </div>
            <div className="flex gap-2 items-center font-semibold bg-gray-300 px-2 py-1 rounded-md"> <FaRegStar /> <span>{data?.ratings ?? 2}</span> </div>
            <div className="flex gap-2 items-center font-semibold bg-gray-300 px-2 py-1 rounded-md"> <GiDuration /> <span>{data?.runtime ?? 0}</span> </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-2 w-48">
        <p className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold text-center uppercase flex justify-center flex-col">{data?.author?.name[0]}</p>
        <p className="text-gray-800 font-semibold capitalize text-sm">{data?.author?.name}</p>
      </div>
      <div className="flex-shrink-0 pr-4">
        <a
          href={buttonLink}
          className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {buttonLabel}
        </a>
      </div>
    </div>
  );
};

export default CardSingle;
