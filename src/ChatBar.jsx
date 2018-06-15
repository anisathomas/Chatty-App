import React, { Component } from 'react';

class ChatBar extends React.Component {
  //state:  {}
  handleKeyPress = (event) => {
    if (event.key == 'Enter') {
      this.props.sendMessage(
        {
          type: "incomingMessage",
          username: this.props.name,
          content: event.target.value
        }
      );
    }
  }

//changing the input value
  handleNameKeyPress = (event) => {
    console.log('EVENT', event.target.value);
    this.props.updateCurrentUser(event.target.value);
  }

//do later for when people change their name for the notification
  // changeName = (event) => {
  //   console.log('EVENT', event.target.value);
  //   if (event.key == 'Enter') {
  //     // Actually change the user
  //   }
  // }

 // put inside input bar onKeyPress={this.changeName}

  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name" value={this.props.name}
          onChange={this.handleNameKeyPress} />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={this.handleKeyPress}/>
      </footer>
    )
  }
}

export default ChatBar;






