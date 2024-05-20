"use client";
import SeeMoreBtn from "../common/SeeMoreBtn";
import CardSingle from "./CardSingle";

const cards = [
  {
    photo: "https://via.placeholder.com/100",
    title: "Card Title 1",
    subtitle: "Subtitle 1",
    author: "Author 1",
    authorPhoto: "https://via.placeholder.com/50",
    buttonLabel: "Download",
    buttonLink: "#",
  },
  {
    photo: "https://via.placeholder.com/100",
    title: "Card Title 2",
    subtitle: "Subtitle 2",
    author: "Author 2",
    authorPhoto: "https://via.placeholder.com/50",
    buttonLabel: "Download",
    buttonLink: "#",
  },
  {
    photo: "https://via.placeholder.com/100",
    title: "Card Title 1",
    subtitle: "Subtitle 1",
    author: "Author 1",
    authorPhoto: "https://via.placeholder.com/50",
    buttonLabel: "Download",
    buttonLink: "#",
  },
  {
    photo: "https://via.placeholder.com/100",
    title: "Card Title 2",
    subtitle: "Subtitle 2",
    author: "Author 2",
    authorPhoto: "https://via.placeholder.com/50",
    buttonLabel: "Download",
    buttonLink: "#",
  },
  {
    photo: "https://via.placeholder.com/100",
    title: "Card Title 1",
    subtitle: "Subtitle 1",
    author: "Author 1",
    authorPhoto: "https://via.placeholder.com/50",
    buttonLabel: "Download",
    buttonLink: "#",
  },
  {
    photo: "https://via.placeholder.com/100",
    title: "Card Title 2",
    subtitle: "Subtitle 2",
    author: "Author 2",
    authorPhoto: "https://via.placeholder.com/50",
    buttonLabel: "Download",
    buttonLink: "#",
  },
  {
    photo: "https://via.placeholder.com/100",
    title: "Card Title 1",
    subtitle: "Subtitle 1",
    author: "Author 1",
    authorPhoto: "https://via.placeholder.com/50",
    buttonLabel: "Download",
    buttonLink: "#",
  },
];

const CardList = () => {
  const handleClick = () => {
    console.log("come here");
  };
  return (
    <div className="p-4">
      {cards.map((card, index) => (
        <CardSingle
          key={index}
          photo={card.photo}
          title={card.title}
          subtitle={card.subtitle}
          author={card.author}
          authorPhoto={card.authorPhoto}
          buttonLabel={card.buttonLabel}
          buttonLink={card.buttonLink}
        />
      ))}
      <div className="flex justify-center mt-8">
        <SeeMoreBtn onClick={handleClick} />
      </div>
    </div>
  );
};

export default CardList;
