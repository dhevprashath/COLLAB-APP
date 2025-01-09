# COLLAB-APP

**COMPANY NAME : CODETECH IT SOLUTIONS**

**NAME:DHEV PRASHATH R**

**INTERN ID:CT08GSG**

**DOMAIN : MERN STACK DEVELOPMENT**

**BATCH DURATION : December 25th, 2024 to January 25th, 2025**

**MENTOR NAME : NEELA SANTHOSH**

DESCRIPTION :
The code provided sets up a simple real-time collaborative document editor using Node.js, Express, and Socket.io. Here’s a description of each component and how they work together to create the collaboration tool:
Project Overview

Objective: The main goal of this project is to create a collaborative editor where multiple users can edit a document simultaneously in real time.

Components


Node.js: A JavaScript runtime that allows you to run JavaScript server-side. It is used here to run the server that handles requests and WebSocket connections.


Express: A lightweight web framework for Node.js. It simplifies the server setup and allows serving static files (like HTML, CSS, and JavaScript).


Socket.io: A library that enables real-time, bidirectional communication between web clients and servers. It's essential for handling real-time events, such as document changes.


Directory Structure

server.js: The main server code that handles client connections and broadcasts document changes.
public/index.html: The HTML file that serves as the user interface for the collaborative editor.
public/script.js: The JavaScript file that manages the client-side logic, including sending and receiving document changes.

Functionality


Server Setup:

The server runs on port 3000 and serves the files in the public directory.
When a user connects, the server listens for documentChange events emitted by clients.



Document Editing:

The editor is a simple <textarea> where users can type text.
When text is inputted, an input event triggers a function that sends the current content of the textarea to the server via Socket.io.



Real-Time Updates:

The server receives document changes from one client and broadcasts them to all other connected clients, ensuring that everyone sees the updates in real-time.
When a client receives a document change event, it updates the textarea with the new content.



User Experience

Users should open the application in multiple tabs or browsers to experience real-time collaboration.
Changes made by one user will instantly appear on the screens of other users who are connected to the same instance of the application.

Limitations

The current implementation is basic and does not include features such as:

User authentication
History of changes
Conflict resolution (if two users edit at the same time)
Richer editing features (like formatting)



Conclusion
This collaborative editor serves as a foundational example of how to create real-time collaborative applications using JavaScript technologies. Developers can extend and build upon this base to create more sophisticated tools tailored to specific needs. If you have further questions or need clarification on any aspect, feel free to ask!

**output page : ![Screenshot 2025-01-09 234558](https://github.com/user-attachments/assets/8305ee20-8854-48f9-a9e7-c5abd5931ec5)**


