const socket = io();

const room = prompt("Enter room name:");
const username = prompt("Enter your name:");
const editor = document.getElementById("editor");

// Join room
socket.emit("join", room, username);

// Send updates when typing
editor.addEventListener("input", () => {
  socket.emit("text-update", editor.value);
});

// Receive updates from others
socket.on("text-update", (newText) => {
  editor.value = newText;
});
