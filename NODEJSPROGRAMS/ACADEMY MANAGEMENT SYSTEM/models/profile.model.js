const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Profile = sequelize.define('Profile', {
  phone: DataTypes.STRING,
  address: DataTypes.STRING
});

module.exports = Profile;