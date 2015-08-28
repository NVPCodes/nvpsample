var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true }
    
 
});

var User = mongoose.model("user", userSchema);
//User.index({fname : 1, lname: 1}, {unique : true});

module.exports = User;