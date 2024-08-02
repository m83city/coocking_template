import "./App.css";
import Footer from "./component/basic/footer/Footer";
import Header from "./component/basic/header/Header";
import { RecipeDetails } from "./pages/recipe-details/RecipeDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <RecipeDetails />
      <Footer />
    </div>
  );
}

export default App;
