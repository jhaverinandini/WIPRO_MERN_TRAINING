const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// 🔥 PROOF LOG
console.log("✅ authRoutes file loaded");

// CREATE USER
router.post("/createuser", async (req, res) => {
  console.log("✅ /auth/createuser HIT");

  try {
    const { username, password, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      password: hashedPassword,
      role
    });

    await user.save();
    res.json({ message: "User created successfully" });
  } catch (err) {
    res.status(400).json({ message: "User already exists" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) return res.status(400).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid password" });

  const token = jwt.sign(
    { id: user._id, role: user.role },
    "secretkey",
    { expiresIn: "1h" }
  );

  res.json({ token });
});

module.exports = router;