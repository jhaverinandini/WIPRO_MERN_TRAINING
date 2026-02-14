const { Student, Profile, Course, Enrollment, sequelize } = require('../models');


// ===============================
// Show Create Student Form
// ===============================
exports.showCreateStudent = (req, res) => {
  res.render('createStudent');
};


// ===============================
// Create Student + Profile (Transaction)
// ===============================
exports.createStudent = async (req, res) => {
  const t = await sequelize.transaction();

  try {
    const { name, email, phone, address } = req.body;

    const student = await Student.create(
      { name, email },
      { transaction: t }
    );

    await Profile.create(
      {
        phone,
        address,
        studentId: student.id
      },
      { transaction: t }
    );

    await t.commit();
    res.redirect('/students');

  } catch (error) {
    await t.rollback();
    res.send("Transaction failed");
  }
};


// ===============================
// Pagination – Students
// ===============================
exports.listStudents = async (req, res) => {

  const page = parseInt(req.query.page) || 1;
  const limit = 5;
  const offset = (page - 1) * limit;

  const { count, rows } = await Student.findAndCountAll({
    include: Profile,
    limit,
    offset
  });

  res.render('listStudents', {
    students: rows,
    currentPage: page,
    totalPages: Math.ceil(count / limit)
  });
};


// ===============================
// Show Enroll Form
// ===============================
exports.showEnrollForm = async (req, res) => {
  const students = await Student.findAll();
  const courses = await Course.findAll();

  res.render('enrollStudent', { students, courses });
};


// ===============================
// Enroll Student (Transaction)
// ===============================
exports.enrollStudent = async (req, res) => {

  const t = await sequelize.transaction();

  try {
    const { studentId, courseId } = req.body;

    // Prevent duplicate enrollment
    const exists = await Enrollment.findOne({
      where: { StudentId: studentId, CourseId: courseId }
    });

    if (exists) {
      await t.rollback();
      return res.send("Already enrolled");
    }

    await Enrollment.create(
      {
        StudentId: studentId,
        CourseId: courseId
      },
      { transaction: t }
    );

    await t.commit();
    res.redirect('/enrollments');

  } catch (error) {
    await t.rollback();
    res.send("Enrollment failed");
  }
};


// ===============================
// Pagination – Enrollments
// ===============================
exports.listEnrollments = async (req, res) => {

  const page = parseInt(req.query.page) || 1;
  const limit = 5;
  const offset = (page - 1) * limit;

  const { count, rows } = await Enrollment.findAndCountAll({
    include: [Student, Course],
    limit,
    offset
  });

  res.render('listEnrollments', {
    enrollments: rows,
    currentPage: page,
    totalPages: Math.ceil(count / limit)
  });
};