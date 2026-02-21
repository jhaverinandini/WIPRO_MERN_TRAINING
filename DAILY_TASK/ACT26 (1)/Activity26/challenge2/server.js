const express = require("express");
require("dotenv").config();

const sequelize = require("./models");
const Instructor = require("./models/instructor");
const Course = require("./models/course");

const app = express();

// RELATIONSHIP 

// One-to-Many
Instructor.hasMany(Course);
Course.belongsTo(Instructor);

// DATABASE SYNC

sequelize.sync().then(() => {
  console.log("Database synced");
});

// TEST ROUTE 

// Get all courses by instructor
app.get("/courses/:instructorId", async (req, res) => {

  const instructorId = req.params.instructorId;

  const courses = await Course.findAll({
    where: { InstructorId: instructorId }
  });

  res.json(courses);
});

//START SERVER 

app.listen(process.env.PORT, () => {
  console.log("Server running");
});
