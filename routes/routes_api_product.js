//product API
var express = require('express');
var app = express();
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

        connection.query('SELECT * from bestelling', function (err, rows) {
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


app.get('', function(request, response) {
    database(request,response);
});

module.exports = app;