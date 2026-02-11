import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";

const app = express();
app.use(cors());

const __dirname = path.resolve();

app.get("/products", (req, res) => {
  const data = JSON.parse(
    fs.readFileSync(path.join(__dirname, "db.json"), "utf-8")
  );
  res.json(data.products);
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
