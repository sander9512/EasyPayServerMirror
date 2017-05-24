//product API
var express = require('express');
var router = express.Router();
var connector = require('../db/db_connector');

//Voeg een device en error toe
router.put('/add_error/:deviceSDK?/:device?/:model?/:product?/:error?', function(req,res) {
    var deviceSDK = req.params.deviceSDK || '';
    var device = req.params.device || '';
    var model = req.params.model || '';
    var product = req.params.product || '';
    var error  = req.params.error || '';
    
    connector.getConnection(function (err, connection) {
        if (err) {
            console.log(err);
        } else {
            connection.query('INSERT INTO error_data(deviceSDK,device,model,product,error) VALUES( "' + [deviceSDK] + '","' + [device] + '","' + [model] + '","' + [product] + '","' + [error] + '");',
                function (error, rows) {
                    if (error) {
                        res.status(400).json(error);
                    } else {
                        res.status(200).json(rows);
                    }
                });
        }
    })
});

module.exports = router;
