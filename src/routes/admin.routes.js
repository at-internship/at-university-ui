const router = require('express').Router();

const { renderAdminDash, renderCourseForm, createNewCourse } = require('../controllers/admin.controller');

// Admin dashboard
router.get('/', renderAdminDash)

//Admin new course
router.get('/course', renderCourseForm)

router.post('/course', createNewCourse);


module.exports = router;
