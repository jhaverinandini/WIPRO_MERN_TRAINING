const { Course } = require('../models');

exports.dashboard = async (req, res) => {

  const instructorId = req.session.user.id;

  const courses = await Course.findAll({
    where: { instructorId }
  });

  res.render('instructorDashboard', { courses });
};