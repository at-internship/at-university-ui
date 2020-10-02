const axios = require("axios");
const config = require("../config/config");

module.exports = {
  getAllCourses: () =>
    axios({
      method: "GET",
      url: config.AT_UNIVERSITY_API_HOST + `/at-university-api/api/v1/course`,
      headers: {
        "content-type": "application/json",
      },
    })
      .then(function (data) {
        console.log("Success " + JSON.stringify(data));
        console.log(
          "getAllCourses: " +
            config.AT_UNIVERSITY_API_HOST +
            `/at-university-api/api/v1/course`
        );
      })
      .catch(function (error) {
        console.log("Error: " + error.message);
      }),
};
