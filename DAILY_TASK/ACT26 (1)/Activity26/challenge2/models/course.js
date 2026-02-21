const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const Course = sequelize.define("Course", {
  title: DataTypes.STRING
});

module.exports = Course;
