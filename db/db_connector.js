/**
 * Created by Bart on 11-5-2017.
 */

var mysql = require('mysql');
var config = require('./config.json');

var connector = mysql.createPool({
    host : config.dbHost,
    user : config.dbUser,
    password : config.dbPassword,
    database : config.dbDatabase
});


module.exports = connector;
