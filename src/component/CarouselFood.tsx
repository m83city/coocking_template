import CarouselElement, { ICarouselElement } from "./CarouselElement";
import { v4 as uuidv4 } from "uuid";
import timer from "../img/timer.svg";
import forkKnife from "../img/forkKnife.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarouselFood() {
  const carouselElementState: ICarouselElement[] = [
    {
      authorName: "John Smith 11",
      timeCreate: "15 March 2022",
      recipeCarouselTitle: "Spicy delicious chicken wings",
      recipeCarouselDescription:
        "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim ",
      recipeTimeCooking: 30,
      recipeIngredient: [
        {
          logo: timer,
          title: "30 minutes",
        },
        {
          logo: forkKnife,
          title: "Chicken",
        },
      ],
    },
    {
      authorName: "John Smith 22",
      timeCreate: "15 March 2022",
      recipeCarouselTitle: "Spicy delicious chicken wings",
      recipeCarouselDescription:
        "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim ",
      recipeTimeCooking: 30,
      recipeIngredient: [
        {
          logo: timer,
          title: "30 minutes",
        },
        {
          logo: forkKnife,
          title: "Chicken",
        },
      ],
    },
    {
      authorName: "John Smith 33",
      timeCreate: "15 March 2022",
      recipeCarouselTitle: "Spicy delicious chicken wings",
      recipeCarouselDescription:
        "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim ",
      recipeTimeCooking: 30,
      recipeIngredient: [
        {
          logo: timer,
          title: "30 minutes",
        },
        {
          logo: forkKnife,
          title: "Chicken",
        },
      ],
    },
  ];
  const autoplaySpeed: number = 10000;
  const speedAnimation: number = 1000;
  const contentStyle: React.CSSProperties = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <Slider
      autoplay
      adaptiveHeight
      autoplaySpeed={autoplaySpeed}
      speed={speedAnimation}
      centerPadding="60px"
      className="center"
      dots
    >
      {carouselElementState.map(
        ({
          recipeIngredient,
          recipeCarouselDescription,
          recipeCarouselTitle,
          recipeTimeCooking,
          authorName,
          timeCreate,
        }) => (
          <CarouselElement
            key={uuidv4()}
            authorName={authorName}
            timeCreate={timeCreate}
            recipeIngredient={recipeIngredient}
            recipeCarouselDescription={recipeCarouselDescription}
            recipeCarouselTitle={recipeCarouselTitle}
            recipeTimeCooking={recipeTimeCooking}
          />
        )
      )}
    </Slider>
  );
}
export default CarouselFood;
