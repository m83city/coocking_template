import { v4 as uuidv4 } from "uuid";
import badge from "../img/badge.svg";
import dishPreview from "../img/dish_preview.png";
import authorImage from "../img/author.webp";
import pergamentImage from "../img/iconTag.png";
import buttonCircle from "../img/button_circle.svg";
import "./CarouselElement.scss";
export interface ICarouselElement {
  authorName: string;
  timeCreate: string;
  recipeCarouselTitle: string;
  recipeCarouselDescription: string;
  recipeTimeCooking: number;
  recipeIngredient: { logo: string; title: string }[];
}
function CarouselElement(carouselElement: ICarouselElement) {
  function Tag(logoUrl: string, title: string, shiftTag?: string) {
    return (
      <div className={`tag${shiftTag ? shiftTag : ""}`} key={uuidv4()}>
        <img src={logoUrl} alt="Tag logo" key={uuidv4()}></img>
        <div key={uuidv4()}>{title}</div>
      </div>
    );
  }

  return (
    <div className="carousel">
      <section className="carouselContent">
        {Tag(pergamentImage, "Hot Recipes", "Hot")}
        <div className="carouselTitle">
          {carouselElement.recipeCarouselTitle}
        </div>
        {carouselElement.recipeCarouselDescription}
        <div className="carouselTagContainer">
          {carouselElement.recipeIngredient.map((tagElement) =>
            Tag(tagElement.logo, tagElement.title)
          )}
        </div>
        <div className="carouselAuthorContainer">
          <div className="carouselAuthorContainerNamespaces">
            <img
              className="carouselAuthorImage"
              src={authorImage}
              alt="Author"
            ></img>
            <div className="carouselNameContainer">
              <div>{carouselElement.authorName}</div>
              <div>{carouselElement.timeCreate}</div>
            </div>
          </div>

          <button className="carouselButton">
            <span className="carouselButtonLabel">{"View Recipes"}</span>
            <img src={buttonCircle} alt="Arrow" />
          </button>
        </div>
      </section>
      <img className="carouselBadge" src={badge} alt="Badge" />
      <img className="carouselDishPhoto" src={dishPreview} alt="Dish preview" />
    </div>
  );
}
export default CarouselElement;
