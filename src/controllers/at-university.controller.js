const atUniversityCtrl = {};

const universityServiceAPI = require("../services/at-university-api.service");

// AT-RESOURCES - Index/Dashboard
atUniversityCtrl.dashboard = async(req, res) => {
    console.log("--> atUniversityCtrl.dashboard");
    res.render("dashboard");
};

module.exports = atUniversityCtrl;