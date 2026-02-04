import { useState } from "react";
import { Link } from "react-router-dom";

function InventoryCard({ product }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="card p-3 text-center">
      <h5>{product.name}</h5>
      <p>Price: ₹{product.price}</p>
      <p>Category: {product.category}</p>

      <button
        className="btn btn-primary mb-2"
        onClick={() => setFavorite(!favorite)}
      >
        {favorite ? "Favorited" : "Add to Favorite"}
      </button>

      <br />

      <Link to={`/products/${product.id}`} className="btn btn-link">
        View Details
      </Link>
    </div>
  );
}

export default InventoryCard;



