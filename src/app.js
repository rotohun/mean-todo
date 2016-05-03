"use strict"

var express = require('express');
var router = require('./api');

var app = express();

require('./database');

app.use('/',express.static('public'));


app.use('/api', router);

app.listen(3000, function (){

	console.log('server is running....');

});