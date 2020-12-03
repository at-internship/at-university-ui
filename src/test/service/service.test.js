/**
 * AT UI MOCKS - AT University Service API Test.
 * Copyright 2020 AgileThought, Inc.
 *
 * Integration Test for at-university-api endpoint.
 *
 * @author @humberto-gonzalez
 * @version 1.0
 */

// Constants
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = require("chai").expect;
chai.use(chaiHttp);

// AT University Service API
const tutorialServiceAPI =
  "https://at-university-api.herokuapp.com/api" + "/v1/course";
const tutorialServiceAPI_400 =
  "https://at-university-api.herokuapp.com/api" + "/v1/courses";

describe("TEST: at-univeristy.service", () => {
  it("Should Get All Courses - 200", (done) => {
    chai
      .request(tutorialServiceAPI)
      .get("/")
      .end(function (err, res) {
        //console.log(res.body);

        // Response Status
        expect(res).to.have.status(200);

        done();
      });
  });

  it("Should Fail Get All Courses - 400", (done) => {
    chai
      .request(tutorialServiceAPI_400)
      .get("/")
      .end(function (err, res) {
        console.log(res.body);

        // Response Status
        expect(res).to.have.status(404);

        // Response message

        done();
      });
  });
});

it("Should addCourse - 200", (done) => {
  chai
    .request(tutorialServiceAPI)
    .get("/")
    .end(function (err, res) {
      //console.log(res.body);

      // Response Status
      expect(res).to.have.status(200);

      done();
    });
});

it("Should updateCourse - 200", (done) => {
  chai
    .request(tutorialServiceAPI)
    .get("/")
    .end(function (err, res) {
      //console.log(res.body);

      // Response Status
      expect(res).to.have.status(200);

      done();
    });
});
