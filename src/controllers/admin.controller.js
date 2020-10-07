const adminCtrl = {}; 

adminCtrl.renderAdminDash = (req, res) => {
    res.render('admin/dashboard');
}

adminCtrl.renderCourseForm = (req, res) => {
    res.send('admin/new-course')
}

module.exports = adminCtrl;
