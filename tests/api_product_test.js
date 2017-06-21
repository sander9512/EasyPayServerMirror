//Created by TB

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../index');
var chould = chai.should();

chai.use(chaiHttp);
// /add_error/:deviceSDK?/:device?/:model?/:product?/:error?
it('Should return 200 rows on post at /api/product/food', function (done) {
    chai.request(server)
        .get('/api/product/food')
        .end(function (err, res) {
            res.should.have.status(200);
            done();
        });
});
it('Should return 200 rows on post at /api/product/drank', function (done) {
    chai.request(server)
        .put('/api/product/drank')
        .end(function (err, res) {
            res.should.have.status(200);
            done();
        });
});
describe('/addproduct/:productName/:productPrice/:category api_product', function() {
    it('Should return 404 rows on post at /api/addproduct/1', function (done) {
        chai.request(server)
            .put('/api/product/addproduct/1')
            .end(function (err, res) {
                res.should.have.status(404);
                res.should.be.json;
                done();
            });
    });
    it('Should return 404 rows on post at /api/addproduct/1/1', function (done) {
        chai.request(server)
            .put('/api/product/addproduct/1/1')
            .end(function (err, res) {
                res.should.have.status(404);
                res.should.be.json;
                done();
            });
    });
    it('Should return 200 rows on post at /api/addproduct/1/1/1', function (done) {
        chai.request(server)
            .get('/api/product/addproduct/1/1/1')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                done();
            });
    });
    it('Should return 200 rows on post at /api/addproduct/d/d/d', function (done) {
        chai.request(server)
            .get('/api/product/addproduct/d/d/d')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                done();
            });
    });
});

describe('/delproduct/:productid', function() {
    it('Should return 404 rows on post at /api/product/delproduct/', function (done) {
        chai.request(server)
            .get('/api/product/delproduct/')
            .end(function (err, res) {
                res.should.have.status(404);
                done();
            });
    });
    it('Should return 200 rows on post at /api/product/delproduct/1', function (done) {
        chai.request(server)
            .get('/api/product/delproduct/1')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                done();
            });
    });
});

describe('/:productid', function() {
    it('Should return 400 rows on post at /api/product/:productid', function (done) {
        chai.request(server)
            .get('/api/product/d')
            .end(function (err, res) {
                res.should.have.status(400);
                done();
            });
    });
    it('Should return 200 rows on post at /api/product/:productid', function (done) {
        chai.request(server)
            .get('/api/product/delproduct/1')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                done();
            });
    });
    it('Should return 404 rows on post at /api/product/:productid', function (done) {
        chai.request(server)
            .get('/api/product/delproduct/1')
            .end(function (err, res) {
                res.should.have.status(404);
                done();
            });
    });
});

describe('/:productid?/:category?', function() {
    it('Should return 404 rows on post at /api/product/:productid?/:category?', function (done) {
        chai.request(server)
            .get('/api/product/1')
            .end(function (err, res) {
                res.should.have.status(404);
                done();
            });
    });
    it('Should return 404 rows on post at /api/product/:productid?/:category?', function (done) {
        chai.request(server)
            .get('/api/product/d')
            .end(function (err, res) {
                res.should.have.status(404);
                done();
            });
    });
    it('Should return 200 rows on post at /api/product/:productid?/:category?', function (done) {
        chai.request(server)
            .get('/api/product/1/d')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
    it('Should return 200 rows on post at /api/product/:productid?/:category?', function (done) {
        chai.request(server)
            .get('/api/product/1/1')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
});

describe('/view/:category/:locationId', function() {
    it('Should return 404 rows on post at /api/product/view/', function (done) {
        chai.request(server)
            .get('/api/product/view/')
            .end(function (err, res) {
                res.should.have.status(404);
                done();
            });
    });
    it('Should return 404 rows on post at /api/product/view/:category', function (done) {
        chai.request(server)
            .get('/api/product/view/1')
            .end(function (err, res) {
                res.should.have.status(404);
                done();
            });
    });
    it('Should return 404 rows on post at /api/product/view/:category', function (done) {
        chai.request(server)
            .get('/api/product/view/d')
            .end(function (err, res) {
                res.should.have.status(404);
                done();
            });
    });
    it('Should return 200 rows on post at /api/product/view/:category/:locationId', function (done) {
        chai.request(server)
            .get('/api/product/view/1/d')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
    it('Should return 200 rows on post at /api/product/view/:category/:locationId', function (done) {
        chai.request(server)
            .get('/api/product/view/1/1')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
    it('Should return 200 rows on post at /api/product/view/:category/:locationId', function (done) {
        chai.request(server)
            .get('/api/product/view/d/1')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
});

describe('', function() {
    it('Should return 200 rows on post at /api/product/', function (done) {
        chai.request(server)
            .get('/api/product/')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
});