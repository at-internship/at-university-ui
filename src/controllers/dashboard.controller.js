const { getAllCourses } = require("../services/course.service");

/*This is a test controller for course service*/
const dashboardCtrl = {};
// Get All Courses dashboard

dashboardCtrl.renderCourses = async (req,res) => {
	let courses; 
	await getAllCourses().then ((result) => {
        courses = result; 
}); 

res.render ("dashboard/all-courses",{courses});
};



module.exports = dashboardCtrl;
