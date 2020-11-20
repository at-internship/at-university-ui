const adminCtrl = {};

// MICROSERVICE - HEROKU - UNIVERSITY
const universityServiceAPI = require("../services/at-university-api.service");

// AT-UNIVERSITY - Admin - Index
adminCtrl.renderIndexAdmin = (req, res) => {
    res.render("admin/index");
};

// AT-UNIVERSITY - Admin - Render Course List
adminCtrl.renderCourseList = async (req, res) => {

  try {
    const responseCourses = await universityServiceAPI.getAllCourses();
    console.log("---> adminCtrl.renderCourseList.getAllCourses");
    //console.log(responseCourses.data);
    const courses = responseCourses.data;
    res.render("admin/course/index", { courses });
  } catch (err) {
    console.error(err.message);
    res.render("admin/course/index");
  }

};

// AT-UNIVERSITY - Admin - Render Add Course Form
adminCtrl.renderAddCourseForm = (req, res) => {
    res.render("admin/course/add-course");
};

// AT-UNIVERSITY - Admin - Add Course
adminCtrl.addCourse = async (req, res) => {

    try {
        const { title, description, status, category, img } = req.body;
        let courses;
        let request = {
            title,
            description,
            category: category,
            img,
            status: parseInt(status),
        };
        await universityServiceAPI.addCourse(request).then(result => {
            console.log(result);
            courses = result;
        });
    } catch (err) {
        console.log(err.response);
        if (err.response && err.response.data) {
            let errorMsg = err.response.data.message;
            req.flash("error_msg", errorMsg);
        };
    };
    res.redirect("/admin/course");

};

// AT-UNIVERSITY - Admin - Render Edit Course Form
adminCtrl.renderEditCourseForm = async (req, res) => {
    try {
        console.log("---> adminCtrl.renderEditCourseForm");
        let courseId = req.params.id;
        universityServiceAPI.getCourseById(courseId);

        // Temporary code to retrive information about the course

        let responseCourses = await universityServiceAPI.getAllCourses();
        courseDetails = responseCourses.data.filter(function (c) { return c._id == courseId; });
        console.log("One course found", courseDetails[0]);
        res.render("admin/course/edit-course", courseDetails[0]);
    } catch (err) {
        console.log(err.response);
        if (err.response && err.response.data) {
            let errorMsg = err.response.data.error;
            req.flash("error_msg", errorMsg, " Try again later");
            res.redirect("/admin/course");
        }
    };
}


// AT-UNIVERSITY - Admin - Update Course
adminCtrl.updateCourse = async (req, res) => {
  // Redirect
  try {
    const { title, description, status, category, img } = req.body;
    const _id = req.params.id;

    await universityServiceAPI.updateCourse({
      _id: _id,
      title: title,
      description: description,
      category: category,
      img: img,
      status: parseInt(status),
    });

    req.flash("success_msg", "Course Updated Successfully");
  } catch (err) {
    console.log(err.response);
    if (err.response && err.response.data) {
      let errorMsg = err.response.data.message;
      req.flash("error_msg", errorMsg);
    }
  }
  res.redirect("/admin/course");
};

// AT-UNIVERSITY - Admin - Delete Course
adminCtrl.deleteCourse = (req, res) => {
    const errors = [];

    let courseId = req.params.id;
    universityServiceAPI.deleteCourse(courseId);
    console.log("---> adminCtrl.deleteCourse", courseId);

    // Redirect
    req.flash("success_msg", "Course Deleted Successfully");
    res.redirect("/admin/course");

};

module.exports = adminCtrl;
