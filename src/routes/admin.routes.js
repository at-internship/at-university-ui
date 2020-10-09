const router = require('express').Router();

const { renderAdminDash, renderCourseForm, createNewCourse } = require('../controllers/admin.controller');

// Admin dashboard
router.get('/admin', renderAdminDash)

//Admin new course
router.get('/admin/course/new-course', renderCourseForm)

router.post('admin/course/new-course', createNewCourse);


module.exports = router;
