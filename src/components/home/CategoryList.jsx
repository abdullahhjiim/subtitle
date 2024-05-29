import { getConfigurationByType } from "@/app/actionfrons";
import { FaArrowRight } from "react-icons/fa";

const CategoryList = async ({ title }) => {
  
  const genres = await getConfigurationByType(title);
  const genresList = genres?.configuration?.value ? genres?.configuration?.value.split(",") : [];

  return (
    <div className="max-w-md mx-auto bg-white overflow-hidden">
      <div className="p-4">
        <h2 className="flex items-center gap-4 justify-center text-2xl font-semibold text-center mb-4">
          {title} <FaArrowRight />
        </h2>
        <div className="flex flex-wrap justify-center">
          {genresList.map((category, index) => (
            <span
              key={index}
              className="inline-block bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-semibold m-1"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
