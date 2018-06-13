import React, {Component} from 'react';

import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

//Parent
class App extends Component {

  constructor() {
    super();
    this.state = {
      currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
        {
          id: 1,
          type: "incomingMessage",
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          id: 2,
          type: "incomingMessage",
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        },
        {
          id: 3,
          type: "incomingNotification",
          content: "Anonymous changed their name to nomnom",
        }
      ]
    };
    this.addMessage = this.addMessage.bind(this);
  }


  //send messages as strings
  // myWebSocket.onopen = function (event) {
  //   myWebSocket.send("Here's some text that the server is urgently awaiting!");
  // };

  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: this.state.messages.length + 1, type: "incomingMessage", username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);
    //websocket connection object
    this.myWebSocket = new WebSocket("ws:localhost:3001");


    console.log('Connected to server');
  }

  addMessage = (incomingMessage) => {
    let newMessageList = this.state.messages;
    newMessageList.push(incomingMessage);
    this.setState({messages: newMessageList});
  }


  render() {
    return (
     <div>
       <nav className="navbar"><a href="/" className="navbar-brand">Chatty</a></nav>
       <main className="messages">
          <MessageList messages={this.state.messages}/>
         {/*<div className="message">
           <span className="message-username">Anonymous1</span>
           <span className="message-content">I won't be impressed with technology until I can download food.</span>
         </div>*/}
         <div className="message system">
          Anonymous1 changed their name to nomnom.
         </div>
       </main>

       {/*footer*/}
       <ChatBar name={this.state.currentUser.name} addMessage={this.addMessage} />

       {/*<footer class="chatbar">
          <input class="chatbar-username" placeholder="Your Name (Optional)" />
          <input class="chatbar-message" placeholder="Type a message and hit ENTER" />
        </footer> */}

      </div>
    );
  }
}

export default App;

//You will have to store the socket
// connection object somewhere. One way to do this is to store the object
// as this.socket in the App component.
