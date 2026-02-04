import { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

 useEffect(() => {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

  const fixedCart = storedCart.map(item => ({
    ...item,
    qty: item.qty ? item.qty : 1,           // 🔥 FIX
    price: Number(item.price)               // 🔥 FIX
  }));

  setCart(fixedCart);
  localStorage.setItem("cart", JSON.stringify(fixedCart));
}, []);

  const updateCart = (updated) => {
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const increaseQty = (id) => {
    const updated = cart.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    updateCart(updated);
  };

  const decreaseQty = (id) => {
    const updated = cart
      .map(item =>
        item.id === id ? { ...item, qty: item.qty - 1 } : item
      )
      .filter(item => item.qty > 0);

    updateCart(updated);
  };

  const total = cart.reduce(
  (sum, item) => sum + Number(item.price) * Number(item.qty),
  0
);

  return (
    <div>
      <h2>Your Cart 🛒</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map(item => (
        <div key={item.id} style={{ marginBottom: "15px" }}>
          <img src={item.image} width="80" />
          <h4>{item.name}</h4>
          <p>₹{item.price}</p>

          <button onClick={() => decreaseQty(item.id)}>-</button>
          <span style={{ margin: "0 10px" }}>{item.qty}</span>
          <button onClick={() => increaseQty(item.id)}>+</button>
        </div>
      ))}

      {cart.length > 0 && <h3>Total: ₹{total}</h3>}
    </div>
  );
  <a href="/checkout">
  <button>Proceed to Checkout</button>
</a>
}