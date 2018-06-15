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
    }
  }

//when name input changes then trigger updateCurrentUser and sendMessage for notifiaction
  handleNameKeyPress = (event) => {
    if (event.key == "Enter") {
      this.props.updateCurrentUser(event.target.value);
      console.log('EVENT', event.target.value);
      this.props.sendMessage(
        {
          type: "postNotification",
          content: `${this.props.name} has changed their name to ${event.target.value}.`
        }
      );
    } else {
      this.props.updateCurrentUser(event.target.value);
    }

  }

  render() {
    return (
      <div>
        <footer className="chatbar">
          <input className="chatbar-username" placeholder="Your Name" value={this.props.name}
            onKeyPress={this.handleNameKeyPress} />
          <input className="chatbar-message" placeholder="Type a message and hit ENTER"
            onKeyPress={this.handleKeyPress} />
        </footer>
      </div>
    )
  }
}

export default ChatBar;




