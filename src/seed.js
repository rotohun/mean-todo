'use strict';

var Todo = require('./models/todo.js');

var todos  = [
    'feed the dog',
    'Walk the kids',
    'Water the trees',
    'Make the bed'
];

todos.forEach(function (todo,index) {
  Todo.find({'name': todo}, function(err, todos){
    if (!err && !todos.length) {
      Todo.create({name: todo, completed: false});
    };
  });
})
