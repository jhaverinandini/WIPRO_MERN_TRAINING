const express = require("express");
const auth = require("../middleware/auth");
const authorize = require("../middleware/authorize");

const router = express.Router();

router.get("/admin", auth, authorize("admin"), (req, res) => {
  res.send("Welcome, Admin!");
});

module.exports = router;