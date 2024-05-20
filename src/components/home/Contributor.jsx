import TopContributor from "../card/TopContributor";

const contributors = [
  {
    id: 1,
    name: "John Doe",
    image: "https://via.placeholder.com/150",
    subs: 120,
    followers: 300,
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "https://via.placeholder.com/150",
    subs: 200,
    followers: 450,
  },
  {
    id: 3,
    name: "Alice Johnson",
    image: "https://via.placeholder.com/150",
    subs: 150,
    followers: 320,
  },
  {
    id: 4,
    name: "Michael Brown",
    image: "https://via.placeholder.com/150",
    subs: 180,
    followers: 400,
  },
  {
    id: 5,
    name: "Emily Davis",
    image: "https://via.placeholder.com/150",
    subs: 220,
    followers: 500,
  },
];

const Contributor = () => {
  return (
    <div className="mt-8">
      <h2 className="flex items-center gap-4 justify-center text-2xl font-semibold text-center mb-4">
        Top 5 Contributor
      </h2>
      <div className="">
        <div className="p-4 space-y-4">
          {contributors.map((contributor) => (
            <TopContributor
              key={contributor.id}
              image={contributor.image}
              name={contributor.name}
              subs={contributor.subs}
              followers={contributor.followers}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contributor;
