import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    try {
      axios.get(`http://localhost:5000/products/${id}`)
        .then(res => setProduct(res.data));
    } catch (error) {
      console.log("Error fetching data");
    }
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetail;