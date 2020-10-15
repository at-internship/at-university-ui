const router = require("express").Router();

const { renderCourses } = require ('../controllers/at-university.controller');

/* Routes */

//Get Dashboard 
router.get("/dashboard", renderDashboard);

module.exports = router;
