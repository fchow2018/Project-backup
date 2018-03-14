var mongoose = require('mongoose');

// Require todo
var Todo = require('./todo.js');

mongoose.connect('mongodb://localhost/todo_app');

mongoose.Promise = global.Promise;

module.exports = { Todo: Todo };