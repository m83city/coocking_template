import "./Categories.scss";
import { v4 as uuidv4 } from "uuid";
import useImages from "../hook/useImages";

function Categories() {
  const image = useImages().getImageURL;
  interface ICategories {
    imageUrl: string;
    label: string;
  }
  const categoties: ICategories[] = [
    {
      imageUrl: image("breakfast"),
      label: "Breakfast",
    },
    {
      imageUrl: image("vegan"),
      label: "Vegan",
    },
    {
      imageUrl: image("meat"),
      label: "Meat",
    },
    {
      imageUrl: image("desert"),
      label: "Dessert",
    },
    {
      imageUrl: image("lunch"),
      label: "Lunch",
    },
    {
      imageUrl: image("chocolate"),
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
