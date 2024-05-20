
const UserDetailsCard = ({ user }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex justify-center mt-4">
        <img 
          className="w-24 h-24 rounded-full" 
          src={user.imageUrl} 
          alt="User Profile" 
        />
      </div>
      <div className="text-center mt-4">
        <h2 className="text-2xl font-semibold">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
      </div>
      <div className="text-center mt-4">
        <p className="text-gray-600">Followers: {user.followers}</p>
      </div>
      <div className="text-center my-4">
        <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-2 rounded-full shadow-md">
          Follow
        </button>
      </div>
    </div>
  );
};

export default UserDetailsCard;
