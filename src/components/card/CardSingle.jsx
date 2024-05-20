// components/CardListItem.js

const CardSingle = ({
  photo,
  title,
  subtitle,
  author,
  authorPhoto,
  buttonLabel,
  buttonLink,
}) => {
  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden h-24 mb-4">
      <div className="h-full w-24 flex-shrink-0">
        <img src={photo} alt={title} className="object-cover h-full w-full" />
      </div>
      <div className="flex flex-col justify-between flex-grow p-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-2 w-48">
        <img
          src={authorPhoto}
          alt={author}
          className="rounded-full w-12 h-12"
        />
        <p className="text-gray-500">{author}</p>
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
