import productsData from "../data/products.json";
import { useState } from "react";

export default function Admin() {
  const [products, setProducts] = useState(productsData);

  const deleteProduct = id => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      {products.map(p => (
        <div key={p.id}>
          {p.name}
          <button onClick={() => deleteProduct(p.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}