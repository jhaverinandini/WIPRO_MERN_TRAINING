const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

const orderRoutes = require("./routes/orderRoutes");

app.use("/api/orders", orderRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});