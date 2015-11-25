var socket = io();

// send a message to the server to create the project
function create_project() {
    var name = document.getElementById("projName").value;
    socket.emit('createProject', name);
}
