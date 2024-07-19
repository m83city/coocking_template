import CarouselFood from "./CarouselFood";
import Categories from "./Categories";
import Header from "../component/Header";
import PromoRecipes from "./PromoRecipes";
import chef from "../img/chef.png";
import Button from "../component/Button";
import "./Home.scss";
function Home() {
  return (
    <>
      <Header />
      <CarouselFood />
      <Categories />
      <PromoRecipes />
      <div className="homeContent">
        <div className="homeContentHeader">
          <span className="homeContentTitle">
            {"Everyone can be a chef in their own kitchen"}
          </span>
          <span className="homeContentBody">
            {
              "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
            }
          </span>
          <Button className="homeContentButton" label={"Learn More"} />
        </div>
        <div>
          <img src={chef} alt=""></img>
        </div>
      </div>
    </>
  );
}
export default Home;
