// Importing necessary modules
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const port = process.env.PORT || 3000;

// Initializing express app
const app = express();

// Creating a server
const server = http.createServer(app);

// Setting up socket.io
const io = socketIo(server);

// Serve static files from public folder
app.use(express.static('public'));

// Socket connection event
io.on('connection', (socket) => {
    console.log('A user connected');

    // Message event
    socket.on('message', (message) => {
        console.log('Received message:', message);

        // Emit the message to all clients
        io.emit('message', message);
    });

    // Disconnect event
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// Start the server
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});