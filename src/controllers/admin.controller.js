const {courseService} }= require("../service/course.service")
const adminCtrl = {}; 

adminCtrl.renderAdminDash = (req, res) => {
    res.render('admin/dashboard');
}

adminCtrl.renderCourseForm = (req, res) => {
    res.render('admin/new-course')
}

adminCtrl.createNewCourse = async (req,res) => {
	let courses; 
	await addAllCourses().then ((result) => {
    courses = result; 
}); 

res.render ("course/new-course",{courses});
};

module.exports = adminCtrl;
