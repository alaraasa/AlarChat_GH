// Server-side code
const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, { cors: { origin: "http://localhost:8080" } });

io.on("connection", (socket) => {
    console.log("A user has connected.");

    socket.on("message", (message) => {
        console.log(`New message: ${message}`);
        io.emit("message", message);
    });

    socket.on("disconnect", () => {
        console.log("A user has disconnected.");
    });
});

httpServer.listen(3000, () => {
    console.log("Server is listening on port 3000.");
});
