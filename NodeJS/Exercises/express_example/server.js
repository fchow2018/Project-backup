// REQUIREMENTS
var express = require('express'),
  app = express();

//DATA (temporary until we know how to use databases)
var burgers = [
  'Hamburger',
  'Cheese Burger',
  'Vegetable Burger'
];

var tacos = [
  'Soft Taco',
  'Crunchy Taco',
  'Super Taco'
];

// ROUTES
app.get("/", function (request, response) {
  response.send("Hello World");
});

app.get("/api/burgers", function (request, response) {
  //send all the burgers
  response.json(burgers);
});

app.get("/api/tacos", function (request, response) {
  //send all the tacos
  response.json(tacos);
});

app.get("/greetings/:name", function (request, response) {
  response.send( "Hello, " + request.params.name );
});

// Pick A Color Route
app.get('/color/:choice', function(request, response){
  var choice = request.params.choice;
  response.send('Your color is: ' + choice);
});

// SERVER START
app.listen(3000, function () {
  console.log("HTTP server listening at localhost:3000");
});
