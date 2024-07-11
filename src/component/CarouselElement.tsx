import { v4 as uuidv4 } from "uuid";
import badge from "../img/badge.svg";
import dishPreview from "../img/dish_preview.png";
import authorImage from "../img/author.webp";
import pergamentImage from "../img/iconTag.png";
import buttonCircle from "../img/button_circle.svg";
import "./CarouselElement.scss";
import TagFood from "./TagFood";
export interface ICarouselElement {
  authorName: string;
  timeCreate: string;
  recipeCarouselTitle: string;
  recipeCarouselDescription: string;
  recipeTimeCooking: number;
  recipeIngredient: { logo: string; title: string }[];
}
function CarouselElement(carouselElement: ICarouselElement) {
  return (
    <div className="carousel">
      <section className="carouselContent">
        <TagFood
          logoUrl={pergamentImage}
          title={"Hot Recipes"}
          backgroundColor={"White"}
        />
        <div className="carouselTitle">
          {carouselElement.recipeCarouselTitle}
        </div>
        {carouselElement.recipeCarouselDescription}
        <div className="carouselTagContainer">
          {carouselElement.recipeIngredient.map((tagElement) => (
            <TagFood
              key={uuidv4()}
              backgroundColor={"Dark"}
              logoUrl={tagElement.logo}
              title={tagElement.title}
            />
          ))}
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
