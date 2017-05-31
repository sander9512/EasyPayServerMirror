//product API
var express = require('express');
var router = express.Router();
var connector = require('../db/db_connector');

router.get('/food', function(req, res) {
    var queryStr = 'SELECT * from product WHERE Categorie = "Eten"'

    connector.getConnection( function (err, connection) {
        if(err){
            console.log(err);
        }else {
            connection.query(queryStr, function (err, rows) {
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
    var queryStr = 'SELECT * from product WHERE Categorie = "Drank"'

    connector.getConnection( function (err, connection) {
        if(err){
            console.log(err);
        }else {
            connection.query(queryStr, function (err, rows) {
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
    var queryStr = 'SELECT * from product WHERE Categorie = "Frisdrank"'

    connector.getConnection( function (err, connection) {
        if(err){
            console.log(err);
        }else {
            connection.query(queryStr, function (err, rows) {
                if (err){
                    console.log(err)
                }else{
                    res.status(200).json({"items" : rows})
                }
            });
        }
    });
});

router.put('/addproduct/:productName/:productPrice/:category', function (req, res) {

    var productName     = req.body.productName;
    var productPrice    = req.body.productPrice;
    var category        = req.body.category;

    var queryAddProduct = 'INSERT INTO product VALUES (' + productName + ',' + productPrice + ',' + category + ',NULL)';

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

router.get('*', function(req, res) {
    var queryStr = 'SELECT * from product'

    connector.getConnection( function (err, connection) {
        if(err){
            console.log(err);
        }else {
            connection.query(queryStr, function (err, rows) {
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