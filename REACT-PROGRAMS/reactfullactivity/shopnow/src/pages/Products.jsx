import { useEffect, useState } from "react";
import { useCart } from "../auth/CartContext";
import productsData from "../data/products.json";

export default function Products() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const filtered = products.filter(
    p => filter === "all" || p.category === filter
  );

  return (
    <div>
      <h2>Products</h2>

      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("women")}>Women</button>
        <button onClick={() => setFilter("men")}>Men</button>
        <button onClick={() => setFilter("kids")}>Kids</button>
      </div>

      <div className="products-grid">
        {filtered.map(p => (
          <div key={p.id} className="product-card">
            <img src={p.image} />
            <h4>{p.name}</h4>
            <p>₹{p.price}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}