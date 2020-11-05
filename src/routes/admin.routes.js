const router = require('express').Router();

// Admin Controller
const {
    renderIndexAdmin,
    renderCourseList,
    renderAddCourseForm,
    addCourse,
    renderEditCourseForm,
    updateCourse,
    deleteCourse
} = require("../controllers/admin.controller");

// ============= Sub Routes =============

// AT-UNIVERSITY-UI - Admin - Index
router.get("/", renderIndexAdmin);

// AT-UNIVERSITY-UI - Admin - Course - Render Course List
router.get("/course", renderCourseList);

// AT-UNIVERSITY-UI - Admin - Course - Render Add Course
router.get("/course/add", renderAddCourseForm);

// AT-UNIVERSITY-UI - Admin - Course - Add Course
router.post("/course/add", addCourse);

// AT-UNIVERSITY-UI - Admin - Course - Render Edit Curse
router.get("/course/edit/:id", renderEditCourseForm);

// AT-UNIVERSITY-UI - Admin - Course - Edit User
router.put("/course/edit/:id", updateCourse);

// AT-UNIVERSITY-UI - Admin - Courses - Delete User
router.get("/course/delete/:id", deleteCourse); 

module.exports = router;