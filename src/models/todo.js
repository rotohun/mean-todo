'use strict';

var mongoose = require('mongoose');


// todo.name
// todo.completed

var Schema = new mongoose.Schema({
	name: String,
	completed: Boolean
});


var model = mongoose.model('Todo', Schema);

module.exports = model;