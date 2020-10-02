const { getAllCourses } = require("../services/course.service");

/*This is a test controller for course service*/
const apiCtrl = {};

// Get All Courses example
apiCtrl.getAllCourses = async (req, res) => {
  let courses = await getAllCourses().then(function (response) {
    res.json({ courses: response.data });
  }).catch(function (error) {
    console.log("Error: " + error.message);
  });
  res.json({ error_message: 'There was an unexpected error' });
};

module.exports = apiCtrl;
