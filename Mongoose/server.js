var express = require('express');
var app = express();
var db = require('./models/index');

app.get('/', function(req, res) {
	var todo = new db.Todo({name: 'Hello, wdi 43!'});
	todo.save(function(err, newTodo){
		if (err){
			console.log(err);
		}

		else {
			console.log(newTodo.name)
		}
	});

	res.send('Hello, wdi 43!');
});

// LIST Fetch all todos
app.get('/todos', function(req, res){
	db.Todo.find({}, function(err, todos){
		if (err){
			console.log(err);
			res.status(400).json({todos: 'no data'});
		}
		else {
			console.log(todos);
			res.status(200).json({todos: todos});
		}
	});
});

app.listen(3000, function(){
	console.log('Server is running on port 3000');
});