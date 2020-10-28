const router = require("express").Router();

// AT-UNIVERSITY - Controller
const {
    dashboard,
    careerDetails,
    courseDetails,
    startCourse
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

module.exports = router;