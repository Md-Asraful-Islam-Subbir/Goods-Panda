import Backpack from "./components/categories/Backpack";
import Categories from "./components/categories/Categories";
import Shoe from "./components/categories/Shoe";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/navbar";


function App() {
  return (
    <div className="flex flex-col items-center">
      <Navbar/>
      <Header/>
      <Categories/>
      <Shoe/>
      <Backpack/>
      <Footer/>
    </div>
  );
}

export default App;
