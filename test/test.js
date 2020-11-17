let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);

const url = 'https://at-university-api.herokuapp.com/api'+ '/v1/course'; 

describe('Get all courses: ',()=>{
    it('Should get all courses', (done) => {
    chai.request(url)
    .get('/')
    .end( function(err,res){
        console.log(res.body)
        expect(res).to.have.status(200);
        done();
        });
        });
       });
