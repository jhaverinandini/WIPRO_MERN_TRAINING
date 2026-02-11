const express = require("express");
const app = express();
const bookRouter = require("./routes/books");

// Middleware to parse JSON
app.use(express.json());

// Custom Logger Middleware
app.use((req, res, next) => {
  const time = new Date().toLocaleString();
  console.log(`[${time}] [${req.method}] ${req.url}`);
  next();
});

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to Express Server");
});

// Status Route
app.get("/status", (req, res) => {
  res.json({
    server: "running",
    uptime: "OK"
  });
});

// Products Route (Query Params)
app.get("/products", (req, res) => {
  const name = req.query.name;

  if (name) {
    res.json({ query: name });
  } else {
    res.send("Please provide a product name");
  }
});

// Books Routes (Modular)
app.use("/books", bookRouter);

// 404 Handler
app.use((req, res) => {
  res.status(404).send("Route not found");
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start Server
app.listen(4000, () => {
  console.log("Server running on port 4000");
});