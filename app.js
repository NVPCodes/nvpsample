var express = require("express");
var logger =  require("morgan");

// include server routes
var baseRoute = require('./api/index');
var nvpUsers = require('./api/nvpRoutes');


var debug = require('debug')('my_app:server');

var path = require('path');

<<<<<<< HEAD

=======
var Users = require("./models/user");
>>>>>>> 1d0d05c2a8b37765b925bd87780ef58d43e6dcbb

var favicon = require('serve-favicon');

require("./config/db").connect(function(err, conn){
    if(err)
        console.log(err);
    else
        console.log("connected");
});



var app = express();
app.locals.pretty = true;


app.use(logger('dev'));

// preload front end assets  
app.use(express.static(path.join(__dirname, '/public')));


app.use('/templates',express.static(path.join(__dirname, '/templates')));



// call routes via middleware
<<<<<<< HEAD
//app.use('/', baseRoute);
=======
app.use('/', baseRoute);
>>>>>>> 1d0d05c2a8b37765b925bd87780ef58d43e6dcbb
app.use('/nvp', nvpUsers);




<<<<<<< HEAD
// main Route

app.get('/', function (req, res) {

    res.sendFile(path.join(__dirname + '/index.html'), function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Sent: index.html');
        }

    })
})
=======
// add routes here
>>>>>>> 1d0d05c2a8b37765b925bd87780ef58d43e6dcbb

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