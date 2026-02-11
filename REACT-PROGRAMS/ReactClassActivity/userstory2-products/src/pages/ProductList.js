import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error loading products");
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h1>Product List</h1>

      {products.map(product => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>
            {product.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
