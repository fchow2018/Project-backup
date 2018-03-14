/*
    Use: `node seed.js rowCount`
    rowCount = The number of rows you want mongoose to add to the database
 */
var db = require('./models/index');
var faker = require('faker');
var rowCount = process.argv[2];

// First, clear out the current data from MongoDB
db.Todo.remove({}, function() {
    console.log('Database cleared. Seeding ...')
    // Then add 5 new items
}).then(function (res) {
        for (var i = 0; i < rowCount; i++) {
            var todo = new db.Todo({name: faker.lorem.sentence(), status: 'incomplete'});
            todo.save(postSave);
        }
        console.log("Seeding complete.");
    }
);

// Callback on save
function postSave(error, todo){
    if(error){
        console.log('Error:', error);
    } else {
        console.log('Created:', todo);
    }
}
