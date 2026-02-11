const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("./models/User");
const auth = require("./middleware/auth");
const authorize = require("./middleware/authorize");

const app = express();
app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/jwt_rbac")
  .then(() => console.log("DB Connected"));


app.get("/createuser", async (req, res) => {
  await User.deleteMany({});
  await User.create({
    username: "admin",
    password: await bcrypt.hash("123", 10),
    role: "admin"
  });
  await User.create({
    username: "user",
    password: await bcrypt.hash("123", 10),
    role: "user"
  });
  res.send("Users created");
});
