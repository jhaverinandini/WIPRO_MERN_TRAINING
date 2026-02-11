const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const courseRoutes = require("./routes/courses");
app.use("/api/courses", courseRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Backend running on port 5000");
});