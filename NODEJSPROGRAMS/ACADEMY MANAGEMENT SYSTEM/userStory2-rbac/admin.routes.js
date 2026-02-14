const express = require('express');
const router = express.Router();
const adminController = require('./admin.controller');
const { isAuthenticated } = require('../middleware/auth.middleware');
const { authorizeRole } = require('../middleware/role.middleware');

router.get('/dashboard', isAuthenticated, authorizeRole('admin'), adminController.dashboard);

router.get('/create-instructor', isAuthenticated, authorizeRole('admin'), adminController.showCreateInstructor);
router.post('/create-instructor', isAuthenticated, authorizeRole('admin'), adminController.createInstructor);

router.get('/create-course', isAuthenticated, authorizeRole('admin'), adminController.showCreateCourse);
router.post('/create-course', isAuthenticated, authorizeRole('admin'), adminController.createCourse);

router.get('/courses', isAuthenticated, authorizeRole('admin'), adminController.listCourses);

module.exports = router;