# CollabNotes 

## A real - time Collaborative Note App

This project is a real-time collaborative note-taking web application that allows multiple users to join the same room and write or edit notes simultaneously. The app was built using core web technologies such as **Node.js**, **Express.js**, **Socket.IO**, **HTML**, **CSS**, and **JavaScript**, and styled with a soft blue color scheme to offer a clean and modern user experience. This tool can be particularly useful in scenarios like live group discussions, team brainstorming sessions, online study groups, or collaborative interviews.

## Live Deployment

### https://f0855996-f8e6-40d0-a514-814c1e98f4d9-00-1ctp67cervl64.sisko.replit.dev/ 

Hosted on **Replit**, this application requires no installation. It works instantly in the browser and can be used across multiple devices.

##  Features

-  Real-time text syncing using **Socket.IO**
-  Multi-user collaboration by joining the same room
-  Modern and clean UI 
-  Prompt-based room joining with username identification
-  Easy to deploy, test, and run from any browser

##  Technologies Used

- **Node.js** – Backend runtime environment
- **Express.js** – Web framework for handling routes and serving static files
- **Socket.IO** – Enables WebSocket-based real-time communication
- **HTML/CSS** – Structure and styling of the user interface
- **JavaScript** – Client-side scripting and socket handling
- **Replit** – Cloud IDE and hosting platform

  ##  How It Works

1. When a user visits the app, they are prompted to enter:
   - A **room name** (to group users)
   - A **username** (for identity purposes)

2. Once they enter the room:
   - A Socket.IO connection is established between the client and server
   - The server keeps track of which socket (user) is in which room

3. When a user types in the notes area:
   - Their input is emitted via a `"text-update"` event to the server
   - The server broadcasts that message to all **other users** in the same room
   - As a result, everyone's notes stay in sync in real time

4. Users can join from different devices or browsers as long as they use the same room name.

This logic makes the app behave like Google Docs' collaborative editing but in a simplified way.
   
## 📁 File Structure

- index.js : server-side code  (Express + Socket.IO)
- 
