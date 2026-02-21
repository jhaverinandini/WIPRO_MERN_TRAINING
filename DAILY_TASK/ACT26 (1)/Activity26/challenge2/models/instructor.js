const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const Instructor = sequelize.define("Instructor", {
  name: DataTypes.STRING
});

module.exports = Instructor;
