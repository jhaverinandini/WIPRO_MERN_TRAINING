const sequelize = require("../db/connection.js");
const Course = require("./Course.js");
const Instructor = require("./Instructor.js");
const Enrollment = require("./Enrollment.js");
const Studentss = require("./Studentss.js");

// One-to-Many (Instructor → Course)
Instructor.hasMany(Course, {
  foreignKey: "instructorId",
  onDelete: "CASCADE"
});

Course.belongsTo(Instructor, {
  foreignKey: "instructorId"
});

// Many-to-Many (Student ↔ Course)
Studentss.belongsToMany(Course, {
  through: Enrollment,
  foreignKey: "studentId"
});

Course.belongsToMany(Studentss, {
  through: Enrollment,
  foreignKey: "courseId"
});

module.exports = {
  sequelize,
  Course,
  Instructor,
  Studentss,
  Enrollment
};