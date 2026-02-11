const express = require("express");
const router = express.Router();

const { placeOrder } = require("../orderControllers/orderController");
const { validateOrder } = require("../middlewares/validateOrder");

router.post("/place", validateOrder, placeOrder);

module.exports = router;