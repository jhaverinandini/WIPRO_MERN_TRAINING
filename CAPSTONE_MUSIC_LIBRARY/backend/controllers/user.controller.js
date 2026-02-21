const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

// admin get all songs
exports.getAllUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

// Get single user
exports.getSingleUser = async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};

// Update user
exports.updateUser = async (req, res) => {
  const { name, email, phone, password } = req.body;

  let updateData = { name, email, phone };

  if (password) {
    updateData.password = await bcrypt.hash(password, 10);
  }

  const user = await User.findByIdAndUpdate(
    req.params.id,
    updateData,
    { new: true }
  ).select("-password");

  if (!user) return res.status(404).json({ message: "User not found" });

  res.json(user);
};

// Delete user
exports.deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);

  if (!user) return res.status(404).json({ message: "User not found" });

  res.json({ message: "User deleted successfully" });
};