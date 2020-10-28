const router = require("express").Router();

// AT-UNIVERSITY - Controller
const {
    dashboard,
    careerDetails,
    courseDetails,
    startCourse,
    renderEditCourseForm,
    updateCourse
} = require('../controllers/at-university.controller');

// ============= Sub Routes =============

// AT-UNIVERSITY - Dashboard
router.get("/", dashboard);

// AT-UNIVERSITY - Dashboard
router.get("/dashboard", dashboard);

// AT-UNIVERSITY - Career
router.get("/career/details", careerDetails);

// AT-UNIVERSITY - Course
router.get("/course/details", courseDetails);

// AT-UNIVERSITY - Start Course
router.get("/course/start", startCourse);

// ============= Edit Course =============

router.get('/admin/course/edit/:id', renderEditCourseForm);
router.route('/admin/course/edit/:id', updateCourse)

module.exports = router;