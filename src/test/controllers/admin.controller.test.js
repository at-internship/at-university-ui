// Constants
const sinon = require("sinon");
const chai = require("chai");
const expect = require("chai").expect;
const assert = require("assert");

// AT Admin Controller
const adminCtrl = require("../../controllers/admin.controller");

// AT University Service API
const universityServiceAPI = require("../../services/at-university-api.service");
const { courseDetails } = require("../../controllers/at-university.controller");
const { spy } = require("sinon");

describe("TEST: admin.controller.js", function() {
    let getAllCoursesStub;
    let updateCourseStub;
    let addCourseStub;


    beforeEach(function(){
        getAllCoursesStub = sinon.stub(universityServiceAPI, "getAllCourses");
        updateCourseStub = sinon.stub(universityServiceAPI, "updateCourse");
        addCourseStub = sinon.stub(universityServiceAPI, "addCourse");
    });

    afterEach(function(){
        getAllCoursesStub.restore();
        updateCourseStub.restore();
        addCourseStub.restore();
    });

    it("Should render index admin", function(done){
        var res = { render: sinon.spy() };
        var req = {};
        var view = adminCtrl.renderIndexAdmin(req, res).then(function () {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

    it("Should render admin course list view", function (done) {
        var res = {render:sinon.spy()};
        var req = {};
        var courses = [];
        getAllCoursesStub.returns(Promise.resolve(courses));
        var view = adminCtrl.renderCourseList(req, res).then(function (){
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

    it("Should render add course", function(done){
        var res = { render: sinon.spy() };
        var req = {};
        var view = adminCtrl.renderAddCourseForm(req, res).then(function () {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });
    
    it("Should render edit course form", function (done) {
        var res = {render:sinon.spy()};
        var req = {params: {id:0} };
        var courseDetails = {data:[] };
        getAllCoursesStub.returns(Promise.resolve(courseDetails));
        var view = adminCtrl.renderEditCourseForm(req, res).then(function (){
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

    it("Should launch add course", function(done){
        var res = { redirect: sinon.spy() };
        var req = { body: {title:"Test", description:"Test", status:0, category:"Test", img:"Test"}};
        var view = adminCtrl.addCourse(req, res).then(function () {
            expect(res.redirect.calledOnce).to.be.true;
            done();
        });
    });
    
    it("Should update course", function (done) {
        var res = {redirect:sinon.spy()};
        var req = {params: {id:0}, body:{title:"Test", description:"Test", status:0, category:"Test", img:"Test"}, flash:sinon.spy() };
        var view = adminCtrl.updateCourse(req, res).then(function (){
            expect(res.redirect.calledOnce).to.be.true;
            done();
        });
    });
    
    it("Should delete course", function (done) {
        var res = {redirect:sinon.spy()};
        var req = {params: {id: 0}, flash:sinon.spy()};
        getAllCoursesStub.returns(Promise.resolve());
        var view = adminCtrl.deleteCourse(req, res).then(function (){
            expect(res.redirect.calledOnce).to.be.true;
            done();
        });
    });
});