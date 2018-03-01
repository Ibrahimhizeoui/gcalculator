var express = require('express');
var grooter = express.Router();
var http = require('http');
grooter.get('/car', function(req, res){
    var options = {
        host : 'api.openweathermap.org',
        path : '/data/2.5/forecast/daily?q=stockholm&mode=json&units=metric&cnt=14&appid=75e843de569fb57a783c2e73fd9a7bb5',
        method : 'GET'
    }
    var maybe = '';
    console.log('till here')
    var req = http.get(options, function(res){
        var body = "";
        res.on('data', function(data) {
            console.log('data came');
            body += data;
        });
        res.on('end', function() {
            console.log('ended too');
            maybe = JSON.parse(body);
            console.log(body);
            //res.send(maybe);
        });
    });
    console.log('here too man');
    req.on('error', function(e) {
        console.log('Problem with request: ' + e.message);
    });

});
grooter.post('/', function(req, res){
   res.send('POST route on things.');
});
grooter.get('/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from B!')
});
grooter.get('*', function(req, res){
   res.send('Sorry, this is an invalid URL.');
});

//export this grooter to use in our index.js
module.exports = grooter;