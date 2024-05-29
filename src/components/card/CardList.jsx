import SeeMoreBtn from "../common/SeeMoreBtn";
import CardSingle from "./CardSingle";


const CardList = ({subtitles}) => {

  return (
    <div className="p-4">
      {subtitles && subtitles.map((card, index) => (
        <CardSingle
          key={card?.id}
          data={card}
          buttonLabel={'Download'}
          buttonLink={''}
        />
      ))}
      <div className="flex justify-center mt-8">
        <SeeMoreBtn  />
      </div>
    </div>
  );
};

export default CardList;
