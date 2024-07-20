import { v4 as uuidv4 } from "uuid";
import "./Header.scss";
import useImages from "../hook/useImages";
function Header() {
  const headerMenu: string[] = [
    "Home",
    "Recipes",
    "Blog",
    "Contact",
    "About us",
  ];
  const image = useImages().getImageURL;
  const headerSocialMediaGroup: string[] = [
    image("facebook"),
    image("instagramBlackIcon"),
    image("twitter"),
  ];
  return (
    <div className="header">
      <div className="headerContainer">
        <img className="headerLogo" src={image("logo")} alt="logo"></img>
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
