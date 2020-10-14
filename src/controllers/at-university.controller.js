const { getAllCourses } = require("../services/course.service");

const dashboardCtrl = {};
// Get All Courses dashboard

atUniversityCtrl.renderDashboard = async (req, res) => {
	let courses;
	await getAllCourses().then((result) => {
		courses = result.data;
	});
	res.render("dashboard/dashboard", { courses });
};



module.exports = dashboardCtrl;
