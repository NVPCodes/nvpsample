

var express = require('express');
var router = express.Router();

<<<<<<< HEAD
var Users = require("../models/user");

=======
>>>>>>> 1d0d05c2a8b37765b925bd87780ef58d43e6dcbb
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