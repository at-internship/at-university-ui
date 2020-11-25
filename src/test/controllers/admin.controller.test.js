/**
 * AT UNIVERSITY UI - AT Admin Controller Test.
 * Copyright 2020 AgileThought, Inc.
 * 
 * Unit Test for admin-controller.
 * 
 * @author @at-internship
 * @version 1.0
 */

// Constants
const sinon = require("sinon");
const expect = require("chai").expect;

// AT Admin Controller
const adminC = require("../../controllers/admin.controller");

// AT University Service API
const universityServiceAPI = require("../../services/at-university-api.service");

describe("Admin Test Controller", function() {
    let getAllCoursesStub;

    beforeEach(function() {
        getAllCoursesStub = sinon.stub(universityServiceAPI, "getAllCourses");
    });

    afterEach(function() {
        getAllCoursesStub.restore();
    });

    it("Should render admin dashboard", function(done) {
        var res = { render: sinon.spy() };
        var req = {};
        var view = adminC.renderIndexAdmin(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

    it("Should render admin course list view", function(done) {
        var res = { render: sinon.spy() };
        var req = {};
        var courses = [];
        getAllCoursesStub.returns(Promise.resolve(courses));
        var view = adminC.renderCourseList(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });
});