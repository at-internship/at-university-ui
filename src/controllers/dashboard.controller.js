const { getAllCourses } = require("../services/course.service");

const dashboardCtrl = {};
// Get All Courses dashboard

dashboardCtrl.renderCourses = async (req, res) => {
	let courses;
	await getAllCourses().then((result) => {
		courses = result.data;
	});
	res.render("dashboard/all-courses", { courses });
};



module.exports = dashboardCtrl;
