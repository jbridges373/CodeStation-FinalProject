// import { ContentFlexBox, ContentItemBox } from "../styles/about.styles";
import "../css/about.css";

const ContentItem = () => {
  const theGang = [
    "Kat",
    "Dom",
    "Wren",
    "Alex B",
    "Gaz",
    "Karl",
    "John",
    "James",
    "Abdelbar",
    "Benny",
    "Eddie",
    "Olly",
    "Alex K",
    "Safwan",
    "Keisha",
    "Josh",
    "Liz",
  ];
  return (
    <div className="ContentFlexBox">
      {theGang.map((gang, i) => {
        return (
          <div className="ContentItemBox" key={i}>
            {gang}
          </div>
        );
      })}
    </div>
  );
};

export default ContentItem;
