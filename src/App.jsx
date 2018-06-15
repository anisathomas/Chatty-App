import React, {Component} from 'react';

import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

//Parent Component
class App extends Component {

  constructor() {
    super();
    this.state = {
      currentUser: {name: ""},
      messages: [] // messages coming from the server will be stored here as they arrive
    };
    this.addMessage = this.addMessage.bind(this);
  }


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

    //Receiving messages from the server
    this.myWebSocket.onmessage = (event) => {
      console.log(event.data)
      var msg = JSON.parse(event.data);
       this.addMessage(msg);
    }
  }

  addMessage = (incomingMessage) => {
    let newMessageList = this.state.messages;
    newMessageList.push(incomingMessage);
    this.setState({messages: newMessageList});
  }

  //sends the message that the user types in to server
  sendMessage = (message) => {
    // Send the msg object as a JSON-formatted string.
    this.myWebSocket.send(JSON.stringify(message));
  }

  //func below takes in a newUser ex) "Bob"
  updateCurrentUser = (name) => {
    let newCurrentUser = this.state.currentUser;
    newCurrentUser.name = name
    this.setState({currentUser: newCurrentUser});
  }

  render() {
    return (
     <div>
       <nav className="navbar"><a href="/" className="navbar-brand">Chatty</a></nav>
       <main className="messages">
          <MessageList messages={this.state.messages}/>
         <div className="message system">
          Anonymous1 changed their name to nomnom.
         </div>
       </main>

       <ChatBar name={this.state.currentUser.name} sendMessage={this.sendMessage}
       updateCurrentUser={this.updateCurrentUser} />

      </div>
    );
  }
}

export default App;


//need to use the message uuid for the key inside of messagelist component


