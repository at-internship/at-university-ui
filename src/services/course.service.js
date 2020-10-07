const axios = require("axios");
const config = require("../config");

const courseService = {};

courseService.getAllCourses = () => {
  return axios({
    method: "GET",
    url: config.AT_UNIVERSITY_SERVICE_URI + `/course`
  });
};

module.exports = courseService;