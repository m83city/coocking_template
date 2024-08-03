import "./App.css";
import Footer from "./component/basic/footer/Footer";
import Header from "./component/basic/header/Header";
import Home from "./pages/home/Home";
import { RecipeDetails } from "./pages/recipe-details/RecipeDetails";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <RecipeDetails />
      <Footer />
    </div>
  );
}

export default App;
