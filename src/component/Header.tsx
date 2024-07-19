import facebook from "../img/facebook.svg";
import logo from "../img/logo.svg";
import twitter from "../img/twitter.svg";
import instagram from "../img/instagramBlack.svg";
import { v4 as uuidv4 } from "uuid";
import "./Header.scss";
function Header() {
  const headerMenu: string[] = [
    "Home",
    "Recipes",
    "Blog",
    "Contact",
    "About us",
  ];
  const headerSocialMediaGroup: string[] = [facebook, instagram, twitter];
  return (
    <div className="header">
      <div className="headerContainer">
        <img className="headerLogo" src={logo} alt="logo"></img>
        <div className="headerMenuContainer">
          {headerMenu.map((element) => (
            <div className="headerMenuElement" key={uuidv4()}>
              {element}
            </div>
          ))}
        </div>
        <div className="headerSocialMediaContainer">
          {headerSocialMediaGroup.map((element) => (
            <img
              className="headerSocialMediaElement"
              key={uuidv4()}
              src={element}
              alt="some"
            ></img>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
