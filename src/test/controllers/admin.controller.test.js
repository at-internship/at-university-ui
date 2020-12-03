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

describe("TEST: admin.controller.js", function() {
    let getAllCoursesStub;

    beforeEach(function(){
        getAllCoursesStub = sinon.stub(universityServiceAPI, "getAllCourses");
    });

    afterEach(function(){
        getAllCoursesStub.restore();
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

    // --------------- Not sure -------------------

    it("Should launch add course", function(done){
        var res = { render: sinon.spy() };
        var req = {};
        var courses = {};
        getAllCoursesStub.returns(Promise.resolve(courses));
        var view = adminCtrl.addCourse(req, res).then(function () {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });
    
    it("Should update course", function (done) {
        var res = {render:sinon.spy()};
        var req = {};
        var view = adminCtrl.updateCourse(req, res).then(function (){
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });
    
    it("Should delete course", function (done) {
        var res = {render:sinon.spy()};
        var req = {};
        var view = adminCtrl.deleteCourse(req, res).then(function (){
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

});