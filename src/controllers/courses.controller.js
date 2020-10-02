const { getAllCourses } = require("../services/course.service");
/*This is a test controller for course service*/
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


getAllCourses = async () => {
    let courses = [
        {
            category: 'Category 1',
            description: 'This is a course',
            title: 'Java course',
            status: 'active',
            img: ''
        },
        {
            category: 'Category 2',
            description: 'This is a course',
            title: 'Java course',
            status: 'active',
            img: ''
        }
    ];
    return courses;
};
