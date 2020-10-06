const adminCtrl = {}; 

adminCtrl.renderAdminDash = (req, res) => {
    res.render('admin/dashboard');
}

module.exports = adminCtrl;