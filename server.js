var express = require('express');
var http = require('http');
var app = express();
var server = http.Server(app);
var io = require('socket.io')(server);

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
    socket.on('createProject', function() {
        console.log('create new project');
    });

});

// start the server and say waht port it is on
server.listen(8000, function() {
    console.log('listening on *:8000');
});
