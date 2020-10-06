const router = require('express').Router();

const { renderAdminDash } = require('../controllers/admin.controller');

// Admin dashboard
router.get('/admin', renderAdminDash)

module.exports = router