console.log("app.js loaded");

$(document).ready(function() {
    var apiEndpoint = 'http://localhost:3000/';

    // On page load, get the current Todos from the database
    console.log('Fetching todos ...');
    $.ajax({
        method: 'get',
        url: apiEndpoint + 'todos',
        success: function(response) {
            console.log("Todos count: " + response.todos.length);

            // Loop through items and append to the page
            for (var i =0; i < response.todos.length; i++) {
                var todo = response.todos[i];
                $('#todos').append(`<p class="todo">
                                    <a href="/${todo._id}" id="${todo._id}">${todo.name}</a>
                                    
                                    </p>`);
            }
        },
        error: function(err) { console.log(err); }
    });

    $('form').on('submit', function() {
        // On form submit, add a new item to the list
        console.log('Creating todo ...');
        $.ajax({
            method: 'post',
            url: apiEndpoint + 'add',
            data: $(this).serialize(),
            success: function(response) { console.log('Created.');},
            error: function(err) { console.log(err); }
        })
    });

    $('#todo').on('click', function() {
        // var id;
        // $.ajax({
        //     method: 'put',
        //     url: apiEndpoint + id,
        //     data: { id: id },
        //     success: function(response) { console.log('Updated.')},
        //     error: function(err) { console.log(err); }
        // })
    });

    $('#clear').on('click', function() {
        // OPTIONAL: Delete all items!
    })
});

