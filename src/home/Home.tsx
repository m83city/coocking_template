import CarouselFood from "./CarouselFood";
import Categories from "./Categories";
import Header from "../component/Header";
import PromoRecipes from "./PromoRecipes";
import chef from "../img/chef.png";
import Button from "../component/Button";
import instagramIcon from "../img/instagramWhite.svg";
import "./Home.scss";
import { InstagramEmbed } from "react-social-media-embed";

function Home() {
  const instagramPostList: string[] = [
    "https://www.instagram.com/reel/C80RsyTyuaN/?hl=uk",
    "https://www.instagram.com/reel/C7py4cPvR3x/?hl=uk",
    "https://www.instagram.com/reel/C7BFMoFOCPc/?hl=uk",
    "https://www.instagram.com/reel/Ct4bdPvpzt3/?hl=uk",
  ];
  return (
    <>
      <Header />
      <CarouselFood />
      <Categories />
      <PromoRecipes />
      <section className="homeContent">
        <div className="homeContentHeader">
          <h2 className="homeContentTitle">
            {"Everyone can be a chef in their own kitchen"}
          </h2>
          <span className="homeContentBody">
            {
              "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
            }
          </span>
          <Button className="homeContentButton" label={"Learn More"} />
        </div>
        <div>
          <img src={chef} alt=""></img>
        </div>
      </section>
      <section className="homeInstagram">
        <h2 className="homeInstagramTitle">
          {"Check out @foodieland on Instagram"}"
        </h2>
        <p className="homeInstagramText">
          {
            "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
          }
        </p>
        <div className="homeInstagramContainer">
          {instagramPostList.map((instagramPostURL) => {
            return <InstagramEmbed url={instagramPostURL} width={328} />;
          })}
        </div>
        <Button
          className={"homeInstagramButton"}
          label={"Visit Our Instagram"}
          buttonImageURL={instagramIcon}
        />
      </section>
    </>
  );
}
export default Home;
