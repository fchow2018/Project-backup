var mongoose = require('mongoose');
var Schema = mongoose.Schema;

TodoSchema = new Schema({
    name: String,
    status: String
});

var Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
