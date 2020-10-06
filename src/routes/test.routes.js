const router = require("express").Router();
const { getAllCourses } = require("../controllers/TestController");

/* Routes */

// Get All Courses
router.get("/test/course", getAllCourses);

module.exports = router;