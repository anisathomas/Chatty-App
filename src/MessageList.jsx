import React, { Component } from 'react';

import Message from './Message.jsx';

class MessageList extends Component {

  render() {
    const messages = this.props.messages;
    const listItems = messages.filter(message => message.type === "incomingMessage" ).map((message) =>
      <li key={message.id}>
        <Message name={message.username} content={message.content}/>
      </li>);

    return (
      <ul>{listItems}</ul>
    )
  }

}

export default MessageList;
