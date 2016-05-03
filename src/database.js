'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-todo',function (err) {
	if (err) {
		console.log('failed to connect to datatbase')
	}else{
		console.log('Successfully connected to Mongo!')
	}
})