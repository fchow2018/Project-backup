# Express and MongoDB Review

See vocab list <a href="">here</a>.

## Create a new MEN stack:
__Step 1: Project Setup_
```
# 1 - Open your terminal. Create a new project folder with the name of your choice.
mkdir project_folder
cd project_folder
# 2 - Initialize and configure the new app
npm init
npm install express mongoose body-parser
touch server.js
mkdir views
touch views/index.html
```

*Step 2: Server configuration*
Open `server.js` and get your server running.
```
var express = require('express');
var app = express();

// Configure app
app.set('views', __dirname + 'views');      // Views directory
app.use(express.static('public'));          // Static directory
app.use(bodyParser.urlencoded({ extended: true })); // req.body

// Set CORS Headers
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Homepage -- Display a list of current todos and a form
app.get('/', function(req, res) {
    res.sendFile( __dirname + '/views/index.html')
});

app.listen(3000, function() {
    console.log("Server running on port 3000...")
}
```

Start your server in one terminal, then open an additional terminal in the project folder.
`nodemon server.js`

*Step 3: Setup Mongoose*
You have 2 terminals open: your server is running in one of them.
In your second terminal:
```
mkdir models
touch models/index.js models/Todo.js
```

1. Open `Todo.js` in your editor.
2. Add a variable `mongoose` and import it.
3. Add a variable `Schema` and assign it to mongoose's schema object.
4. Create a new `TodoSchema` with the following columns and types: description (String)
5. Create a model `Todo` using the newly created schema.
6. Export the `Todo` model so that other modules can use it.

Next, configure `index.js`. It should do the following:
1. Import `mongoose`
2. Import `Todo`
3. Establish a connection to MongoDB database named: `todo_review`
4. Export `Todo` as `Todo`. hint: `{ Todo: Todo }`

*Step 4: Test your database*
Open `server.js` again. Create a new route `/healthcheck`. The route should create a new `Todo` and return it as a JSON object.


## Mongoose and MongoDB Quick List
Assuming a model named Todo:

* `new Todo({key: value}, callback(err, newTodo))`: Creates a new Mongo documnet (row)
* `newTodo.save(callback(err, todo))`: Called after instantiating a `new Todo`
* `Todo.remove({key: value}, callback(err)): Removes all documents that match the value(s)
* `Todo.findOne({key: value}, callback(err, result)): Returns first document matching the value(s)
* `Todo.find({}, callback(err, allTodos)): Returns all documents

