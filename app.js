// -----------------------------------
// ****** Modules + Middleware! ******
// -----------------------------------
var express = require('express');
var app = express();

var morgan = require('morgan');
app.use( morgan('dev') );

app.use(express.static(__dirname + '/client_public'));
app.set('views', (__dirname + '/server_private/views'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));

var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.set('view engine', 'ejs');

var mongoPath = process.env.MONGOLAB_URI || 'mongodb://localhost/tensegritynyc';
var mongoose = require('mongoose');
mongoose.connect(mongoPath);



// ----------------------
// ****** Routing! ******
// ----------------------

//Consumer

//Index view
var index = require('./server_private/routes/pages/index');
app.use('/', index);


//Service

//API's

//Emails API
var emails = require('./server_private/routes/api/emails');
app.use('/api/emails', emails);

//Users API





// ---------------------
// ****** Listen! ******
// ---------------------
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log('this ship has sailed from port ' + port);
});
