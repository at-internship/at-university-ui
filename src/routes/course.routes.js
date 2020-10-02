const router = require("express").Router();
const { getAllCourses } = require("../controllers/APIController");

/* Routes */

// Get All Courses
router.get("/course", getAllCourses);

module.exports = router;
