import ContentItem from "../components/contentItem";
import { AppStyles, ContentStyled, Header1Styled } from "../styles/app.styles";

const About = () => {
  return (
    <AppStyles> 
      <ContentStyled>
        <Header1Styled>About</Header1Styled>
        <ContentItem />
      </ContentStyled>
    </AppStyles>
  );
};

export default About;
