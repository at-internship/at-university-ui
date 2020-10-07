const router = require('express').Router();

const { renderAdminDash, renderCourseForm } = require('../controllers/admin.controller');

// Admin dashboard
router.get('/admin', renderAdminDash)
router.get('/course', renderCourseForm)

module.exports = router