
var express = require('express');
var router = express.Router();

<<<<<<< HEAD
var path = require('path');

router.get('/', function (req, res) {

    res.sendFile(path.join(__dirname + '/index.html'), function (err) {
        if (err) {
            console.log(err);
=======
router.get('/', function (req, res) {

    res.sendFile(path.join(__dirname + '/index.html'), function(err){
        if ( err ) {
            console.log(err);
            res.status(err.status).end();
>>>>>>> 1d0d05c2a8b37765b925bd87780ef58d43e6dcbb
        }
        else {
            console.log('Sent: index.html');
        }

<<<<<<< HEAD
    })
})
=======
    });

})

>>>>>>> 1d0d05c2a8b37765b925bd87780ef58d43e6dcbb
module.exports = router;