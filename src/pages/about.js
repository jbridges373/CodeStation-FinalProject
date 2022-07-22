import ContentItem from "../components/contentItem";
import "../css/app.css";
import "../css/about.css";

const About = () => {
  return (
    <div classname="AppStyles">
      <div clasname="ConentFlexbox">
        <h1>About</h1>
        <ContentItem />
      </div>
    </div>
  );
};

export default About;
