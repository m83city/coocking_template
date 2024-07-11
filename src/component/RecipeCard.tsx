import "./RecipeCard.scss";
import favoriteOn from "../img/favoriteOn.svg";
import favoriteOff from "../img/favoriteOff.svg";
import timerImage from "../img/timer.svg";
import forkKnife from "../img/forkKnife.svg";
import TagFood from "./TagFood";
interface IRecipeCard {
  title: string;
  favorite: boolean;
  typeFood: string;
}
function RecipeCard({ title, favorite, typeFood }: IRecipeCard) {
  const favoriteCallback = () => {
    favorite = !favorite;
  };
  return (
    <div className="recipeCard">
      <img className="recipeCardImage" alt=""></img>
      <button className="recipeCardFavorite" onClick={() => favoriteCallback()}>
        <img src={favorite ? favoriteOn : favoriteOff} alt="">
          {" "}
        </img>
      </button>
      <h2 className="recipeCardTitle">{title}</h2>
      <div>
        <TagFood
          backgroundColor={"Transparent"}
          title={"30 Minutes"}
          logoUrl={timerImage}
        />
        <TagFood
          backgroundColor={"Transparent"}
          title={typeFood}
          logoUrl={forkKnife}
        />
      </div>
    </div>
  );
}
export default RecipeCard;
