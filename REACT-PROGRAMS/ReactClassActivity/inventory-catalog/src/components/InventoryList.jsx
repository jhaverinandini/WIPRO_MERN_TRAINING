import { useEffect, useState } from "react";
import InventoryCard from "./InventoryCard";

function InventoryList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error loading products");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4 mb-3" key={product.id}>
          <InventoryCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default InventoryList;
