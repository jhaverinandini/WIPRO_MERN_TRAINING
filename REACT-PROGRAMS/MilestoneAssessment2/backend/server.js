const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Initial product data
let products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    category: "Electronics",
    description: "HP Laptop"
  },
  {
    id: 2,
    name: "Phone",
    price: 30000,
    category: "Electronics",
    description: "Samsung Phone"
  }
];

// GET all products
app.get("/products", (req, res) => {
  res.json(products);
});

// GET product by ID
app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
});

// POST new product (ID: 1,2,3...)
app.post("/products", (req, res) => {
  const newProduct = {
    id: products.length + 1,  // sequential id
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    description: req.body.description
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Start server
app.listen(5000, () => {
  console.log("Backend server running on http://localhost:5000");
});