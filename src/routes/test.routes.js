const router = require("express").Router();
const { getAllCourses } = require("../controllers/test.controller");

/* Routes */

// Get All Courses
router.get("/test/course", getAllCourses);

module.exports = router;