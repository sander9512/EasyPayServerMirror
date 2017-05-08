//product API
var express = require('express');
var app = express();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'easypaydb'
});

connection.connect();

app.get('', function(request, response) {
    connection.query('SELECT * from bestelling', function(err, rows, fields) {
        if (err) {
            console.log('error: ', err);
            throw err;
        }
        response.send([rows]);
    });
});

module.exports = app;