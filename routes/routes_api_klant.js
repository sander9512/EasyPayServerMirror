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

router.put('/id=:customerid?/saldo=:amount?&datum=:date?', function (req, res) {
    var customerid = req.params.customerid;
    var amount = req.params.amount;
    var date = req.params.date;

    var queryStr = "UPDATE klant SET Saldo = '" +amount+ "', TimeLog = '" +date+ "' WHERE KlantId=" +customerid;

    connector.getConnection( function (err, connection) {
        if (err){
            console.log(err);
        }else {
            connection.query(queryStr, function (err, rows) {
                if(err){
                    console.log(err);
                }else{
                    res.send('UPDATED!')
                }
            })
        }
    })
});

router.put('/id=:customerid?/wachtwoord=:password?', function (req, res) {
    var customerid = req.params.customerid;
    var password = req.params.password;

    var queryStr = "UPDATE klant SET Wachtwoord = '" + password + "' WHERE KlantId=" + customerid;

    connector.getConnection( function (err, connection) {
        if (err){
            console.log(err);
        }else {
            connection.query(queryStr, function (err, rows) {
                if(err){
                    console.log(err);
                }else{
                    res.send('UPDATED!')
                }
            })
        }
    })
});


module.exports = router;