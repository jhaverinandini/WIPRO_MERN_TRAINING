import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/products/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error("Product not found");
        }
        return res.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error loading product");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: ₹{product.price}</p>

      <Link to="/">⬅ Back to Product List</Link>
    </div>
  );
}

export default ProductDetail;
