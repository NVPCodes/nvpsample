// load name from DB
var Q = require("q");
var mongoose = require("mongoose");
var connectionString = "mongodb://localhost:27017/nvp_codes";
<<<<<<< HEAD
if(process.env.PROD) {
    process.env.USERNAME = 'havilez';
    process.env.PW = 'sankofa123';

    connectionString = "mongodb://" + process.env.USERNAME + ":" +  process.env.PW  + "@ds035673.mongolab.com:35673/nvp_codes";
}

=======
if(process.env.PROD)
    connectionString = "mongodb://" + process.env.USERNAME  + ":" + process.env.PW + "@ds039073.mongolab.com:39073/my_world";  
>>>>>>> 1d0d05c2a8b37765b925bd87780ef58d43e6dcbb

module.exports = {
    connect: connect
};

function connect(){
    var dfd = Q.defer();
    mongoose.connect(connectionString);
    mongoose.connection.on("open", function(){
<<<<<<< HEAD
        console.log('connected to db %s', connectionString);
=======
>>>>>>> 1d0d05c2a8b37765b925bd87780ef58d43e6dcbb
        
        dfd.resolve();
    });
    mongoose.connection.on("error", function(err){
        dfd.reject(err);
    });
    return dfd.promise;
}