import useImages from "../hook/useImages";
import "./RecipeCard.scss";
import TagFood from "./TagFood";
export interface IRecipeCard {
  backgroundColor?: string;
  className?: string;
  recipeId?: string;
  ads?: boolean;
  title?: string;
  favorite?: boolean;
  typeFood?: string;
  imageFood?: string;
  // handleFavorite: (idCard: string) => void;
}
function RecipeCard({
  backgroundColor,
  title,
  favorite,
  typeFood,
  imageFood,
  //handleFavorite,
  recipeId,
  className,
}: IRecipeCard) {
  const image = useImages().getImageURL;
  return (
    <div
      className={`recipeCard ${className ? className : ""}`}
      style={{ background: backgroundColor }}
    >
      <img className="recipeCardImageFood" src={imageFood} alt="" />
      <button
        className="recipeCardFavorite"
        onClick={
          () => {}
          // handleFavorite(recipeId!)
        }
      >
        <img
          className="recipeCardFavoriteImage"
          src={favorite ? image("favoriteOn") : image("favoriteOff")}
          alt=""
        ></img>
      </button>
      <h2 className="recipeCardTitle">{title}</h2>
      <div className="recipeCardTagContainer">
        <TagFood
          backgroundColor={"Transparent"}
          title={"30 Minutes"}
          logoUrl={image("timerImage")}
        />
        <TagFood
          backgroundColor={"Transparent"}
          title={typeFood!}
          logoUrl={image("forkKnife")}
        />
      </div>
    </div>
  );
}
export default RecipeCard;
