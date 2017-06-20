/**
 * Created by Felix on 3-5-2017.
 */

var express = require('express');
var connector = require('./db/db_connector');
var app = express();

app.use('/api/product', require('./routes/routes_api_product'));

app.use('/api/klant', require('./routes/routes_api_klant'));

app.use('/api/kassamedewerker', require('./routes/routes_api_kassamedewerker'));

app.use('/api/bestelling', require('./routes/routes_api_bestelling'));

app.use('/api/transactie', require('./routes/routes_api_transactie'));

app.use('/api/assortiment', require('./routes/routes_api_assortiment'))

app.use('/api/locatie', require('./routes/routes_api_locatie'))

app.use('/api/error', require('./routes/routes_api_error'));

app.get('/', function(req, res) {

    var queryStr = "SELECT * from product";

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

app.get('*', function (request, response) {
    response.status(404);
    response.send("404 NOT FOUND");
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
    console.log("Listening on " + port + "...");
});

module.exports = app;