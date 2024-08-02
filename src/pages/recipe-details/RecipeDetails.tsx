import { useSelector } from "react-redux";
import EmailBox from "../../component/emailBox/EmailBox";
import RecipesGrid from "../../component/recipeGrid/RecipesGrid";
import "./RecipeDetails.scss";
import { RootState } from "../../tools/redux/interfaces/shared";
import { recipeMock } from "../../tools/redux/slices/recipeListSlice";
import useImages from "../../tools/hook/useImages";
export const RecipeDetails = () => {
  const recipesList = useSelector((store: RootState) => store.recipeList);

  const mock: recipeMock = {
    imageFood: "adsFood",
    recipeId: "0696b562-dca2-494f-b519-8ba2c4be929e",
    recipeName: "Health Japanese Fried Rice",
    details: {
      createDate: new Date("2017-01-26"),
      authonName: "Edvard More",
      cookTime: 30,
      directions: [
        {
          title: "Lorem ipsum dolor sit amet ",
          description:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        },
        {
          title: "Lorem ipsum dolor sit amet ",
          description:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        },
        {
          title: "Lorem ipsum dolor sit amet ",
          description:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        },
        {
          title: "Lorem ipsum dolor sit amet ",
          description:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        },
      ],
      ingredients: {
        mainDish: [
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
        ],
        sauce: [
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
        ],
      },
      mainDish: "Chicken", //replace typeFood
      nutrition: {
        calories: 219.9,
        totalFat: 10.7,
        protein: 7.9,
        carbohydrate: 22.3,
        cholesterol: 37.4,
      },
      prepTime: 15,
    },
  };
  const image = useImages().getImageURL;
  return (
    <>
      <header>
        <div>
          <h1>{mock.recipeName}</h1>
          <div className="carouselAuthorContainerNamespaces">
            <img
              className="carouselAuthorImage"
              src={image("authorImage")}
              alt="Author"
            ></img>
            <div className="carouselNameContainer">
              <div>{mock.details.authonName}</div>
              <div>{mock.details.createDate.toString()}</div>
            </div>
          </div>
          <div>
            <p>{"PREP TIME"}</p>
            <time>{`${mock.details.prepTime} Minutes`}</time>
          </div>
          <div>
            <p>{"COOK TIME"}</p>
            <time>{`${mock.details.cookTime} Minutes`}</time>
          </div>
        </div>
        <button>{"PRINT"}</button>
        <button>{"SHARE"}</button>
      </header>
      <section>
        <div>
          <img></img>
          <aside> nutrition information</aside>
        </div>
        <p>short title</p>
      </section>
      <section className="ingridient">
        <ul>
          <li></li>
        </ul>
        <ul>
          <li></li>
        </ul>
        <aside>Other Recipe</aside>
      </section>
      <main>
        <ul>
          Directions
          <li></li>
        </ul>
      </main>
      <EmailBox />
      <RecipesGrid
        amountCards={4}
        column={["1fr", "1fr", "1fr", "1fr"]}
        typeCard="transparent"
        recipes={recipesList}
      />
    </>
  );
};
