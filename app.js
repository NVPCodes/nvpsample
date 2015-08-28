var express = require("express");
var logger =  require("morgan");

require("./config/db").connect(function(err, conn){
    if(err)
        console.log(err);
    else
        console.log("connected");
});



var app = express();
app.locals.pretty = true;

var debug = require('debug')('my_app:server');

var path = require('path');

var Users = require("./models/user");

var favicon = require('serve-favicon');

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, '/public')));


app.use('/templates',express.static(path.join(__dirname, '/templates')));


//app.use('/api', require('./api'));

app.get('/', function (req, res) {

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

app.get('/nvp', function (req, res) {

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


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.send( {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send( {
        message: err.message,
        error: {}
    });
});



var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
  console.log('server is listening on port %d', port);
})