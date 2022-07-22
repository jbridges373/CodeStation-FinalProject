import "../css/header.css";
import "../css/app.css";
import Logo from "../images/logoandiconSVGs/codeStationRectangleLogo.svg";

const Header = () => {
  return (
    <div className="HeaderStyled">
      <img className="ImgStyle" src={Logo} alt="logo" />
      <h1 className="Header1Styled">Header Banner</h1>
    </div>
  );
};

export default Header;
