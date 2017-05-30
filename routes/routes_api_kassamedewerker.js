//product API
var express = require('express');
var router = express.Router();
var connector = require('../db/db_connector');

router.get('', function(req, res) {

    var queryStr = 'SELECT * from kassamedewerker';

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

//login feature
router.get('/login/:username?', function (req, res) {
    var username = req.params.username || '';
    var queryStr;

    if (username) {
        queryStr = "SELECT * from kassamedewerker WHERE `Gebruikersnaam` = '" + username + "'"

        connector.getConnection(function (err, connection) {
            if (err) {
                console.log(err);
            } else {
                connection.query(queryStr, function (err, rows) {
                    connection.release();
                    if (err) {
                        console.log(err);
                    } else {
                        res.status(200).json({"items": rows})
                    }
                })
            }
        })
    } else {
        res.status(404).send("Please use api/klant/login/USERNAME")
    }
});

//Get customer data
router.get('/getcustomer/:customerid?', function (req, res) {
    var cid = req.params.customerid || '';
    var queryStr;

    if (cid) {
        queryStr = "SELECT voornaam, achternaam, KlantId FROM klant WHERE KlantId=" + cid + ";";

        connector.getConnection(function (err, connection) {
            if (err) {
                console.log(err);
            } else {
                connection.query(queryStr, function (err, rows) {
                    connection.release();
                    if (err) {
                        console.log(err);
                    } else {
                        res.status(200).json(rows)
                    }
                })
            }
        })
    } else {
        res.status(404).send("Please put in a correct customer id")
    }
});

module.exports = router;
