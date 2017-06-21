//Created by TB

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../index');
var chould = chai.should();

chai.use(chaiHttp);
//First one
describe('/ api_assortiment', function() {
    it('Should return 200 rows on post at /api/assortiment/', function (done) {
        chai.request(server)
            .get('/api/assortiment/')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                done();
            });
    });
    it('Should return 404 on post at /api/assortiment/:something', function (done) {
        chai.request(server)
            .get('/api/assortiment/something')
            .end(function (err, res) {
                res.should.have.status(404);
                done();
            });
    });
});

//Next one
describe('/location/:locationid api_assortiment', function() {
    it('Should return 200 on post at /api/assortiment/location/:locationid', function (done) {
        chai.request(server)
            .get('/api/assortiment/location/')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                done();
            });
    });
    it('Should return 200 on post at /api/assortiment/location/:locationid', function (done) {
        chai.request(server)
            .get('/api/assortiment/location/4')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                done();
            });
    });
    it('Should return 200 on post at /api/assortiment/location/:locationid', function (done) {
        chai.request(server)
            .get('/api/assortiment/location/d')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                done();
            });
    });
    it('Should return 404 on post at /api/assortiment/location/:locationid', function (done) {
        chai.request(server)
            .get('/api/assortiment/location//')
            .end(function (err, res) {
                res.should.have.status(404);
                done();
            });
    });
});
