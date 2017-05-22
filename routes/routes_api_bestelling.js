//product API
var express = require('express');
var router = express.Router();
var connector = require('../db/db_connector');

//default get endpoint to show all orders, or a specific order when orderNumber is given
router.get('/:orderNumber?', function (req, res) {

    var orderNumber = req.params.orderNumber;
    var query = "";

    if (orderNumber) {
        query = "SELECT * from bestelling WHERE `bestellingNummer` = '" + orderNumber + "';";
    } else {
        query = 'SELECT * from bestelling';
    }

    connector.getConnection(function (err, connection) {
        if (err) {
            console.log(err);
        } else {
            connection.query(query, function (err, rows) {
                connection.release();
                if (err) {
                    console.log(err);
                } else {
                    res.status(200).json({"items": rows})
                }
            })
        }
    })
});

router.get('/check/available/ordernumber', function(req, res) {

    var query = "SELECT (bestellingNummer +1) AS nextAvailableOrderNumber FROM bestelling ORDER BY bestellingNummer DESC LIMIT 1";

    connector.getConnection(function (err, connection) {
        if (err) {
            console.log(err);
        } else {
            connection.query(query, function (err, rows) {
                connection.release();
                if (err) {
                    console.log(err);
                } else {
                    res.status(200).json({"items": rows})
                }
            })
        }
    })
});

router.put('/update/:orderNumber', function (req, res) {

    var orderNumber = req.params.orderNumber;
    var query = "UPDATE bestelling SET Status = 'PAID' WHERE BestellingNummer = " + orderNumber + ";";

    connector.getConnection(function (err, connection) {
        if (err) {
            console.log(err);
        } else {
            connection.query(query, function (err, rows) {
                connection.release();
                if (err) {
                    console.log(err);
                } else {
                    res.status(200).json({"items": rows})
                }
            })
        }
    })
});

module.exports = router;