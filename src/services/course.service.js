const axios = require("axios");
const AT_UNIVERSITY_SERVICE_URI = process.env.AT_UNIVERSITY_SERVICE_URI;
console.log("AT_UNIVERSITY_SERVICE_URI:" + AT_UNIVERSITY_SERVICE_URI);
const courseService = {};

courseService.getAllCourses = () => {
  return axios({
    method: "GET",
    url: AT_UNIVERSITY_SERVICE_URI + `/course`
  });
};

module.exports = courseService;