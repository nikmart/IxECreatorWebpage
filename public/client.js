var socket = io();

// send a message to the server to create the project
function create_project() {
    socket.emit('createProject');
}
