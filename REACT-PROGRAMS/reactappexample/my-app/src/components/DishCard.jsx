import MyButton from "./Button";

function DishCard({ dishName, cuisine, price }) {
  return (
    <div className="border border-gray-300 w-72 rounded p-4 m-2 bg-gray-50 shadow-lg flex flex-col gap-3 hover:bg-neutral-200 transition-all">
      
      <h2 className="font-bold text-lg">{dishName}</h2>

      <p>Cuisine: {cuisine}</p>

      <p className="font-semibold">Price: ₹{price}</p>

      <div className="flex justify-center">
        <MyButton title="Order Now" />
        <MyButton
          title="Navigate"
          onClick={() =>
            window.open("https://www.google.com/maps", "_blank")
          }
        />
      </div>
    </div>
  );
}

export default DishCard;