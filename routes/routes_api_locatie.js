//product API
var express = require('express');
var router = express.Router();
var connector = require('../db/db_connector');

//default get endpoint to show all orders, or a specific order when orderNumber is given
router.get('/', function (req, res) {

    query = "SELECT * FROM `locatie`"

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