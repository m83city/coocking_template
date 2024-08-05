import { v4 as uuidv4 } from "uuid";
import "./CarouselElement.scss";
import TagFood from "../TagFood";
import Button from "../Button";
import useImages from "../../../tools/hook/useImages";
import { AuthorBadge } from "../AuthorBadge";

export interface ICarouselElement {
  authorName: string;
  timeCreate: Date;
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
          <AuthorBadge
            authorName={carouselElement.authorName}
            timeCreate={carouselElement.timeCreate}
          />
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