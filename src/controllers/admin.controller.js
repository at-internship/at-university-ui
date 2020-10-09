const { addCourse } = require("../services/course.service")
const adminCtrl = {};

adminCtrl.renderAdminDash = (req, res) => {
    res.render('admin/dashboard');
}

adminCtrl.renderCourseForm = (req, res) => {
    res.render('admin/new-course');
}

adminCtrl.createNewCourse = async (req, res) => {
    const { title, description, status, category, img } = req.body;
    let courses;
    let request = {
        title,
        description,
        category: category,
        img,
        status: parseInt(status)
    };
    console.log(request);
    await addCourse(request).then((result) => {
        console.log(result);
        courses = result;
    });

    res.redirect("/dashboard");
};

module.exports = adminCtrl;
