//Created by TB

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../index');
var chould = chai.should();

chai.use(chaiHttp);
//First one
describe('/ api_locatie', function() {
    it('Should return 200 rows on post at /api/locatie/', function (done) {
        chai.request(server)
            .get('/api/locatie/')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                done();
            });
    });
    it('Should return 404 on post at /api/locatie/1', function (done){
        chai.request(server)
            .get('/api/locatie/1')
            .end(function(err,res){
                res.should.have.status(404);
                done();
            })
    });
    it('Should return 200 on post at /api/locatie/d', function (done){
        chai.request(server)
            .get('/api/locatie/d')
            .end(function(err,res){
                res.should.have.status(404);
                done();
            })
    })
});
