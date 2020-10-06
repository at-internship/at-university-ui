const { getAllCourses } = require("../services/course.service");

const coursesCtrl = {};
// Get All Courses
coursesCtrl.renderCourses = async (req,res) => {
	let courses; 
	await getAllCourses().then ((result) => {
        courses = result; 
}); 

res.render ("course/all-courses",{courses});
};
module.exports = coursesCtrl;



