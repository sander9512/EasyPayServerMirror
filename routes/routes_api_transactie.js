//product API
var express = require('express');
var router = express.Router();
var connector = require('../db/db_connector');

router.get('', function(req, res) {

    var queryStr = 'SELECT * from transactie';

    connector.getConnection( function (err, connection) {
        if (err){
            console.log(err);
        }else {
            connection.query(queryStr, function (err, rows) {
                connection.release();
                if (err){
                    console.log(err);
                }else {
                    res.status(200).json({"items" : rows})
                }
            })
        }
    });
});

module.exports = router;