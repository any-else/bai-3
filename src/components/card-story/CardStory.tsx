import "./CardStory.css";

interface ICardStoryProps {
  dataStory: any;
}
const CardStory = (props: ICardStoryProps) => {
  const { dataStory } = props;
  console.log("dataStory", dataStory);
  return (
    <div
      className="container"
      style={{ backgroundImage: `url(${dataStory.image})` }}
    >
      <div
        className="img-icon"
        style={{ backgroundImage: `url(${dataStory.icon})` }}
      ></div>
      <p>{dataStory.name}</p>
    </div>
  );
};

export default CardStory;
