//product API
var express = require('express');
var router = express.Router();
var connector = require('../db/db_connector');

//default endpoint gets all customers
router.get('/', function (req, res) {

    var queryStr = 'SELECT * from klant';

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
});

//login feature
router.get('/login/:username?', function (req, res) {
    var username = req.params.username || '';
    var queryStr;

    if (username) {
        queryStr = "SELECT * from klant WHERE `Gebruikersnaam` = '" + username + "'"

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

//signup customer feature (check usernames)
router.get('/signup/:username?', function (req, res) {
    var username = req.params.username || '';
    var queryStr;

    if (username) {
        queryStr = "SELECT username from klant WHERE `Gebruikersnaam` = '" + username + "'";

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

//change balance feature
router.put('/id=:customerid?/saldo=:amount?&datum=:date?', function (req, res) {
    var customerid = req.params.customerid;
    var amount = req.params.amount;
    var date = req.params.date;

    var queryStr = "UPDATE klant SET Saldo = '" + amount + "', TimeLog = '" + date + "' WHERE KlantId=" + customerid;

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

//change password feature
router.put('/id=:customerid?/wachtwoord=:password?', function (req, res) {
    var customerid = req.params.customerid;
    var password = req.params.password;

    var queryStr = "UPDATE klant SET Wachtwoord = '" + password + "' WHERE KlantId=" + customerid;

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

//change emailadress feature
router.put('/id=:customerid?/email=:emailadress?', function (req, res) {
    var customerid = req.params.customerid;
    var emailadress = req.params.emailadress;

    var queryStr = "UPDATE klant SET Email = '" + emailadress + "' WHERE KlantId=" + customerid;

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
router.put('/id=:customerid?/bank=:bankrekening?', function (req, res) {
    var customerid = req.params.customerid;
    var bankrekening = req.params.bankrekening;

    var queryStr = "UPDATE klant SET Bankrekeningnummer = '" + bankrekening + "' WHERE KlantId=" + customerid;

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

//sign up customer feature (create account)
router.put('/signup/:firstname/:lastname/:username/:password/:email?/:banknumber?', function (req, res) {

    var firstname = req.params.firstname;
    var lastname = req.params.lastname;
    var username = req.params.username;
    var password = req.params.password;
    var email = req.params.email;
    var banknumber = req.params.banknumber;

    var query = '';

    //no email, no banknumber input
    if (!email && !banknumber) {
        query = "INSERT INTO Klant VALUES('NULL', '" + username + "', '" + password + "', NULL, '" + firstname + "', '" + lastname + "', NULL, 0, NOW());"

        //only no email input
    } else if (!email && banknumber) {
        query = "INSERT INTO Klant VALUES('NULL', '" + username + "', '" + password + "', NULL, '" + firstname + "', '" + lastname + "', '" + banknumber + "', 0, NOW());"

        //only no banknumber input
    } else if (email && !banknumber) {
        query = "INSERT INTO Klant VALUES('NULL', '" + username + "', '" + password + "', '" + email + "', '" + firstname + "', '" + lastname + "', NULL, 0, NOW());"

        //every field filled in
    } else if (email && banknumber) {
        query = "INSERT INTO Klant VALUES('NULL', '" + username + "', '" + password + "', '" + email + "', '" + firstname + "', '" + lastname + "', '" + banknumber + "', 0, NOW());"
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
                    res.send('NEW CUSTOMER CREATED!')
                }
            })
        }
    })
});

//delete feature
router.delete('/delete/:id?', function (req, res) {
    var id = req.params.id || '';
    var queryStr;

    if (id) {
        queryStr = "DELETE from klant WHERE `KlantId` = '" + id + "'";

        connector.getConnection(function (err, connection) {
            if (err) {
                console.log(err);
            } else {
                connection.query(queryStr, function (err, rows) {
                    connection.release();
                    if (err) {
                        console.log(err);
                    } else {
                        res.status(200).send('DELETED')
                    }
                })
            }
        })
    } else {
        res.status(404).send("CANT DELETE")
    }
});

//default endpoint to update balance from customers
router.put('/afrekening/:klantId/:klantSaldo', function (req, res) {

    var klantId     = req.params.klantId || '';
    var klantSaldo  = req.params.klantSaldo || '';

    var queryStr = 'UPDATE Klant SET Saldo = ' + klantSaldo + ' WHERE KlantId =' + klantId + ';';

    connector.getConnection(function (err, connection) {
        if (err) {
            console.log(err);
        } else {
            connection.query(queryStr, function (err, rows) {
                connection.release();
                if (err) {
                    console.log(err);
                } else {
                    res.send('BALANCE UPDATED!')
                }
            })
        }
    })
});

module.exports = router;