import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import ProductStore from "../flux/ProductStore";
import { loadProducts } from "../flux/ProductActions";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("ALL");
  const { addToCart } = useCart();

  // Load products from API and Flux store
  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => {
        loadProducts(data);
        setProducts(data);
      });

    const onChange = () => {
      setProducts(ProductStore.getProducts());
    };

    ProductStore.addChangeListener(onChange);

    return () => {
      ProductStore.removeChangeListener(onChange);
    };
  }, []);

  // Category filter logic
  const filteredProducts =
    category === "ALL"
      ? products
      : products.filter((p) =>
          p.name.toLowerCase().includes(category.toLowerCase())
        );

  return (
    <div className="page-wrapper">
      <h2>Products</h2>

      {/* Category Buttons */}
      <div className="category-buttons">
        <button onClick={() => setCategory("ALL")}>All</button>
        <button onClick={() => setCategory("Lipliner")}>Lipliners</button>
        <button onClick={() => setCategory("Lipstick")}>Lipsticks</button>
        <button onClick={() => setCategory("Gloss")}>Gloss</button>
      </div>

      {/* Products Grid */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
            />
            <h4>{product.name}</h4>
            <p>₹{product.price}</p>
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p style={{ marginTop: "25px", textAlign: "center" }}>
          No products found in this category
        </p>
      )}
    </div>
  );
}