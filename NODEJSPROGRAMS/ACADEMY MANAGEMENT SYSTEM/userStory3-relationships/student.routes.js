const express = require('express');
const router = express.Router();
const studentController = require('./student.controller');
const { isAuthenticated } = require('../middleware/auth.middleware');
const { authorizeRole } = require('../middleware/role.middleware');


router.get('/create-student',
  isAuthenticated,
  authorizeRole('admin'),
  studentController.showCreateStudent
);

router.post('/create-student',
  isAuthenticated,
  authorizeRole('admin'),
  studentController.createStudent
);

router.get('/students',
  isAuthenticated,
  authorizeRole('admin'),
  studentController.listStudents
);

router.get('/enroll',
  isAuthenticated,
  authorizeRole('admin'),
  studentController.showEnrollForm
);

router.post('/enroll',
  isAuthenticated,
  authorizeRole('admin'),
  studentController.enrollStudent
);

router.get('/enrollments',
  isAuthenticated,
  authorizeRole('admin'),
  studentController.listEnrollments
);

module.exports = router;