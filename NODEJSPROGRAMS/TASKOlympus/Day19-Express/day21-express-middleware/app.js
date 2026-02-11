const express = require("express");
const app = express();
const PORT = 3000;

/* ---------- Middleware ---------- */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging middleware
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url} at ${new Date().toISOString()}`);
  next();
});

/* ---------- POST /users ---------- */
app.post("/users", (req, res) => {
  res.json({
    message: "User created successfully",
    data: req.body
  });
});

/* ---------- Test Route ---------- */
app.get("/", (req, res) => {
  res.send("App.js server running");
});

/* ---------- Server ---------- */
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});