function Cart({ cart }) {
  return (
    <div>
      <h1>Your Cart 🛒</h1>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <p>
              {item.name} – ₹{item.price}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;