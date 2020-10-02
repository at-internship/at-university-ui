const axios = require("axios");
const config = require("../config");

const courseService = {};

courseService.getAllCourses = () => {
    return axios({
      method: "GET",
      url: config.AT_UNIVERSITY_API_HOST + `/course`,
      headers: {
        "content-type": "application/json",
      },
    });  
};

module.exports = courseService;