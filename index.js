/**
 * Created by Felix on 3-5-2017.
 */

var express = require('express');
var app = express();
var mysql = require('mysql');
// app.use(express.logger());

var connection = mysql.createConnection({
    host : 'eu-cdbr-west-01.cleardb.com',
    user : 'bf45754e8eb79a',
    password : 'cc63c676',
    database : 'heroku_05fdd2a232b52ba'
});

connection.connect();

app.get('/', function(request, response) {
    connection.query('SELECT * from klant', function(err, rows, fields) {
        if (err) {
            console.log('error: ', err);
            throw err;
        }

        response.json({"hallo": "dit is een bericht. Dus het werkt nu gewoon."});
        response.json(['Hello World!!!! Hallo wereld!!!!', rows]);
    });
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
    console.log("Listening on " + port + "...");
});