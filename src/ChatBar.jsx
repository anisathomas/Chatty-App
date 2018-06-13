import React, { Component } from 'react';

class ChatBar extends React.Component {
  makeId() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 4; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  handleKeyPress = (event) => {
    if (event.key == 'Enter') {
      this.props.addMessage(
        {
          id: this.makeId(),
          type: "incomingMessage",
          username: this.props.name,
          content: event.target.value
        }
      );
    }
  }

  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name" defaultValue={this.props.name} />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={this.handleKeyPress}/>
      </footer>
    )
  }
}


//use index when render instead of makeId
export default ChatBar;

//should change makeId to increment consecutively after 4 instead of being randomly generated





