import { v4 } from "uuid";
import RecipeCard from "../component/RecipeCard";
import "./PromoRecipes.scss";
import burgerCard from "../img/burgerCard.png";
import salmonCard from "../img/salmonCard.png";
import pancakeCard from "../img/pancakeCard.png";
import healthyCard from "../img/healthyCard.png";
import meatBallCard from "../img/meatBallCard.png";
import Ads from "../component/Ads";
import { useState } from "react";

function PromoRecipes() {
  interface IRecipeCard {
    recipeId?: string;
    ads?: boolean;
    title?: string;
    favorite?: boolean;
    typeFood?: string;
    imageFood?: string;
  }

  const [recipes, setRecipes] = useState<IRecipeCard[]>([
    {
      recipeId: "0696b562-dca2-494f-b519-8ba2c4be929e",
      favorite: false,
      title: "Big and Juicy Wagyu Beef Cheeseburger",
      typeFood: "Snack",
      imageFood: burgerCard,
    },
    {
      recipeId: "e3da40f5-4792-4d88-bcec-7b69652c3ff3",
      favorite: true,
      title: "Fresh Lime Roasted Salmon with Ginger Sauce",
      typeFood: "Fish",
      imageFood: salmonCard,
    },
    {
      recipeId: "0e8e32bb-f1d4-4caf-8a3d-744344f96511",
      favorite: false,
      title: "Strawberry Oatmeal Pancake with Honey Syrup",
      typeFood: "Breakfast",
      imageFood: pancakeCard,
    },
    {
      recipeId: "1fea3ce2-f547-4585-8ea9-99c5116d1761",
      favorite: true,
      title: "Chicken Meatballs with Cream Cheese",
      typeFood: "Meat",
      imageFood: meatBallCard,
    },
    {
      recipeId: "a9fb5517-a75f-4f6b-ab05-87f5ffb0d497",
      favorite: true,
      title: "Fresh and Healthy Mixed Mayonnaise Salad",
      typeFood: "Healthy",
      imageFood: healthyCard,
    },
    {
      recipeId: "4b467386-4ed8-46ce-ab02-31390a0fa975",
      ads: true,
      favorite: true,
      title: "Fruity Pancake with Orange & Blueberry",
      typeFood: "Sweet",
      imageFood: healthyCard,
    },
    {
      recipeId: "feb16a11-0983-41db-ac41-7abcf5643af6",
      favorite: true,
      title: "Fresh and Healthy Mixed Mayonnaise Salad",
      typeFood: "Healthy",
      imageFood: healthyCard,
    },
    {
      recipeId: "fd5f9c59-156d-4ace-92ef-9e70eb6621d7",
      favorite: true,
      title: "Fresh and Healthy Mixed Mayonnaise Salad",
      typeFood: "Healthy",
      imageFood: healthyCard,
    },
    {
      recipeId: "a9b808f6-710b-4553-88a8-b8ea5958bfb4",
      favorite: true,
      title: "Fresh and Healthy Mixed Mayonnaise Salad",
      typeFood: "Healthy",
      imageFood: healthyCard,
    },
  ]);

  const updateFavorite = (idCard: string) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((card) =>
        card.recipeId === idCard ? { ...card, favorite: !card.favorite } : card
      )
    );
  };
  return (
    <div className="recipes">
      <header className="recipesHeader">
        <h1 className="recipesTitle"> {"Simple and tasty recipes"}</h1>
        <h6 className="recipesSubTitle">
          {
            "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
          }
        </h6>
      </header>

      <div className="recipesGrid">
        {recipes.map(
          ({ favorite, title, typeFood, imageFood, ads, recipeId }) => {
            return ads ? (
              <Ads />
            ) : (
              <RecipeCard
                callback={updateFavorite}
                recipeId={recipeId}
                imageFood={imageFood}
                favorite={favorite}
                title={title}
                typeFood={typeFood}
                key={v4()}
              />
            );
          }
        )}
      </div>
    </div>
  );
}
export default PromoRecipes;
