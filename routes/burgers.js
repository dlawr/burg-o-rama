var express = require('express');
var burgers = express.Router();
// var app = express();

var burgerData = [];
var sampleData = ['1','2','3'];

function cr(input, output) {
  output.send(input.route);
}


burgers.get('/', function(req, res) {
  res.send(burgerData);
});
burgers.post('/', function(req, res) {
  burgerData.push(req.body);
  res.redirect('/burgers/' + burgerData.length);
  console.log(burgerData);
});


burgers.get('/:id/edit', function(req, res) {
  cr(req, res);
});
burgers.post('/:id/edit', function(req, res) {
  cr(req, res);
});

burgers.get('/:id', function(req, res) {
  cr(req, res);
});
burgers.post('/:id', function(req, res) {
  cr(req, res);
});
burgers.delete('/:id', function(req, res) {
  if(burgerData[req.params.id]) {
    burgerData = burgerData.slice(req.params.id);
  }
});



burgers.get('/new', function(req, res) {
  cr(req, res);
});


// burgers.route('/')
//   .get((req,res)=>{
//   })
//   .post((req,res)=>{
//
//   	res.redirect('./'+ newID)
//   })
//
// burgers.get('/:id/new', (req,res)=>
//
//   })
// )
// burgers.get('/:burgerID/edit', (req,res)=>
//
// )
//
// burgers.route('/:burgerID')
// 	.get((req,res)=>{
//
//   .put((req,res)=>{
//
//   })
//   .delete(dumpMethod)






module.exports = burgers;
