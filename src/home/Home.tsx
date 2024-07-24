import CarouselFood from "./CarouselFood";
import Categories from "./Categories";
import Header from "../component/Header";
import PromoRecipes from "./PromoRecipes";
import Button from "../component/Button";
import "./Home.scss";
import { InstagramEmbed } from "react-social-media-embed";
import { useState } from "react";
import RecipeCard from "../component/RecipeCard";
import { v4 } from "uuid";
import useImages from "../hook/useImages";
import Footer from "../component/Footer";

function Home() {
  const image = useImages().getImageURL;
  const instagramPostList: string[] = [
    "https://www.instagram.com/reel/C80RsyTyuaN/?hl=uk",
    "https://www.instagram.com/reel/C7py4cPvR3x/?hl=uk",
    "https://www.instagram.com/reel/C7BFMoFOCPc/?hl=uk",
    "https://www.instagram.com/reel/Ct4bdPvpzt3/?hl=uk",
  ];
  interface IRecipeCard {
    recipeId?: string;
    title?: string;
    favorite?: boolean;
    typeFood?: string;
    imageFood?: string;
  }

  const [recipesList, setRecipesList] = useState<IRecipeCard[]>([
    {
      recipeId: "0696b562-dca2-494f-b519-8ba2c4be929e",
      favorite: false,
      title: "Big and Juicy Wagyu Beef Cheeseburger",
      typeFood: "Snack",
      imageFood: image("burger"),
    },
    {
      recipeId: "e3da40f5-4792-4d88-bcec-7b69652c31f3",
      favorite: true,
      title: "Fresh Lime Roasted Salmon with Ginger Sauce",
      typeFood: "Fish",
      imageFood: image("salmon"),
    },
    {
      recipeId: "0e8e32bb-f1d4-4caf-8eed-744344f96511",
      favorite: false,
      title: "Strawberry Oatmeal Pancake with Honey Syrup",
      typeFood: "Breakfast",
      imageFood: image("pancake"),
    },
    {
      recipeId: "1fea3ce2-f547-4095-8ea9-99c5116d1761",
      favorite: true,
      title: "Chicken Meatballs with Cream Cheese",
      typeFood: "Meat",
      imageFood: image("meatBall"),
    },
    {
      recipeId: "a9fb5517-a75f-4eeb-ab05-87f5ffb0d497",
      favorite: true,
      title: "Fresh and Healthy Mixed Mayonnaise Salad",
      typeFood: "Healthy",
      imageFood: image("healthy"),
    },
    {
      recipeId: "4b467zz6-4ed8-46ce-ab02-31390a0fa975",
      favorite: true,
      title: "Fruity Pancake with Orange & Blueberry",
      typeFood: "Sweet",
      imageFood: image("healthy"),
    },
    {
      recipeId: "feb16a11-1183-41db-ac41-7abcf5643af6",
      favorite: true,
      title: "Fresh and Healthy Mixed Mayonnaise Salad",
      typeFood: "Healthy",
      imageFood: image("healthy"),
    },
    {
      recipeId: "fiif9c59-156d-4ace-92ef-9e70eb6621d7",
      favorite: true,
      title: "Fresh and Healthy Mixed Mayonnaise Salad",
      typeFood: "Healthy",
      imageFood: image("healthy"),
    },
  ]);
  const updateFavorite = (idCard: string) => {
    console.log(idCard);
    setRecipesList(
      recipesList.map((card) =>
        card.recipeId === idCard ? { ...card, favorite: !card.favorite } : card
      )
    );
  };

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
        <div className="homeRecipeFooterCards">
          {recipesList.map(
            ({ favorite, imageFood, title, recipeId, typeFood }) => {
              return (
                <RecipeCard
                  className={"homeRecipe"}
                  recipeId={recipeId}
                  favorite={favorite}
                  handleFavorite={updateFavorite}
                  title={title}
                  imageFood={imageFood}
                  typeFood={typeFood}
                  key={v4()}
                />
              );
            }
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Home;
