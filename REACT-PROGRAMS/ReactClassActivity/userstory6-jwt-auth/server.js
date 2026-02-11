const express = require("express");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");

const app = express();

console.log("server.js loaded");

// connect DB
connectDB();

// body parser
app.use(express.json());

// mount routes
app.use("/auth", authRoutes);
console.log("authRoutes loaded");

app.use("/inventory", inventoryRoutes);
console.log("inventoryRoutes loaded");

// test route
app.get("/", (req, res) => {
  res.send("Server running");
});

// 404
app.use((req, res) => {
  res.status(404).send("Route not found");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});