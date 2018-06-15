import React, { Component } from 'react';

import Message from './Message.jsx';

class MessageList extends Component {

  render() {
    const messages = this.props.messages;
    const listItems = messages.map((message, i) => {
      if(message.type === "incomingMessage") {
        return (
          <li key={i}>
            <Message name={message.username} content={message.content}/>
          </li>
        );

      } else if (message.type === "incomingNotification") {
        return(
          <div class="notification">
            <span class="notification-content">{message.content}</span>
          </div>
        );

      } else {
        console.log("Error: message was not a incomingMessage or incomingNotification")
      }
    })


  return (
      <ul>{listItems}</ul>
    );
  }

}

export default MessageList;

// i is the index of each message in react and it is unique