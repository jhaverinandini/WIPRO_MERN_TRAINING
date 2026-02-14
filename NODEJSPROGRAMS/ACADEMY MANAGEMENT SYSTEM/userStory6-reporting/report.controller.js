const { sequelize } = require('../models');


// 1️⃣ Total Students Per Course
exports.totalStudentsPerCourse = async (req, res) => {

  const [results] = await sequelize.query(`
    SELECT c.title,
           COUNT(e.StudentId) AS totalStudents
    FROM courses c
    LEFT JOIN enrollments e
      ON c.id = e.CourseId
    GROUP BY c.id, c.title
  `);

  res.render('reports', {
    title: "Total Students Per Course",
    data: results
  });
};



// 2️⃣ Total Revenue Per Instructor
exports.totalRevenuePerInstructor = async (req, res) => {

  const [results] = await sequelize.query(`
    SELECT u.username,
           SUM(c.fee) AS totalRevenue
    FROM users u
    LEFT JOIN courses c
      ON u.id = c.instructorId
    WHERE u.role = 'instructor'
    GROUP BY u.id, u.username
  `);

  res.render('reports', {
    title: "Total Revenue Per Instructor",
    data: results
  });
};



// 3️⃣ Most Popular Course
exports.mostPopularCourse = async (req, res) => {

  const [results] = await sequelize.query(`
    SELECT c.title,
           COUNT(e.StudentId) AS totalStudents
    FROM courses c
    LEFT JOIN enrollments e
      ON c.id = e.CourseId
    GROUP BY c.id, c.title
    ORDER BY totalStudents DESC
    LIMIT 1
  `);

  res.render('reports', {
    title: "Most Popular Course",
    data: results
  });
};