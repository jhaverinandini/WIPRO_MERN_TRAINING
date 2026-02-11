import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, increaseQty, decreaseQty, clearCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Your Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <b>{item.name}</b>
            <p>₹{item.price}</p>
          </div>

          <div>
            <button onClick={() => decreaseQty(item.id)}>-</button>
            <span style={{ margin: "0 10px" }}>{item.qty}</span>
            <button onClick={() => increaseQty(item.id)}>+</button>
          </div>

          <p>₹{item.price * item.qty}</p>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <h3>Total: ₹{total}</h3>
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
}