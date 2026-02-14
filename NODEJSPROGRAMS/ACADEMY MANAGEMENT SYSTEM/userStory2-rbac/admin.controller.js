const { User, Course } = require('../models');

// Dashboard

exports.dashboard = (req, res) => {
  res.render('adminDashboard');
};

// Show create instructor form

exports.showCreateInstructor = (req, res) => {
  res.render('createInstructor');
};

// Create instructor

exports.createInstructor = async (req, res) => {
  const { username, password } = req.body;

  await User.create({
    username,
    password,
    role: 'instructor'
  });

  res.redirect('/admin/dashboard');
};

// Show create course form

exports.showCreateCourse = async (req, res) => {
  const instructors = await User.findAll({ where: { role: 'instructor' } });
  res.render('createCourse', { instructors });
};

// Create course

exports.createCourse = async (req, res) => {
  const { title, fee, instructorId } = req.body;

  await Course.create({
    title,
    fee,
    instructorId
  });

  res.redirect('/admin/dashboard');
};

// Pagination - Courses

exports.listCourses = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 5;
  const offset = (page - 1) * limit;

  const { count, rows } = await Course.findAndCountAll({
    limit,
    offset
  });

  res.render('listCourses', {
    courses: rows,
    currentPage: page,
    totalPages: Math.ceil(count / limit)
  });
};