//Created by TB

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../index');
var chould = chai.should();

chai.use(chaiHttp);
//First one
describe('', function() {
    it('Should return 200 rows on post at /api/transactie/', function (done) {
        chai.request(server)
            .get('/api/transactie/')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                done();
            });
    });
    it('Should return 200 rows on post at /api/transactie/', function (done) {
        chai.request(server)
            .get('/api/transactie/hey/')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                done();
            });
    });
    it('Should return 200 rows on post at /api/transactie/', function (done) {
        chai.request(server)
            .get('/api/transactie/123')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                done();
            });
    });
    it('Should return 200 rows on post at /api/transactie/', function (done) {
        chai.request(server)
            .get('/api/transactie/afdskjl/dafkjl')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                done();
            });
    });
    it('Should return 200 rows on post at /api/transactie/', function (done) {
        chai.request(server)
            .get('/api/transactie/123/123')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                done();
            });
    });
});