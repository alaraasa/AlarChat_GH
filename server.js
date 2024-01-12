const express = require("express");
const socketIO = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('New user joined');

    socket.on('createMessage', (message) => {
        io.emit('newMessage', message);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

app.use(express.static('public'));

server.listen(11223, () => console.log('App is running on port 8080'));