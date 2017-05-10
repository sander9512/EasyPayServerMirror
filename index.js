/**
 * Created by Felix on 3-5-2017.
 */

var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var app = express();

var pool = mysql.createPool({
    connectionLimit : 10,
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

        connection.query('SELECT * from product', function (err, rows) {
            connection.release();
            if (err) {
                console.log('error: ', err);
                throw err;
            }
            res.send([rows]);
        });

        connection.on('error',
        function (err) {
            console.log('Connection error 2');
        }

        );
    });
}


app.use('/api/product', require('./routes/routes_api_product'));

app.use('/api/klant', require('./routes/routes_api_klant'));

app.use('/api/kassamedewerker', require('./routes/routes_api_kassamedewerker'));

app.use('/api/bestelling', require('./routes/routes_api_bestelling'));

app.use('/api/transactie', require('./routes/routes_api_transactie'));

app.get('/', function(request, response) {
    database(request, response);
});

app.get('*', function (request, response) {
    response.status(404);
    response.json({
        "description": "404 - Not Found"
    });
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
    console.log("Listening on " + port + "...");
});
