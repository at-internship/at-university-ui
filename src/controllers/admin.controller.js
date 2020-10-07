const adminCtrl = {}; 

adminCtrl.renderAdminDash = (req, res) => {
    res.render('admin/dashboard');
}

adminCtrl.renderCourseForm = (req, res) => {
    res.send('admin/test')
}

module.exports = adminCtrl;