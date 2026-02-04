export default function Checkout() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.qty),
    0
  );

  const placeOrder = () => {
    alert("Order placed successfully 🎉");
    localStorage.removeItem("cart");
    window.location.href = "/";
  };

  return (
    <div>
      <h2>Checkout</h2>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map(item => (
        <p key={item.id}>
          {item.name} × {item.qty} = ₹{item.price * item.qty}
        </p>
      ))}

      <h3>Total: ₹{total}</h3>

      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
}