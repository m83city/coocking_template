import "./RecipeCard.scss";
import favoriteOn from "../img/favoriteOn.svg";
import favoriteOff from "../img/favoriteOff.svg";
import timerImage from "../img/timer.svg";
import forkKnife from "../img/forkKnife.svg";
import TagFood from "./TagFood";
export interface IRecipeCard {
  recipeId?: string;
  ads?: boolean;
  title?: string;
  favorite?: boolean;
  typeFood?: string;
  imageFood?: string;
  callback: (idCard: string) => void;
}
function RecipeCard({
  title,
  favorite,
  typeFood,
  imageFood,
  callback,
  recipeId,
}: IRecipeCard) {
  return (
    <div className="recipeCard">
      <img className="recipeCardImageFood" src={imageFood} alt=""></img>
      <button
        className="recipeCardFavorite"
        onClick={() => callback(recipeId!)}
      >
        <img
          className="recipeCardFavoriteImage"
          src={favorite ? favoriteOn : favoriteOff}
          alt=""
        ></img>
      </button>
      <h2 className="recipeCardTitle">{title}</h2>
      <div className="recipeCardTagContainer">
        <TagFood
          backgroundColor={"Transparent"}
          title={"30 Minutes"}
          logoUrl={timerImage}
        />
        <TagFood
          backgroundColor={"Transparent"}
          title={typeFood!}
          logoUrl={forkKnife}
        />
      </div>
    </div>
  );
}
export default RecipeCard;
