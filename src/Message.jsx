import React, { Component } from 'react';


//need data from messages
class Message extends Component {
  render() {
    return (
      <div className="message">
       <span className="message-username">{this.props.name}</span>
       <span className="message-content">{this.props.content}</span>
      </div>
    )
  }

}

export default Message;