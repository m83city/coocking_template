import React from "react";
import "./Categories.scss";
import breakfast from "../img/breakfast.png";
import vegan from "../img/vegan.png";
import meat from "../img/meat.png";
import desert from "../img/desert.png";
import lunch from "../img/lunch.png";
import chocolate from "../img/chocolate.png";
import { v4 as uuidv4 } from "uuid";

function Categories() {
  interface ICategories {
    imageUrl: string;
    label: string;
  }
  const categoties: ICategories[] = [
    {
      imageUrl: breakfast,
      label: "Breakfast",
    },
    {
      imageUrl: vegan,
      label: "Vegan",
    },
    {
      imageUrl: meat,
      label: "Meat",
    },
    {
      imageUrl: desert,
      label: "Dessert",
    },
    {
      imageUrl: lunch,
      label: "Lunch",
    },
    {
      imageUrl: chocolate,
      label: "Chocolate",
    },
  ];
  return (
    <div className="categories">
      <header className="categoriesHeader">
        <h4 className="categoriesHeaderTitle">{"Categories"}</h4>
        <button className="categoriesHeaderButton">
          {"View All Categories"}
        </button>
      </header>
      <div className="categoriesContainer">
        {categoties.map((element: ICategories) => {
          return (
            <div
              className={`categoriesElement ${element.label}`}
              key={uuidv4()}
            >
              <img
                src={element.imageUrl}
                alt="category img"
                className="categoriesImage"
              ></img>
              <label className="categoriesLabel">{element.label}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Categories;
