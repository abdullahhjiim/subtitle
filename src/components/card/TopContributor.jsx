// components/TopContributorCard.js

const TopContributor = ({ image, name, subs, followers }) => {
  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg p-4 max-w-md mx-auto">
      <img
        className="w-16 h-16 rounded-full object-cover mr-4"
        src={image}
        alt={name}
      />
      <div className="flex-1">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-sm text-gray-600">Total Subs: {subs}</p>
        <p className="text-sm text-gray-600">Followers: {followers}</p>
      </div>
      <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-1 px-3 rounded-full font-semibold">
        Follow
      </button>
    </div>
  );
};

export default TopContributor;
