import { useSelector } from "react-redux";
import EmailBox from "../../component/emailBox/EmailBox";
import RecipesGrid from "../../component/recipeGrid/RecipesGrid";
import "./RecipeDetails.scss";
import { RootState } from "../../tools/redux/interfaces/shared";
import { recipeMock } from "../../tools/redux/slices/recipeListSlice";
import useImages, { ImagesType } from "../../tools/hook/useImages";
import { v4 } from "uuid";
import { AuthorBadge } from "../../component/basic/AuthorBadge";
import { Divider } from "../../component/basic/Divider";
export const RecipeDetails = () => {
  const recipesList = useSelector((store: RootState) => store.recipeList);

  const mock: recipeMock = {
    imageFood: "adsFood",
    recipeId: "0696b562-dca2-494f-b519-8ba2c4be929e",
    recipeName: "Health Japanese Fried Rice",
    details: {
      createDate: new Date(1990, 12, 1),
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
  const DetailsTag = ({
    title,
    time,
    imageURL,
  }: {
    title: string;
    time: number;
    imageURL: ImagesType;
  }) => {
    return (
      <div className="headerTag">
        <img className="headerTagImage" src={image(imageURL)} alt=""></img>
        <div className="headerTagContainer">
          <p className="headerTagTitle">{title}</p>
          <time className="headerTagTime">{`${time} Minutes`}</time>
        </div>
      </div>
    );
  };
  const HeaderButton = ({
    imageURL,
    title,
  }: {
    title: string;
    imageURL: ImagesType;
  }) => (
    <button className="headerButton">
      <img className="headerButtonImage" src={image(imageURL)} alt=""></img>{" "}
      <p className="headerButtonTitle">{title}</p>
    </button>
  );
  return (
    <>
      <header className="detailsHeader">
        <div className="detailsHeaderContainer">
          <h1 className="detailsHeaderName">{mock.recipeName}</h1>
          <AuthorBadge
            authorName={mock.details.authonName}
            timeCreate={mock.details.createDate}
          />
          <Divider dividerType="Vertical" />
          <DetailsTag
            imageURL="timer"
            title="PREP TIME"
            time={mock.details.prepTime}
            key={v4()}
          />
          <Divider dividerType="Vertical" />
          <DetailsTag
            imageURL="timer"
            title="COOK TIME"
            time={mock.details.cookTime}
            key={v4()}
          />
          <Divider dividerType="Vertical" />
        </div>
        <HeaderButton imageURL="print" title="PRINT" key={v4()} />
        <HeaderButton imageURL="share" title="SHARE" key={v4()} />
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
