const universityServiceAPI = require("../services/at-university-api.service");

const atUniversityCtrl = {};
// Get All Courses dashboard

atUniversityCtrl.renderDashboard = async (req, res) => {
	let courses;
	await universityServiceAPI.getAllCourses().then((result) => {
		courses = result.data;
	});
	res.render("dashboard/dashboard", { courses });
};



module.exports = atUniversityCtrl;
