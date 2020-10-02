const router = require("express").Router();
const { getAllCourses } = require ('../controllers/TestController'); 
const { renderCourses } = require ('../controllers/dashboard.controller');

/* Routes */

//Get All Courses 
router.get("/course",getAllCourses);

//Get Dashboard 
router.get("/dashboard", renderCourses);

module.exports = router;
