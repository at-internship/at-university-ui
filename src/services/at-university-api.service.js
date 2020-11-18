const axios = require("axios");

// LOCAL
//require("dotenv").config();
//const AT_UNIVERSITY_SERVICE_URI = process.env.AT_UNIVERSITY_SERVICE_URI || `https://at-university-api.herokuapp.com/api/`;

// PROD
const AT_UNIVERSITY_SERVICE_URI = process.env.AT_UNIVERSITY_SERVICE_URI;

console.log("AT_UNIVERSITY_SERVICE_URI: " + AT_UNIVERSITY_SERVICE_URI);

const courseService = {};

courseService.getAllCourses = () => {
  return axios({
    method: "GET",
    url: AT_UNIVERSITY_SERVICE_URI + `/v1/course`,
    headers: {
      "content-type": "application/json",
    },
  }).catch(function (error) {
    console.log("Error: " + error.message);
  });
};

courseService.addCourse = (data) => {
  return axios({
    method: "POST",
    url: AT_UNIVERSITY_SERVICE_URI + `/v1/course`,
    data: data,
    headers: {
      "content-type": "application/json",
    },
  })
};


courseService.deleteCourse = (id) => {
  return {};
};


courseService.getCourseById = (id) => {
    // End point to retrive details about the course doesn't exist 
    return { };
}

courseService.updateCourse = (data) => {
    return axios({
        method: "PUT",
        url: AT_UNIVERSITY_SERVICE_URI + `/v1/course/` + data._id,
        data: data,
        headers: {
            "content-type": "application/json",
        },
    }).catch(function(error) {
        console.log("Error: " + error.message);
    });
};

module.exports = courseService;

