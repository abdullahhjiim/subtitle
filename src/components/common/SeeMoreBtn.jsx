const SeeMoreBtn = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-bold py-2 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none"
    >
      See More
    </button>
  );
};

export default SeeMoreBtn;
