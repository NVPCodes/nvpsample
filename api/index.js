
var express = require('express');
var router = express.Router();


var path = require('path');

router.get('/', function (req, res) {

    res.sendFile(path.join(__dirname + '/index.html'), function (err) {

        if ( err ) {
            console.log(err);
            res.status(err.status).end();

        }
        else {
            console.log('Sent: index.html');
        }


    })
})




module.exports = router;