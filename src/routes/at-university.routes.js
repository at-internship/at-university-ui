const router = require("express").Router();

const { renderDashboard } = require ('../controllers/at-university.controller');

/* Routes */

// AT-UNIVERSITY-UI - Dashboard
router.get("/dashboard", renderDashboard);

module.exports = router;
