/**
 * Created by Felix on 3-5-2017.
 */

var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var app = express();

var connection = mysql.createConnection({
    host : 'eu-cdbr-west-01.cleardb.com',
    user : 'bf45754e8eb79a',
    password : 'cc63c676',
    database : 'heroku_05fdd2a232b52ba'
});

connection.connect();

app.use('/api/product', require('./routes/routes_api_product'));

app.use('/api/klant', require('./routes/routes_api_klant'));

app.use('/api/kassamedewerker', require('./routes/routes_api_kassamedewerker'));

app.use('/api/bestelling', require('./routes/routes_api_bestelling'));

app.use('/api/transactie', require('./routes/routes_api_transactie'));

app.get('/', function(request, response) {
    connection.query('SELECT * from product', function(err, rows, fields) {
        if (err) {
            console.log('error: ', err);
            throw err;
        }
        response.send([rows]);
    });
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
    console.log("Listening on " + port + "...");
});
