import "./App.css";
import Footer from "./component/basic/footer/Footer";
import Header from "./component/basic/header/Header";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
