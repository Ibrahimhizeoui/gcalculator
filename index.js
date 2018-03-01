var express = require('express');
var app = express();
app.set('view engine', 'pug')
var gcalculator = require('./gcalculator.js');
app.use('/gcalculator', gcalculator)


app.listen(3000);