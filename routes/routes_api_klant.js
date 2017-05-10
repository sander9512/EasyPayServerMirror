//product API
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var pool = mysql.createPool({
    host : 'eu-cdbr-west-01.cleardb.com',
    user : 'bf45754e8eb79a',
    password : 'cc63c676',
    database : 'heroku_05fdd2a232b52ba'
});

function database(req, res) {
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log('Connection error 1');
        }

        console.log('connected as id ' + connection.threadId);

            connection.query('SELECT * from klant', function (err, rows) {
                connection.release();
                if (err) {
                    console.log('error: ', err);
                    throw err;
                }
                res.send(rows);
            });

        connection.on('error',
            function (err) {
                console.log('Connection error 2');
            }
        );
    });
}



function databaseusername(res, username) {
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log('Connection error 1');
        }

        console.log('connected as id ' + connection.threadId);
        console.log("Gebruikersnaam: " + username);

        connection.query("SELECT * from klant WHERE `Gebruikersnaam` = '" + username + "'", function(err, rows, fields) {
            if (err) {
                console.log('error: ', err);
                throw err;
            }
            res.send(rows);
        });

        connection.on('error',
            function (err) {
                console.log('Connection error 2');
            }
        );
    });
}

router.get('/login/:username?', function(request, response) {

    var username = request.params.username || '';

    databaseusername(response,username);


});

// router.get('/recipes/:number', function (req, res) {
//     res.status(200);
//
//     var number = req.params.number || '';
//     var recipe = recipes[number - 1];
//
//     res.json(recipe);
// });

router.get('', function(request, response) {
    database(request,response)
});

module.exports = router;