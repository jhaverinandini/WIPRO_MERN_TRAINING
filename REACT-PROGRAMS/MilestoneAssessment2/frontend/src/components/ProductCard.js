function ProductCard({ product }) {
  return (
    <div className="card m-2 p-2">
      <h5>{product.name}</h5>
      <p>₹{product.price}</p>
      <p>{product.category}</p>
    </div>
  );
}

export default ProductCard;