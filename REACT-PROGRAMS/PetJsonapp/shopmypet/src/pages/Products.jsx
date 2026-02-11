const products = [
  { id: 1, name: "Dog Food", price: 500 },
  { id: 2, name: "Cat Toy", price: 300 },
  { id: 3, name: "Pet Shampoo", price: 250 }
];

function Products({ cart, setCart }) {
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>Products</h1>

      {products.map((p) => (
        <div
          key={p.id}
          style={{
            border: "2px solid black",
            padding: "10px",
            margin: "10px",
            background: "pink"
          }}
        >
          <h3>{p.name}</h3>
          <p>Price: ₹{p.price}</p>
          <button onClick={() => addToCart(p)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;