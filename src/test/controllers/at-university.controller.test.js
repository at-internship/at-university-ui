/**
 * AT UNIVERSITY UI - AT Admin Controller Test.
 * Copyright 2020 AgileThought, Inc.
 * 
 * Unit Test for admin-controller.
 * 
 * @author @Jose-Perez
 * @version 1.0
 */

// Constants
const sinon = require("sinon");
const atUniversityC = require("../../controllers/at-university.controller");
const expect = require("chai").expect;

// AT University Service API
const universityServiceAPI = require("../../services/at-university-api.service");


describe("AT-University Test Controller ", function () {

    let getAllCoursesStub;

    beforeEach(function () {
        getAllCoursesStub = sinon.stub(universityServiceAPI, "getAllCourses");
    });

    it("Should render all courses on dashboard", function (done) {
        var res = { render: sinon.spy() };
        var req = {};
        var courses = [];
        getAllCoursesStub.returns(Promise.resolve(courses));
        var view = atUniversityC.dashboard(req, res).then(function () {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

    afterEach(function () {
        getAllCoursesStub.restore();
    });

    it("Should render At-University Career Details", function (done) {
        var res = { render: sinon.spy() };
        var req = {};
        var view = atUniversityC.careerDetails(req, res).then(function () {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

    it("Should render At-University Course Details", function (done) {
        var res = { render: sinon.spy() };
        var req = {};
        var view = atUniversityC.courseDetails(req, res).then(function () {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

    it("Should render At-University Course Start", function (done) {
        var res = { render: sinon.spy() };
        var req = {};
        var view = atUniversityC.startCourse(req, res).then(function () {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

});