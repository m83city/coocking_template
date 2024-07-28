import { v4 } from "uuid";
import "./RecipesGrid.scss";
import RecipeCard, { IRecipeCard } from "../component/RecipeCard";

interface IRecipeGrid {
  recipes: IRecipeCard[]; // #TODO CREATE API AND MOVE ALL RECIPE TO MOCK-API
  column: string[];
  typeCard: "transparent" | "gradient";
}

function RecipesGrid({ column, typeCard, recipes }: IRecipeGrid) {
  // const updateFavorite = (idCard: string) => {
  //   setRecipes((prevRecipes) =>
  //     prevRecipes.map((card) =>
  //       card.recipeId === idCard ? { ...card, favorite: !card.favorite } : card
  //     )
  //   );
  // };
  const linearGradient =
    "linear-gradient((rgba(231, 249, 253, 0), rgba(231, 249, 253, 1)))";
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
        {recipes.map(
          ({ favorite, title, typeFood, imageFood, ads, recipeId }) => {
            return (
              <RecipeCard
                backgroundColor={
                  typeCard === "transparent" ? "transparent" : linearGradient
                }
                //handleFavorite={updateFavorite}
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
