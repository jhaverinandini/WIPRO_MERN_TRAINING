const express = require("express");
const morgan = require("morgan");

const app = express();

/* logging middleware using morgan */
app.use(morgan("dev"));

/* set EJS as template engine */
app.set("view engine", "ejs");

/* sample product data */
const products = [
  { name: "Lipstick", price: 299 },
  { name: "Foundation", price: 499 },
  { name: "Eyeliner", price: 199 }
];

/* admin dashboard route */
app.get("/admin", (req, res) => {
  res.render("admin", { products });
});

/* error handling middleware */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

/* start server */
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
