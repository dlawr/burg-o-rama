'use strict'
var express = require('express');
var path = require('path');
var morgan = require('morgan');
var app = express();
var port = process.env.PORT || 3000;

app.use(morgan('dev'));

function cr(input) {
  console.log(input.route);
}

app.get('/', function(req, res) {
  cr(req);
});

app.get('/burgers', function(req, res) {
  cr(req);
});

app.get('/burgers/:id/edit', function(req, res) {
  cr(req);
});
app.post('/burgers/:id/edit', function(req, res) {
  cr(req);
});

app.get('/burgers/:id', function(req, res) {
  cr(req);
});
app.post('/burgers/:id', function(req, res) {
  cr(req);
});


app.get('/burgers/new', function(req, res) {
  cr(req);
});





var server = app.listen(port, function() {
  console.log('server up', port)
});
