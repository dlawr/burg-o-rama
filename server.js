'use strict'
var express = require('express');
var path = require('path');
var morgan = require('morgan');
var app = express();
var port = process.env.PORT || 3000;
var burgerRoutes = require( path.join(__dirname, '/routes/burgers'));

app.use(morgan('dev'));


function cr(input) {
  console.log(input.route);
}

app.get('/', function(req, res) {
  cr(req);
});

app.use( '/burgers', burgerRoutes)






var server = app.listen(port, function() {
  console.log('server up', port)
});
