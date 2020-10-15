const { addCourse } = require("../services/course.service")
const { getAllCourses } = require("../services/course.service");

const adminCtrl = {};

adminCtrl.renderIndexAdmin = (req, res) => {
    res.render('admin/dashboard');
}

adminCtrl.renderAddCourseForm = (req, res) => {
    res.render('admin/new-course');
}

adminCtrl.addCourse = async (req, res) => {
    const { title, description, status, category, img } = req.body;
    let courses;
    let request = {
        title,
        description,
        category: category,
        img,
        status: parseInt(status)
    };
    await addCourse(request).then((result) => {
        console.log(result);
        courses = result;
    });
    
    res.redirect("/dashboard");
};

adminCtrl.renderCourseList = async (req, res) => {
    let courses;
	await getAllCourses().then((result) => {
		courses = result.data;
	});
	res.render("dashboard/all-courses/", { courses });
};

adminCtrl.renderEditCourseForm = (req, res) => {
    res.render('admin/edit-course');
}

adminCtrl.updateCourse = (req, res) => {
    res.render('admin/update-course');
}

adminCtrl.deleteCourse = (req, res) => {
    res.render('dashboard/all-courses');
}


module.exports = adminCtrl;
