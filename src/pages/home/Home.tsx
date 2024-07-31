import CarouselFood from "../../component/carousel/CarouselFood";
import Categories from "../../component/categories/Categories";
import RecipesGrid from "../../component/recipeGrid/RecipesGrid";
import Button from "../../component/basic/Button";
import "./Home.scss";
import { InstagramEmbed } from "react-social-media-embed";
import { useEffect } from "react";
import { v4 } from "uuid";
import useImages from "../../tools/hook/useImages";
import EmailBox from "../../component/emailBox/EmailBox";
import { useAPI } from "../../tools/hook/useAPI";
import { useSelector } from "react-redux";
import { RootState } from "../../tools/redux/interfaces/shared";

function Home() {
  const { getRecipeList } = useAPI();
  const image = useImages().getImageURL;
  const recipeList = useSelector((store: RootState) => store.recipeList);
  const instagramPostList: string[] = [
    "https://www.instagram.com/reel/C80RsyTyuaN/?hl=uk",
    "https://www.instagram.com/reel/C7py4cPvR3x/?hl=uk",
    "https://www.instagram.com/reel/C7BFMoFOCPc/?hl=uk",
    "https://www.instagram.com/reel/Ct4bdPvpzt3/?hl=uk",
  ];

  useEffect(() => {
    getRecipeList();
  }, []);

  return (
    <article>
      <button onClick={() => getRecipeList()}>try api </button>
      <CarouselFood />
      <Categories />
      <RecipesGrid
        amountCards={9}
        column={["1fr", "1fr", "1fr"]}
        recipes={recipeList}
        typeCard="gradient"
      />
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
          <img src={image("chef")} alt=""></img>
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
            return (
              <InstagramEmbed key={v4()} url={instagramPostURL} width={328} />
            );
          })}
        </div>
        <Button
          className={"homeInstagramButton"}
          label={"Visit Our Instagram"}
          buttonImageURL={image("instagramWhiteIcon")}
        />
      </section>
      <section key={v4()} className="homeRecipeFooter">
        <div className="homeRecipeFooterHeader">
          <h2 className="homeRecipeFooterHeaderTitle ">
            {"Try this delicious recipe to make your day"}
          </h2>
          <p className="homeRecipeFooterHeaderContent">
            {
              "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
            }
          </p>
        </div>
      </section>
      <RecipesGrid
        amountCards={8}
        column={["1fr", "1fr", "1fr", "1fr"]}
        recipes={recipeList}
        typeCard={"transparent"}
      />
      <EmailBox />
    </article>
  );
}
export default Home;
