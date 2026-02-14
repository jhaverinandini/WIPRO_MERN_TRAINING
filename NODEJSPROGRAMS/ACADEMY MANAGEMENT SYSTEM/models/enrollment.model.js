const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const Enrollment = sequelize.define('Enrollment', {});

module.exports = Enrollment;