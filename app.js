var express = require("express");
var logger =  require("morgan");

var app = express();  

var path = require('path');

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));





//app.use('/api', require('./api'));

app.get('*', function(req,res) {
    
    res.sendFile(path.join(__dirname + '/index.html'), function(err){
        if ( err ) {
            console.log(err);
            res.status(err.status).end();
        }
        else {
            console.log('Sent: index.html');
        }
        
    });

})

var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
  console.log('server is listening on port %d', port);
})