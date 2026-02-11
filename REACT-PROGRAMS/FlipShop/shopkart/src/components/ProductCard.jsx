export default function ProductCard({ product, onAdd }) {
  return (
    <div style={{ border: "1px solid gray", padding: 10, width: 200 }}>
      <img src={product.image} width="150" />
      <h4>{product.title}</h4>
      <p>₹ {product.price}</p>
      <button onClick={() => onAdd(product)}>Add to Cart</button>
    </div>
  );
}