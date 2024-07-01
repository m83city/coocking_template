import { v4 as uuidv4 } from "uuid";
import badge from "../img/badge.svg";
import dishPreview from "../img/dish_preview.png";
import authorImage from "../img/author.webp";
import pergamentImage from "../img/iconTag.png";
import "./SliderElement.scss";
export interface ISliderElement {
  authorName: string;
  timeCreate: string;
  recipeSliderTitle: string;
  recipeSliderDescription: string;
  recipeTimeCooking: number;
  recipeIngredient: { logo: string; title: string }[];
}
function SliderElement(sliderElement: ISliderElement) {
  function Tag(logoUrl: string, title: string, shiftTag?: string) {
    return (
      <div className={`tag${shiftTag ? shiftTag : ""}`} key={uuidv4()}>
        <img src={logoUrl} alt="Tag logo" key={uuidv4()}></img>
        <div key={uuidv4()}>{title}</div>
      </div>
    );
  }

  return (
    <div className="slider">
      <div className="sliderContent">
        {Tag(pergamentImage, "Hot Recipes", "Hot")}
        <div className="sliderTitle">{sliderElement.recipeSliderTitle}</div>
        {sliderElement.recipeSliderDescription}
        <div className="sliderTagContainer">
          {sliderElement.recipeIngredient.map((tagElement) =>
            Tag(tagElement.logo, tagElement.title)
          )}
        </div>
        <div className="sliderAuthorContainer">
          <div className="sliderAuthorContainerNamespaces">
            <img
              className="sliderAuthorImage"
              src={authorImage}
              alt="Author"
            ></img>
            <div className="sliderNameContainer">
              <div>{sliderElement.authorName}</div>
              <div>{sliderElement.timeCreate}</div>
            </div>
          </div>

          <button>{"View Recipes"}</button>
        </div>
      </div>
      <img className="sliderBadge" src={badge} alt="Badge" />
      <img className="sliderDishPhoto" src={dishPreview} alt="Dish preview" />
    </div>
  );
}
export default SliderElement;
