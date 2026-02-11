import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const { logout } = useAuth();
  const navigate = useNavigate();

  // 🔹 Fetch products from json-server
  const fetchProducts = () => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // 🔹 Add product
  const addProduct = () => {
    if (!name || !price) {
      alert("Please fill all fields");
      return;
    }

    fetch("http://localhost:4000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price: Number(price),
        image:
          image ||
          "https://via.placeholder.com/200x150?text=New+Product",
      }),
    })
      .then(() => {
        setName("");
        setPrice("");
        setImage("");
        fetchProducts();
      })
      .catch((err) => console.error("Error adding product:", err));
  };

  // 🔹 Delete product
  const deleteProduct = (id) => {
    fetch(`http://localhost:4000/products/${id}`, {
      method: "DELETE",
    })
      .then(() => fetchProducts())
      .catch((err) => console.error("Error deleting product:", err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Dashboard</h2>

      {/* ADD PRODUCT FORM */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Add Product</h3>

        <input
          type="text"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />

        <input
          type="text"
          placeholder="Image URL (optional)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <br />

        <button onClick={addProduct}>Add Product</button>
      </div>

      {/* PRODUCT LIST */}
      <h3>All Products</h3>
      {products.length === 0 && <p>No products found</p>}

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} – ₹{product.price}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => deleteProduct(product.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* LOGOUT */}
      <button
        style={{ marginTop: "20px" }}
        onClick={() => {
          logout();
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}