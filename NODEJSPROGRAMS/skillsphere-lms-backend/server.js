const express = require('express');
const app = express();

const courseRoutes = require('./routes/courses');

const PORT = 5000;

// Root route
app.get('/', (req, res) => {
  res.send("Welcome to SkillSphere LMS API");
});

// Course routes
app.use('/courses', courseRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
