/* This file acts as the source of all data by importing the models
 * and connecting the app to the database.
 * You won't need to repeat any code here in any other file.
 * Simply import this module wherever you need to connect to your database!
 *
 * http://mongoosejs.com/docs/guide.html
**/
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/book-app");   
// the mongoose.connect line above  needs to happen exactly once in your code
    // move it from book.js to index.js  :)

module.exports.Gargoyle = require("./gargoyle.js");
module.exports.Goblin = require("./goblin.js");
module.exports.Gnome = require("./gnome.js");

// Connect to the database
// The name of the database will be 'todo_demo'
mongoose.connect('mongodb://localhost/todo_demo', {promiseLibrary: global.Promise});

// Export so that other modules can 'require' this one.
// https://darrenderidder.github.io/talks/ModulePatterns/#/
module.exports = {
    Todo: Todo
};

module.exports.Book = require("./book.js");
module.exports.Author = require("./author.js");


