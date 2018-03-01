var express = require('express');
var birdsrouter = express.Router();

birdsrouter.get('/', function(req, res){
   res.send('****************The id you specified is ');
});
birdsrouter.post('/', function(req, res){
   res.send('POST route on things.');
});
birdsrouter.get('/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from B!')
});
birdsrouter.get('*', function(req, res){
   res.send('Sorry, this is an invalid URL.');
});

//export this birdsrouter to use in our index.js
module.exports = birdsrouter;