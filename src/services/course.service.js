const axios = require("axios");
const AT_UNIVERSITY_SERVICE_URI = process.env.AT_UNIVERSITY_SERVICE_URI;
console.log("AT_UNIVERSITY_SERVICE_URI:" + AT_UNIVERSITY_SERVICE_URI);
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

module.exports = courseService;