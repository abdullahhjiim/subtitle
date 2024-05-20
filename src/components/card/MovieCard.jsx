// components/MovieCard.js

const MovieCard = ({ imageUrl, year, name, type }) => {
  return (
    <div className="max-w-xs shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img className="w-full h-72 object-cover" src={imageUrl} alt={name} />
        <div className="absolute top-2 right-0 bg-pink-500 text-white px-2 py-1 text-sm">
          {year}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500">{type}</p>
      </div>
    </div>
  );
};

export default MovieCard;