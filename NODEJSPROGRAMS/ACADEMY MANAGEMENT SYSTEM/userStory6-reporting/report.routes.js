const express = require('express');
const router = express.Router();
const reportController = require('./report.controller');
const { isAuthenticated } = require('../middleware/auth.middleware');
const { authorizeRole } = require('../middleware/role.middleware');

router.get('/reports/students-per-course',
  isAuthenticated,
  authorizeRole('admin'),
  reportController.totalStudentsPerCourse
);

router.get('/reports/revenue-per-instructor',
  isAuthenticated,
  authorizeRole('admin'),
  reportController.totalRevenuePerInstructor
);

router.get('/reports/most-popular-course',
  isAuthenticated,
  authorizeRole('admin'),
  reportController.mostPopularCourse
);

module.exports = router;