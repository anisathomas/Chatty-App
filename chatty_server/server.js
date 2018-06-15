// server.js

const express = require('express');
const SocketServer = require('ws');
const uuidv4 = require('uuid/v4');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer.Server({ server });

//Broadcast incoming messages to all.
wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === SocketServer.OPEN) {
      client.send(data);
    }
  });
};

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  console.log('Client connected');
  // console.log(wss.clients.size);

    wss.broadcast(JSON.stringify({type: "numberClients", size: wss.clients.size}));

  //server receives the message from the client
  ws.on('message', function incoming(data) {
    const message = JSON.parse(data)
    message.id = uuidv4();


    if(message.type === 'postMessage'){
      message.type = 'incomingMessage';

      console.log('id', message.id, 'user', message.username, 'said', message.content);
      //calling the broadcast to all function
      wss.broadcast(JSON.stringify(message))

    } else if (message.type === 'postNotification'){
     //broadcast notifaction
      message.type = 'incomingNotification';
      console.log(message.content);
      wss.broadcast(JSON.stringify(message))
    } else {
      console.log("Unable to determine message type");
    }
  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    wss.broadcast(JSON.stringify({type: "numberClients", size: wss.clients.size}));
    console.log('Client disconnected');
  })



});