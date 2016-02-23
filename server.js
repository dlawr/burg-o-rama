var ejs = require('ejs');
var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();
var port = process.env.PORT || 3000;
var burgerRoutes = require( path.join(__dirname, '/routes/burgers'));

app.use(morgan('dev'));

/* we'll be reading the form body,
but not accepting files, or anything more than text*/
app.use( bodyParser.urlencoded({ extended: false }));
/* we'll convert everything we receive into json,
for our convenience */
app.use( bodyParser.json());

// override with POST having ?_method=XXXX
/* e.g. If we need to make a PUT,
we'll POST to a url appended with ?_method=put */
app.use(methodOverride('_method'))


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
