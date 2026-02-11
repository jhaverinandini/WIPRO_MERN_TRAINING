import { useEffect, useState } from "react";
import { getProducts, addToCart } from "../api/api";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div style={{ display: "flex", gap: 20 }}>
      {products.map(p => (
        <ProductCard key={p.id} product={p} onAdd={addToCart} />
      ))}
    </div>
  );
}