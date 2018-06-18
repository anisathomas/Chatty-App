import React, { Component } from 'react';

class ChatBar extends React.Component {
  //state:  {}
  handleKeyPress = (event) => {
    if (event.key == 'Enter') {
      this.props.sendMessage(
        {
          type: "postMessage",
          username: this.props.name,
          content: event.target.value
        }
      );
      this.sendThru();
    }
  }

//when name input changes then trigger updateCurrentUser and sendMessage for notifiaction
  handleNameKeyPress = (event) => {
    if (event.target.value === ""){
      this.props.updateCurrentUser("Anonymous");
      this.props.sendMessage(
        {
          type: "postNotification",
          content: `${this.props.name} has changed their name to Anonymous.`
        }
      );
    } else {
      this.props.updateCurrentUser(event.target.value);
      this.props.sendMessage(
        {
          type: "postNotification",
          content: `${this.props.name} has changed their name to ${event.target.value}.`
        }
      );
    }
  }

  sendThru() {
    this.inputMessage.value = "";
  }

  render() {
    return (
      <div>
        <footer className="chatbar">
          <input className="chatbar-username" placeholder="Your Name" defaultValue={this.props.name}
            onBlur={this.handleNameKeyPress} />
          <input className="chatbar-message" placeholder="Type a message and hit ENTER"
            onKeyPress={this.handleKeyPress} ref={ChatBar => this.inputMessage = ChatBar} />
        </footer>
      </div>
    )
  }
}

export default ChatBar;



