const router = require("express").Router();
const { getAllCourses } = require ('../controllers/test.controller'); 
const { renderCourses } = require ('../controllers/dashboard.controller');

/* Routes */

//Get Dashboard 
router.get("/dashboard", renderCourses);

module.exports = router;
