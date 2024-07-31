import { v4 } from "uuid";
import "./RecipesGrid.scss";
import RecipeCard from "../recipeCard/RecipeCard";
import { IListRecipeCard } from "../../tools/redux/slices/recipeListSlice";

interface IRecipeGrid {
  recipes: IListRecipeCard[]; // #TODO CREATE API AND MOVE ALL RECIPE TO MOCK-API
  column: string[];
  typeCard: "transparent" | "gradient";
  amountCards: number;
}

function RecipesGrid({ column, typeCard, recipes, amountCards }: IRecipeGrid) {
  const linearGradient =
    "linear-gradient((rgba(231, 249, 253, 0), rgba(231, 249, 253, 1)))";
  const modifyRecipe = recipes.slice(0, amountCards);
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

      <div
        className="recipesGrid"
        style={{ gridTemplateColumns: `${column.join(" ")}` }}
      >
        {modifyRecipe.map(
          ({ favorite, title, typeFood, imageFood, recipeId }) => {
            return (
              <RecipeCard
                backgroundColor={
                  typeCard === "transparent" ? "transparent" : linearGradient
                }
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
export default RecipesGrid;
