//product API
var express = require('express');
var router = express.Router();
var connector = require('../db/db_connector');

router.get('/login/:username?', function(req, res) {
    var username = req.params.username || '';
    var queryStr;

    if (username){
        queryStr = "SELECT * from klant WHERE `Gebruikersnaam` = '" + username + "'"

        connector.getConnection( function (err, connection) {
            if (err){
                console.log(err);
            }else {
                connection.query(queryStr, function (err, rows) {
                    if(err){
                        console.log(err);
                    }else{
                        res.status(200).json({"items" : rows})
                    }
                })
            }
        })
    } else {
        res.status(404).send("Please use api/klant/login/USERNAME")
    }
});

router.get('/', function(req, res) {

    var queryStr = 'SELECT * from klant';

    connector.getConnection( function (err, connection) {
        if (err){
            console.log(err);
        }else {
            connection.query(queryStr, function (err, rows) {
                if(err){
                    console.log(err);
                }else{
                    res.status(200).json({"items" : rows})
                }
            })
        }
    })
});


module.exports = router;