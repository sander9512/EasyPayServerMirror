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
        res.status(404).send("Please use api/kassamedewerker/login/USERNAME")
    }
});

//change emailadress feature
router.put('/id=:employeeid?/email=:emailadress?', function (req, res) {
    var employeeid = req.params.employeeid;
    var emailadress = req.params.emailadress;

    var queryStr = "UPDATE kassamedewerker SET Email = '" + emailadress + "' WHERE KassamedewerkerId=" + employeeid;

    connector.getConnection(function (err, connection) {
        if (err) {
            console.log(err);
        } else {
            connection.query(queryStr, function (err, rows) {
                connection.release();
                if (err) {
                    console.log(err);
                } else {
                    res.send('UPDATED!')
                }
            })
        }
    })
});

//change bank account number feature
router.put('/id=:employeeid?/bank=:bankrekening?', function (req, res) {
    var employeeid = req.params.employeeid;
    var bankrekening = req.params.bankrekening;

    var queryStr = "UPDATE kassamedewerker SET Bankrekeningnummer = '" + bankrekening + "' WHERE KassamedewerkerId=" + employeeid;

    connector.getConnection(function (err, connection) {
        if (err) {
            console.log(err);
        } else {
            connection.query(queryStr, function (err, rows) {
                connection.release();
                if (err) {
                    console.log(err);
                } else {
                    res.send('UPDATED!')
                }
            })
        }
    })
});

//change hours worked feature
router.put('/id=:employeeid?/hours=:hoursWorked?', function (req, res) {
    var employeeid = req.params.employeeid;
    var hoursWorked = req.params.hoursWorked;

    var queryStr = "UPDATE kassamedewerker SET UrenGewerkt = '" + hoursWorked + "' WHERE KassamedewerkerId=" + employeeid;

    connector.getConnection(function (err, connection) {
        if (err) {
            console.log(err);
        } else {
            connection.query(queryStr, function (err, rows) {
                connection.release();
                if (err) {
                    console.log(err);
                } else {
                    res.send('UPDATED!')
                }
            })
        }
    })
});

module.exports = router;