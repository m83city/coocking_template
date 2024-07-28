import { v4 as uuidv4 } from "uuid";
import "./CarouselElement.scss";
import TagFood from "../basic/TagFood";
import Button from "../basic/Button";
import useImages from "../../hook/useImages";
export interface ICarouselElement {
  authorName: string;
  timeCreate: string;
  recipeCarouselTitle: string;
  recipeCarouselDescription: string;
  recipeTimeCooking: number;
  recipeIngredient: { logo: string; title: string }[];
}
function CarouselElement(carouselElement: ICarouselElement) {
  const image = useImages().getImageURL;
  return (
    <div className="carousel">
      <section className="carouselContent">
        <TagFood
          logoUrl={image("pergamentImage")}
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
              src={image("authorImage")}
              alt="Author"
            ></img>
            <div className="carouselNameContainer">
              <div>{carouselElement.authorName}</div>
              <div>{carouselElement.timeCreate}</div>
            </div>
          </div>
          <Button
            label={"View Recipes"}
            buttonImageURL={image("buttonCircle")}
          />
        </div>
      </section>
      <img className="carouselBadge" src={image("badge")} alt="Badge" />
      <img
        className="carouselDishPhoto"
        src={image("dishPreview")}
        alt="Dish preview"
      />
    </div>
  );
}
export default CarouselElement;
