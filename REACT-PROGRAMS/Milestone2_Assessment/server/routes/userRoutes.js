const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

// GET all users
router.get("/", userController.getUsers);

// ADD new user
router.post("/", userController.addUser);

// DELETE user by id
router.delete("/:id", userController.deleteUser);

module.exports = router;