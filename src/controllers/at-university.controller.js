const atUniversityCtrl = {};

const universityServiceAPI = require("../services/at-university-api.service");

// AT-UINERSITY - Index/Dashboard
atUniversityCtrl.dashboard = async(req, res) => {
    try {
        const responseCourses = await universityServiceAPI.getAllCourses();
        console.log("--> atUniversityCtrl.dashboard.getAllCourses");
        console.log(responseCourses.data);
        const courses = responseCourses.data
        res.render("dashboard", { courses });
    } catch (err) {
        console.error(err.message)
        res.render("dashboard");
    }
};

// AT-UINERSITY - Career
atUniversityCtrl.careerDetails = async(req, res) => {
    console.log("--> atUniversityCtrl.career");
    res.render("career/details");
};

// AT-UINERSITY - Course
atUniversityCtrl.courseDetails = async(req, res) => {
    console.log("--> atUniversityCtrl.course");
    res.render("course/details");
};

// AT-UINERSITY - Start Course
atUniversityCtrl.startCourse = (req, res) => {
    console.log("--> atUniversityCtrl.startCourse");
    res.render("course/start");
};

module.exports = atUniversityCtrl;
