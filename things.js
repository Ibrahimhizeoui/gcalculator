var express = require('express');
var router = express.Router();

router.get('/:id/:type', function(req, res){
   res.send('The id you specified is ' + req.params.id +' '+ req.params.type);
});
router.post('/', function(req, res){
   res.send('POST route on things.');
});
router.get('/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from B!')
});
router.get('*', function(req, res){
   res.send('Sorry, this is an invalid URL.');
});

//export this router to use in our index.js
module.exports = router;