const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth.middleware");
const authorize = require("../middleware/role.middleware");

const {
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

// Admin only
router.get("/", protect, authorize("admin"), getAllUsers);

router.get("/:id", protect, getSingleUser);

router.put("/:id", protect, updateUser);

router.delete("/:id", protect, authorize("admin"), deleteUser);

module.exports = router;