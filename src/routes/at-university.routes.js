const router = require("express").Router();

// AT-UNIVERSITY - Controller
const { dashboard } = require('../controllers/at-university.controller');

// ============= Sub Routes =============

// AT-UNIVERSITY - Dashboard
router.get("/", dashboard);

// AT-UNIVERSITY - Dashboard
router.get("/dashboard", dashboard);

module.exports = router;