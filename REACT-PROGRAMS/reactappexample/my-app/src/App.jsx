import Header from "./components/Header";
import DishCard from "./components/DishCard";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Header />

      <h3 className="text-center mt-4 text-xl">
        Explore Our Popular Dishes
      </h3>

      <p className="text-center text-gray-600">
        Delicious food prepared by expert chefs
      </p>

      <div className="flex flex-wrap justify-center mt-4">
        <DishCard dishName="Butter Chicken" cuisine="Indian" price="320" />
        <DishCard dishName="Veg Manchurian" cuisine="Chinese" price="220" />
        <DishCard dishName="Margherita Pizza" cuisine="Italian" price="450" />
        <DishCard dishName="Masala Dosa" cuisine="South Indian" price="180" />
        <DishCard dishName="Tacos" cuisine="Mexican" price="260" />
        <DishCard dishName="Paneer Tikka" cuisine="Indian" price="280" />
        <DishCard dishName="Fried Rice" cuisine="Chinese" price="200" />
        <DishCard dishName="Brownie" cuisine="Dessert" price="150" />
      </div>

      <Footer />
    </>
  );
}

export default App;