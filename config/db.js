// load name from DB
var Q = require("q");
var mongoose = require("mongoose");
var connectionString = "mongodb://localhost:27017/nvp_codes";
if(process.env.PROD)
    connectionString = "mongodb://" + process.env.USERNAME  + ":" + process.env.PW + "@ds039073.mongolab.com:39073/my_world";  

module.exports = {
    connect: connect
};

function connect(){
    var dfd = Q.defer();
    mongoose.connect(connectionString);
    mongoose.connection.on("open", function(){
        console.log('connected to db %s', connectionString);
        
        dfd.resolve();
    });
    mongoose.connection.on("error", function(err){
        dfd.reject(err);
    });
    return dfd.promise;
}