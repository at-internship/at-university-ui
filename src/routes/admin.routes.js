const express = require("express");
const router = express.Router();
const path = require('path');

// Admin Controller
const {
    renderCourseList,
    renderAddCourseForm,
    addCourse,
    renderEditCourseForm,
    updateCourse,
    deleteCourse
} = require("../controllers/admin.controller");

// ============= Sub Routes =============

// AT-UNIVERSITY-UI - Admin - Index
router.get("/admin", renderIndexAdmin);


// AT-UNIVERSITY-UI - Admin - Users - Render Course List
router.get("/admin/course", renderCourseList);


// AT-UNIVERSITY-UI - Admin - Users - Render Add Course
router.get("/admin/course/add", renderAddCourseForm);


// AT-UNIVERSITY-UI - Admin - Users - Add Course
router.post("/admin/course/add", addCourse);


// AT-UNIVERSITY-UI - Admin - Users - Render Edit Curse
router.get("/admin/course/edit/:id", renderEditCourseForm);

// AT-UNIVERSITY-UI - Admin - Users - Edit User
router.put("/admin/course/edit/:id", updateCourse);

// AT-UNIVERSITY-UI - Admin - Courses - Delete User
router.get("/admin/course/delete/:id", deleteCourse);

module.exports = router;