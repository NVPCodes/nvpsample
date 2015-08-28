

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {

    Users.find({}).then(function(_users){
        res.send(_users);
    });
/**
 * Test Data
    res.send({
        [ {fname :'James', lname: 'Rawlins'} , {fname:'Anthony', lname: 'Jules'}]


    });
*/
})

module.exports = router;