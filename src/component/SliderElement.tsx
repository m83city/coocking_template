import { v4 as uuidv4 } from "uuid";
import badge from "../img/badge.svg";
import dishPreview from "../img/dish_preview.png";
import authorImage from "../img/author.jpg";
export interface ISliderElement {
  authorName: string;
  timeCreate: string;
  recipeSliderTitle: string;
  recipeSliderDescription: string;
  recipeTimeCooking: number;
  recipeIngredient: { logo: string; title: string }[];
}
function SliderElement(sliderElement: ISliderElement) {
  function Tag(logoUrl: string, title: string) {
    return (
      <div className="tagContainer" key={uuidv4()}>
        <img src={logoUrl} alt="Author logo" key={uuidv4()}></img>
        <div key={uuidv4()}>{title}</div>
      </div>
    );
  }

  return (
    <div className="slider">
      <div className="sliderContent">
        <div className="a">
          <img alt="icon" />
          <div>{"Hot Recipes"}</div>
        </div>
        <div>{sliderElement.recipeSliderTitle}</div>
        {sliderElement.recipeSliderDescription}
        <div>
          <div>{sliderElement.recipeTimeCooking + " minutes"}</div>
          {sliderElement.recipeIngredient.map((tagElement) =>
            Tag(tagElement.logo, tagElement.title)
          )}
        </div>
        <div>
          <img src={authorImage} alt="Author"></img>
          <div>
            <div>{sliderElement.authorName}</div>
            <div>{sliderElement.timeCreate}</div>
          </div>
          <button>{"View Recipes"}</button>
        </div>
      </div>
      <img src={badge} alt="Badge" />
      <img src={dishPreview} alt="Dish preview" />
    </div>
  );
}
export default SliderElement;
