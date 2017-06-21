//Created by TB

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../index');
var chould = chai.should();

chai.use(chaiHttp);
//First one
describe('/', function() {
    it('Should return 200 on get at /api/bestelling/', function (done) {
        chai.request(server)
            .get('/api/bestelling/')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
    it('Should return 200 on post at /api/bestelling/d', function (done) {
        chai.request(server)
            .get('/api/bestelling/d')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                done();
            });
    });
    it('Should return 200 on post at /api/bestelling/1', function (done) {
        chai.request(server)
            .get('/api/bestelling/1')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                done();
            });
    });
});

//Next one
describe('bestelling/location/:locatieid', function() {
    it('Should return 200 error on get at /api/bestelling/location/', function (done) {
        chai.request(server)
            .get('/api/bestelling/location/')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
    it('Should return 200 on post at /api/bestelling/location/d', function (done) {
        chai.request(server)
            .get('/api/bestelling/location/d')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                done();
            });
    });
    it('Should return 200 on post at /api/bestelling/location/1', function (done) {
        chai.request(server)
            .get('/api/bestelling/location/1')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                done();
            });
    });
});

//Next one
describe('bestelling/klant/:klantid', function() {
    it('Should return 200 on get at /api/bestelling/klant/', function (done) {
        chai.request(server)
            .get('/api/bestelling/klant/')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
    it('Should return 200 on post at /api/bestelling/klant/d', function (done) {
        chai.request(server)
            .get('/api/bestelling/klant/d')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                done();
            });
    });
    it('Should return 200 on post at /api/bestelling/klant/1', function (done) {
        chai.request(server)
            .get('/api/bestelling/klant/1')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                done();
            });
    });
});

//Next one
describe('/check/available/ordernumber', function() {
    it('Should return 200 on get at /api/bestelling/check/available/ordernumber', function (done) {
        chai.request(server)
            .get('/api/bestelling/check/available/ordernumber')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
});

//Next one
describe('/update/d', function() {
    it('Should return 400 not found on get at /api/bestelling/update/d', function (done) {
        chai.request(server)
            .put('/api/bestelling/update/d')
            .end(function (err, res) {
                res.should.have.status(400);
                done();
            });
    });
    it('Should return 400 not found on get at /api/bestelling/update/d/1', function (done) {
        chai.request(server)
            .put('/api/bestelling/update/d/1')
            .end(function (err, res) {
                res.should.have.status(400);
                done();
            });
    });
    it('Should return 400 on get at /api/bestelling/update/1/', function (done) {
        chai.request(server)
            .put('/api/bestelling/update/1')
            .end(function (err, res) {
                res.should.have.status(400);
                done();
            });
    });
    it('Should return 200 on get at /api/bestelling/update/1/d', function (done) {
        chai.request(server)
            .put('/api/bestelling/update/1/d')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
    it('Should return 200 on get at /api/bestelling/update/1/d', function (done) {
        chai.request(server)
            .put('/api/bestelling/update/1/1')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
});

//Next one
describe('/create/:customerId/:productId/:status/:orderNumber/:locationId', function() {
    it('Should return 200 on get at /api/bestelling/create/4/4/4/4/4', function (done) {
        chai.request(server)
            .put('/api/bestelling/create/4/4/4/4/4')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
    it('Should return 404 on get at /api/bestelling/create/4/4/4/4/', function (done) {
        chai.request(server)
            .get('/api/bestelling/create/4/4/4/4/')
            .end(function (err, res) {
                res.should.have.status(404);
                done();
            });
    });
    it('Should return 404 on get at /api/bestelling/create/4/4/4/', function (done) {
        chai.request(server)
            .get('/api/bestelling/create/4/4/4/')
            .end(function (err, res) {
                res.should.have.status(404);
                done();
            });
    });
    it('Should return 404 on get at /api/bestelling/create/4/4/', function (done) {
        chai.request(server)
            .get('/api/bestelling/create/4/4/')
            .end(function (err, res) {
                res.should.have.status(404);
                done();
            });
    });
    it('Should return 404 on get at /api/bestelling/create/4/', function (done) {
        chai.request(server)
            .get('/api/bestelling/create/4/')
            .end(function (err, res) {
                res.should.have.status(404);
                done();
            });
    });
    it('Should return 200 on get at /api/bestelling/create/d/d/d/d/d', function (done) {
        chai.request(server)
            .put('/api/bestelling/create/d/d/d/d/d')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
    it('Should return 404 on get at /api/bestelling/create/d/d/d/d/', function (done) {
        chai.request(server)
            .get('/api/bestelling/create/d/d/d/d/')
            .end(function (err, res) {
                res.should.have.status(404);
                done();
            });
    });
    it('Should return 404 on get at /api/bestelling/create/d/d/d/', function (done) {
        chai.request(server)
            .get('/api/bestelling/create/d/d/d/')
            .end(function (err, res) {
                res.should.have.status(404);
                done();
            });
    });
    it('Should return 404 on get at /api/bestelling/create/d/d/', function (done) {
        chai.request(server)
            .get('/api/bestelling/create/d/d/')
            .end(function (err, res) {
                res.should.have.status(404);
                done();
            });
    });
    it('Should return 404 on get at /api/bestelling/create/d/', function (done) {
        chai.request(server)
            .get('/api/bestelling/create/d/')
            .end(function (err, res) {
                res.should.have.status(404);
                done();
            });
    });
});

//Next one
describe('/delete/:orderNumber', function() {
    it('Should return 404 on get at /api/bestelling/delete/', function (done) {
        chai.request(server)
            .delete('/api/bestelling/delete/')
            .end(function (err, res) {
                res.should.have.status(404);
                done();
            });
    });
    it('Should return 400 on get at /api/bestelling/delete/1', function (done) {
        chai.request(server)
            .delete('/api/bestelling/delete/1')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
});
