import React, { Component } from 'react';

import Message from './Message.jsx';

class MessageList extends Component {

  render() {
    const messages = this.props.messages;
    const listItems = messages.filter(message => message.type === "incomingMessage" ).map((message, i) =>
      <li key={i}>
        <Message name={message.username} content={message.content}/>
      </li>);

    return (
      <ul>{listItems}</ul>
    )
  }

}

export default MessageList;




// i is the index of each message in react and it is unique