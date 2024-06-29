import SliderElement, { ISliderElement } from "./SliderElement";
import { v4 as uuidv4 } from "uuid";

function Slider() {
  const sliderElementState: ISliderElement[] = [
    {
      authorName: "John Smith",
      timeCreate: "15 March 2022",
      recipeSliderTitle: "Spicy delicious chicken wings",
      recipeSliderDescription:
        "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim ",
      recipeTimeCooking: 30,
      recipeIngredient: [
        {
          logo: "url",
          title: "30 minutes",
        },
      ],
    },
  ];

  return (
    <div>
      {sliderElementState.map(
        ({
          recipeIngredient,
          recipeSliderDescription,
          recipeSliderTitle,
          recipeTimeCooking,
          authorName,
          timeCreate,
        }) => (
          <SliderElement
            key={uuidv4()}
            authorName={authorName}
            timeCreate={timeCreate}
            recipeIngredient={recipeIngredient}
            recipeSliderDescription={recipeSliderDescription}
            recipeSliderTitle={recipeSliderTitle}
            recipeTimeCooking={recipeTimeCooking}
          />
        )
      )}
    </div>
  );
}
export default Slider;
