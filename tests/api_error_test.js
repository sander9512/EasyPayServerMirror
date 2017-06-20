//Created by TB

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../index');
var chould = chai.should();

chai.use(chaiHttp);
// /add_error/:deviceSDK?/:device?/:model?/:product?/:error?
describe('add_error api_error', function() {
    it('Should return 200 rows on post at /api/error/add_error/:deviceSDK?/:device?/:model?/:product?/:error?', function (done) {
        chai.request(server)
            .put('/api/error/add_error/')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
    it('Should return 200 rows on post at /api/error/add_error/:deviceSDK?/:device?/:model?/:product?/:error?', function (done) {
        chai.request(server)
            .put('/api/error/add_error/t/')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
    it('Should return 200 rows on post at /api/error/add_error/:deviceSDK?/:device?/:model?/:product?/:error?', function (done) {
        chai.request(server)
            .put('/api/error/add_error/t/e/')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
    it('Should return error "Not Authorised for Refreshment" on GET at /api/movies/all', function (done) {
        chai.request(server)
            .put('/api/error/add_error/t/e/s/')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
    it('Should return 200 rows on post at /api/error/add_error/:deviceSDK?/:device?/:model?/:product?/:error?', function (done) {
        chai.request(server)
            .put('/api/error/add_error/t/e/s/t/')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
    it('Should return 200 rows on post at /api/error/add_error/:deviceSDK?/:device?/:model?/:product?/:error?', function (done) {
        chai.request(server)
            .put('/api/error/add_error/t/e/s/t/r')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
    it('Should return error on post at /api/error/add_error/:deviceSDK?/:device?/:model?/:product?/:error?/:something', function (done) {
        chai.request(server)
            .put('/api/error/add_error/t/e/s/t/e/d')
            .end(function (err, res) {
                res.should.have.status(404);
                done();
            });
    });
});
