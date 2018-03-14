var express = require('express'),
    app     = express(),
    bodyParser = require('body-parser'),
    logger  = require('morgan'),
    db      = require('./models/index');    // See models/index.js


// Configure app
app.set('views', __dirname + 'views');      // Views directory
app.use(express.static('public'));          // Static directory
app.use(logger('dev'));                     // Server logging
app.use(bodyParser.urlencoded({ extended: true })); // req.body

// Set CORS Headers
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/* --------------------
 * Routes
**/
// Homepage -- Display a list of current todos and a form
app.get('/', function(req, res) {
    res.sendFile( __dirname + '/views/index.html')
});

/* --------------------
 * API Routes (JSON)
 */

// LIST -- Fetch all todos
app.get('/todos', function(req, res) {
    db.Todo.find({}, function(err, todos) {
        if (err) {
            console.log(err);
            res.status(400).json({ todos: 'no data'})
        } else {
            // console.log(todos);
            res.status(200).json({todos: todos});
        }
    })
});

// CREATE -- Add a new item to the list
app.post('/add', function(req, res) {
    console.log(req.body);
    var newTodo = new db.Todo(req.body);
    newTodo.save(function(err, todo) {
        if (err) {
            console.log(err);
            res.status(400).json({ error: err });
        } else {
            res.status(201).json(todo);
        }

    })
});

// UPDATE -- Change the todo item
app.put('/:id', function(req, res) {
    db.Todo.findOne({_id: req.params.id}, function(err, todo) {
        if (err) {
            console.log(err);
        } else {
            res.status(200).json(todo);
        }
    })
});

// DELETE -- Remove an item from the list
// Users click a link which sends a GET request!
app.get('/:id', function(req, res) {
    console.log(req.params.id);
    db.Todo.remove({_id: req.params.id }, function(err) {
        if (err) {
            console.log(err);
        }
        console.log("Item removed.");
    });
    res.redirect('/');
});

// Start the server ...
app.listen(3000, function() {
    console.log('Todo app demo listening on port 3000 ...')
});

module.exports.server = app;