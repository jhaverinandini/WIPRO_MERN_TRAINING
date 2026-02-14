const sequelize = require('../config/db');

const User = require('./user.model');
const Course = require('./course.model');
const Student = require('./student.model');
const Profile = require('./profile.model');
const Enrollment = require('./enrollment.model');

// Relationships

User.hasMany(Course, { foreignKey: 'instructorId' });
Course.belongsTo(User, { foreignKey: 'instructorId' });

Student.hasOne(Profile, { foreignKey: 'studentId' });
Profile.belongsTo(Student, { foreignKey: 'studentId' });

Student.belongsToMany(Course, { through: Enrollment });
Course.belongsToMany(Student, { through: Enrollment });

Enrollment.belongsTo(Student);
Enrollment.belongsTo(Course);

Student.hasMany(Enrollment);
Course.hasMany(Enrollment);

sequelize.sync({ alter: true });

module.exports = {
  sequelize,
  User,
  Course,
  Student,
  Profile,
  Enrollment
};