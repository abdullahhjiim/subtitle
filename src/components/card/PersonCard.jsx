const PersonCard = ({ imageUrl, name, email, followers }) => {
  return (
    <div className="w-full p-1 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex justify-center mt-4">
        <img
          className="w-24 h-24 object-cover rounded-full border-4 border-white"
          src={imageUrl}
          alt={name}
        />
      </div>
      <div className="text-center mt-2">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600 text-sm">{email}</p>
        <div className="mt-2">
          <span className="text-gray-600 font-medium">
            {followers} Followers
          </span>
        </div>
      </div>
      <div className="flex justify-center mt-4 mb-4">
        <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded hover:opacity-90 focus:outline-none">
          Follow
        </button>
      </div>
    </div>
  );
};

export default PersonCard;
