//product API
var express = require('express');
var router = express.Router();
var connector = require('../db/db_connector');
var bodyParser      = require('body-parser');

router.use(bodyParser.json());

router.get('/food', function(req, res) {
    var queryStr = 'SELECT * from product WHERE Categorie = "Eten" AND Active = 1'

    connector.getConnection( function (err, connection) {
        if(err){
            console.log(err);
        }else {
            connection.query(queryStr, function (err, rows) {
                connection.release();
                if (err){
                    console.log(err)
                }else{
                    res.status(200).json({"items" : rows});
                }
            });
        }
    });
});

router.get('/drank', function(req, res) {
    var queryStr = 'SELECT * from product WHERE Categorie = "Drank" AND Active = 1'

    connector.getConnection( function (err, connection) {
        if(err){
            console.log(err);
        }else {
            connection.query(queryStr, function (err, rows) {
                connection.release();
                if (err){
                    console.log(err)
                }else{
                    res.status(200).json({"items" : rows});
                }
            });
        }
    });
});

router.get('/frisdrank', function(req, res) {
    var queryStr = 'SELECT * from product WHERE Categorie = "Frisdrank" AND Active = 1'

    connector.getConnection( function (err, connection) {
        if(err){
            console.log(err);
        }else {
            connection.query(queryStr, function (err, rows) {
                connection.release();
                if (err){
                    console.log(err)
                }else{
                    res.status(200).json({"items" : rows})
                }
            });
        }
    });
});

router.route('/addproduct/:productName/:productPrice/:category').put(function (req, res) {

    var productName     = req.params.productName || '';
    var productPrice    = req.params.productPrice || '';
    var category        = req.params.category || '';

    var queryAddProduct = 'INSERT INTO product VALUES (NULL,"' + productName + '",' + productPrice + ',"' + category + '","")';

    connector.getConnection(function (err, connection) {
        if (err) {
            console.log(err);
        } else {
            connection.query(queryAddProduct, function (err, rows) {
                connection.release();
                if (err) {
                    console.log(err);
                } else {
                    res.send('NEW PRODUCT CREATED!')
                }
            })
        }
    })
});

router.route('/delproduct/:productId').delete(function (req, res) {

    var productId = req.params.productId || '';

    var queryDelProduct = 'UPDATE product SET Active = 0 WHERE ProductId = ' + productId + ';'

    connector.getConnection(function (err, connection) {
        if (err) {
            console.log(err);
        } else {
            connection.query(queryDelProduct, function (err, rows) {
                connection.release();
                if (err) {
                    console.log(err);
                } else {
                    res.send('PRODUCT REMOVED!')
                }
            })
        }
    })
});

router.get('/:productid?', function(req, res) {

    var productID = req.params.productid;

    var queryStr = "SELECT * FROM product WHERE `ProductId` = '" + productID + "';";

    connector.getConnection( function (err, connection) {
        if(err){
            console.log(err);
        }else {
            connection.query(queryStr, function (err, rows) {
                connection.release();
                if (err){
                    console.log(err)
                }else{
                    res.status(200).json({"items" : rows});
                }
            });
        }
    });
});

router.get('/:productid?/:category?', function(req, res) {

    var productId     = req.params.productid || '';
    var category        = req.params.category || '';

    var queryStr = "SELECT * from product WHERE Categorie = '" + category +"' AND ProductId = '" + productId + "' AND Active = 1;";

    connector.getConnection( function (err, connection) {
        if(err){
            console.log(err);
        }else {
            connection.query(queryStr, function (err, rows) {
                connection.release();
                if (err){
                    console.log(err)
                }else{
                    res.status(200).json({"items" : rows});
                }
            });
        }
    });
});

router.get('*', function(req, res) {
    var queryStr = 'SELECT * from product'

    connector.getConnection( function (err, connection) {
        if(err){
            console.log(err);
        }else {
            connection.query(queryStr, function (err, rows) {
                connection.release();
                if (err){
                    console.log(err)
                }else{
                    res.status(200).json({"items" : rows});
                }
            });
        }
    });
});

module.exports = router;
