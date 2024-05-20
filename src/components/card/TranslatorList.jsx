"use client";
import PersonCard from "./PersonCard";

const users = [
  {
    imageUrl: "https://via.placeholder.com/150",
    name: "John Doe",
    email: "john.doe@example.com",
    followers: 1234,
  },
  {
    imageUrl: "https://via.placeholder.com/150",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    followers: 5678,
  },
  {
    imageUrl: "https://via.placeholder.com/150",
    name: "John Doe",
    email: "john.doe@example.com",
    followers: 1234,
  },
  {
    imageUrl: "https://via.placeholder.com/150",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    followers: 5678,
  },
  {
    imageUrl: "https://via.placeholder.com/150",
    name: "John Doe",
    email: "john.doe@example.com",
    followers: 1234,
  },
  {
    imageUrl: "https://via.placeholder.com/150",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    followers: 5678,
  },
  {
    imageUrl: "https://via.placeholder.com/150",
    name: "John Doe",
    email: "john.doe@example.com",
    followers: 1234,
  },
  {
    imageUrl: "https://via.placeholder.com/150",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    followers: 5678,
  },
  {
    imageUrl: "https://via.placeholder.com/150",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    followers: 5678,
  },
  {
    imageUrl: "https://via.placeholder.com/150",
    name: "John Doe",
    email: "john.doe@example.com",
    followers: 1234,
  },
  {
    imageUrl: "https://via.placeholder.com/150",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    followers: 5678,
  },
  {
    imageUrl: "https://via.placeholder.com/150",
    name: "John Doe",
    email: "john.doe@example.com",
    followers: 1234,
  },
  {
    imageUrl: "https://via.placeholder.com/150",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    followers: 5678,
  },
  {
    imageUrl: "https://via.placeholder.com/150",
    name: "John Doe",
    email: "john.doe@example.com",
    followers: 1234,
  },
  {
    imageUrl: "https://via.placeholder.com/150",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    followers: 5678,
  },
];

const TranslatorList = () => {
  const handleClick = () => {
    console.log("ss");
  };
  return (
    <div className="">
      <div className="p-4 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {users.map((user, index) => (
          <PersonCard
            key={index}
            imageUrl={user.imageUrl}
            name={user.name}
            email={user.email}
            followers={user.followers}
          />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={handleClick}
          className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none"
        >
          All Translator
        </button>
      </div>
    </div>
  );
};

export default TranslatorList;
