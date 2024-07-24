import { useState } from "react";
import useImages from "../hook/useImages";
import Button from "./Button";
import "./Footer.scss";
import RecipeCard from "./RecipeCard";
import { v4 } from "uuid";
function Footer() {
  const image = useImages().getImageURL;
  interface IRecipeCard {
    recipeId?: string;
    title?: string;
    favorite?: boolean;
    typeFood?: string;
    imageFood?: string;
  }
  const updateFavorite = (idCard: string) => {
    console.log(idCard);
    setRecipesList(
      recipesList.map((card) =>
        card.recipeId === idCard ? { ...card, favorite: !card.favorite } : card
      )
    );
  };
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
  ]);
  return (
    <div className="footer">
      <section className={"footerEmailBox"}>
        <h4 className="footerEmailBoxHeader">Deliciousness to your inbox</h4>
        <p className="footerEmailBoxTitle">
          {
            "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
          }
        </p>
        <div className="footerEmailBoxInput">
          <input
            className="footerEmailBoxInputEmail"
            type="email"
            placeholder={"Your email address..."}
          ></input>
          <Button className="footerEmailBoxInputButton" label={"Subscribe"} />
          <img
            className="footerEmailBoxLeft"
            alt=""
            src={image("footerEmailBoxLeft")}
          ></img>
          <img
            className="footerEmailBoxRight"
            alt=""
            src={image("footerEmailBoxRight")}
          ></img>
        </div>
      </section>
      <section className={"footerRecipeBox"}>
        <h4>{"You may like these recipe tooYou may like these recipe too"}</h4>
        <div className="">
          {recipesList.map((recipe) => {
            return (
              <RecipeCard
                key={v4()}
                className="footerRecipe"
                handleFavorite={updateFavorite}
              />
            );
          })}
        </div>
      </section>
      <section className="footerBox">
        <div>
          <div>
            <img className="headerLogo" src={image("logo")} alt="logo"></img>
            <p>{"Lorem ipsum dolor sit amet, consectetuipisicing elit, "}</p>
          </div>
          <menu></menu>
        </div>
      </section>
      <span className="divider"></span>
    </div>
  );
}
export default Footer;
