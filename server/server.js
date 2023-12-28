const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors()); // Enable CORS for all routes

io.on('connection', (socket) => {
  console.log('User Online');

  socket.on('canvas-data', (data) => {
    socket.broadcast.emit('canvas-data', data);
  });
});

const server_port = process.env.YOUR_PORT || process.env.PORT || 5000;

server.listen(server_port, () => {
  console.log("Server started on port: " + server_port);
});
