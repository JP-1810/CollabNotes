const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const path = require("path");

const app = express();
const httpserver = http.createServer(app);
const io = socketio(httpserver);

const gamedirectory = path.join(__dirname, "html");
app.use(express.static(gamedirectory));

httpserver.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

let rooms = {};
let usernames = {};

io.on("connection", function(socket) {
  socket.on("join", function(room, username) {
    if (username !== "") {
      rooms[socket.id] = room;
      usernames[socket.id] = username;
      socket.leaveAll();
      socket.join(room);
      socket.emit("join", room);
    }
  });

  socket.on("text-update", function(text) {
    socket.to(rooms[socket.id]).emit("text-update", text);
  });
});
