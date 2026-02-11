const express = require("express");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// GET users
router.get("/", (req, res) => {
  res.json([{ id: 1, name: "Niti" }]);
});

// POST user (protected route)
router.post("/", auth, (req, res) => {
  res.status(201).json({ message: "User created" });
});

module.exports = router;