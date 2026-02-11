function ProductCard({ product }) {
  return (
    <div
      style={{
        border: "2px solid #2563eb",
        padding: "15px",
        width: "200px",
        borderRadius: "10px",
      }}
    >
      <h3>{product.name}</h3>
      <p>₹ {product.price}</p>
      <button style={{ background: "green", color: "white", padding: "5px" }}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
