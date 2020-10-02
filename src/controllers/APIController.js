const coursesCtrl = {};

// Get All Courses
coursesCtrl.getAllCourses = async (req, res) => {
  res.json({ courses: {} });
};

module.exports = coursesCtrl;
