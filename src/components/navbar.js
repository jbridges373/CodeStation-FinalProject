import { Link } from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
  const navbarList = ["Home", "Events", "About", "Account"];

  return (
    <div classname="NavbarStyled">
      {navbarList.map((navbarItem, i) => {
        let path = "/" + navbarItem;
        return (
          <div classname="NavItemStyled">
            <Link to={path} key={i}>
              {navbarItem}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
