import useImages, { ImagesType } from "../../tools/hook/useImages";
import "./RecipeCard.scss";
import TagFood from "../basic/TagFood";
import { useDispatch } from "react-redux";
import { updateFavorite } from "../../tools/redux/slices/recipeListSlice";

export interface IRecipeCard {
  backgroundColor?: string;
  className?: string;
  recipeId?: string;
  ads?: boolean;
  title?: string;
  favorite?: boolean;
  typeFood?: string;
  imageFood: ImagesType;
}

function RecipeCard({
  backgroundColor,
  title,
  favorite,
  typeFood,
  imageFood,
  recipeId,
  className,
}: IRecipeCard) {
  const image = useImages().getImageURL;
  const dispatch = useDispatch();

  return (
    <div
      className={`recipeCard ${className ? className : ""}`}
      style={{ background: backgroundColor }}
    >
      <img className="recipeCardImageFood" src={image(imageFood)} alt="" />
      <button
        className="recipeCardFavorite"
        onClick={() => {
          dispatch(updateFavorite(recipeId!));
        }}
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
