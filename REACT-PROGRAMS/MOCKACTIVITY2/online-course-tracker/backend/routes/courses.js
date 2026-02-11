const express = require("express");
const router = express.Router();

let courses = [
  { id: 1, title: "React Basics" },
  { id: 2, title: "Node Fundamentals" }
];

// GET all courses
router.get("/", (req, res) => {
  res.json(courses);
});

// ADD a course
router.post("/", (req, res) => {
  try {
    const newCourse = {
      id: Date.now(),
      title: req.body.title
    };
    courses.push(newCourse);
    res.status(201).json(newCourse);
  } catch (err) {
    res.status(500).json({ error: "Failed to add course" });
  }
});

// DELETE a course
router.delete("/:id", (req, res) => {
  try {
    courses = courses.filter(c => c.id != req.params.id);
    res.json({ message: "Course deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete course" });
  }
});

module.exports = router;