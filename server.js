var express = require('express');
var http = require('http');
var app = express();
var server = http.Server(app);
var io = require('socket.io')(server);
var child_process = require('child_process');

// use express to create the simple webapp
app.use(express.static('public'));

// start the socket connection and say if someone connects
io.on('connect', function(socket) {
    console.log('a user connected');

    // if you get the 'disconnect' message, say the user disconnected
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });

    // if you get the 'createProject' message, create a new IxE project
    socket.on('createProject', function(name) {
        console.log('create new project:', name);
        //can't get out of the working directory of the project
        //run the project creator script

    });

});

// start the server and say waht port it is on
server.listen(8000, function() {
    console.log('listening on *:8000');
});
