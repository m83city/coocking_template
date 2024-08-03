import useImages from "../../../tools/hook/useImages";
import { Divider } from "../Divider";
import "./Footer.scss";
import { v4 } from "uuid";

function Footer() {
  const image = useImages().getImageURL;

  const socialMediaGroup: string[] = [
    image("facebook"),
    image("instagramBlackIcon"),
    image("twitter"),
  ];
  const headerMenu: string[] = ["Recipes", "Blog", "Contact", "About us"];
  return (
    <div className="footer">
      <div className="footerContainerTop">
        <div className="footerLogoBox">
          <img className="footerLogo" src={image("logo")} alt="logo"></img>
          <p className="footerLogoText">
            {"Lorem ipsum dolor sit amet, consectetuipisicing elit, "}
          </p>
        </div>
        <ul className="footerBoxMenu">
          {headerMenu.map((menu: string) => {
            return (
              <li key={v4()} className="footerBoxMenuElement">
                {menu}
              </li>
            );
          })}
        </ul>
      </div>
      <Divider dividerType="Horizontal" />
      <div className="footerContainerBottom">
        <span className="footerCopyrightBlock">
          {"© 2020 Flowbase. Powered by"}
          <p className="footerCopyrightText">{"Webflow"}</p>
        </span>
        <div className="footerSocialMediaContainer">
          {socialMediaGroup.map((element) => (
            <img
              className="footerSocialMediaElement"
              key={v4()}
              src={element}
              alt=""
            ></img>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Footer;
