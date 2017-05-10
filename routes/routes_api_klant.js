//product API
var express = require('express');
var app = express();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'eu-cdbr-west-01.cleardb.com',
    user : 'bf45754e8eb79a',
    password : 'cc63c676',
    database : 'heroku_05fdd2a232b52ba'
});

connection.connect();

app.get('/login:username', function(request, response) {

    var username = request.param.username || '';

    connection.query('SELECT * from klant WHERE `Gebruikersnaam` = ' + username + ';', function(err, rows, fields) {
        if (err) {
            console.log('error: ', err);
            throw err;
        }
        response.send([rows]);
    });
});

// router.get('/recipes/:number', function (req, res) {
//     res.status(200);
//
//     var number = req.params.number || '';
//     var recipe = recipes[number - 1];
//
//     res.json(recipe);
// });

app.get('', function(request, response) {
    connection.query('SELECT * from klant', function(err, rows, fields) {
        if (err) {
            console.log('error: ', err);
            throw err;
        }
        response.send([rows]);
    });
});

module.exports = app;