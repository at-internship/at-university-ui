const adminCtrl = {};

// MICROSERVICE - HEROKU - UNIVERSITY
const universityServiceAPI = require("../services/at-university-api.service");

// AT-UNIVERSITY - Admin - Index
adminCtrl.renderIndexAdmin = (req, res) => {
    res.render("admin/index");
};

// AT-UNIVERSITY - Admin - Render Course List
adminCtrl.renderCourseList = async(req, res) => {
    try {
        const responseCourses = await universityServiceAPI.getAllCourses();
        console.log("---> adminCtrl.renderCourseList.getAllCourses");
        //console.log(responseCourses.data);
        const courses = responseCourses.data;
        res.render("admin/course/index", { courses });
    } catch (err) {
        console.error(err.message);
        res.render("admin/course/index");
    }
};

// AT-UNIVERSITY - Admin - Render Add Course Form
adminCtrl.renderAddCourseForm = (req, res) => {
    res.render("admin/course/add-course");
};

// AT-UNIVERSITY - Admin - Add Course
adminCtrl.addCourse = async(req, res) => {
    const { title, description, status, category, img } = req.body;
    let courses;
    let request = {
        title,
        description,
        category: category,
        img,
        status: parseInt(status),
    };
    await universityServiceAPI.addCourse(request).then(result => {
        console.log(result);
        courses = result;
    });

    res.redirect("/admin/course");
};

// AT-UNIVERSITY - Admin - Render Edit Course Form
adminCtrl.renderEditCourseForm = async (req, res) => {
    console.log("--> adminCtrl.renderEditCourseForm");
    res.render('admin/course/edit-course', {course})
};

// AT-UNIVERSITY - Admin - Update Course
adminCtrl.updateCourse = async(req, res) => {
    // Redirect
    req.flash("success_msg", "Course Updated Successfully");
    res.redirect("/admin/course");
};

// AT-UNIVERSITY - Admin - Delete Course
adminCtrl.deleteCourse = (req, res) => {
    const errors = [];
    // Redirect
    req.flash("success_msg", "Course Deleted Successfully");
    res.redirect("/admin/course");
};

module.exports = adminCtrl;