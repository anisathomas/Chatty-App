import React, {Component} from 'react';

import ChatBar from './ChatBar.jsx';
// import MessageList from './MessageList';


//Parent
class App extends Component {

  constructor() {
    super();
    this.state = {
      currentUser: {name: "AnisaT"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
        {
        type: "incomingMessage",
        username: "Bob",
        content: "Has anyone seen my marbles?",
        },
        {
        type: "incomingMessage",
        username: "Anonymous",
        content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        },
        {
        type: "incomingNotification",
        content: "Anonymous changed their name to nomnom",
        }
      ]
    };
  }

  render() {
    return (
     <div>
       <nav className="navbar"><a href="/" className="navbar-brand">Chatty</a></nav>
       <main className="messages">
         <div className="message">
           <span className="message-username">Anonymous1</span>
           <span className="message-content">I won't be impressed with technology until I can download food.</span>
         </div>
         <div className="message system">
          Anonymous1 changed their name to nomnom.
         </div>
       </main>

       {/*footer*/}
       <ChatBar name={this.state.currentUser.name}/>
       {/*<footer class="chatbar">
          <input class="chatbar-username" placeholder="Your Name (Optional)" />
          <input class="chatbar-message" placeholder="Type a message and hit ENTER" />
        </footer> */}
      </div>
    );
  }
}

export default App;
