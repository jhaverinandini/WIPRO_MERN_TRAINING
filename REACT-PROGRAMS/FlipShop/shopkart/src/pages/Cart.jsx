import { useEffect, useState } from "react";
import { getCart, removeFromCart } from "../api/api";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getCart().then(setCart);
  }, []);

  const deleteItem = (id) => {
    removeFromCart(id).then(() =>
      setCart(cart.filter(item => item.id !== id))
    );
  };

  return (
    <>
      <h2>My Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          {item.title} - ₹{item.price}
          <button onClick={() => deleteItem(item.id)}>Remove</button>
        </div>
      ))}
    </>
  );
}