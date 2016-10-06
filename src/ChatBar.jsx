import React, {Component} from 'react';

let boldstyle = {font: 'bold'}

class ChatBar extends Component {


  handleOnKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.props.handleMsgEnter(event);
      this.refs.messagebox.value = "";
    }
  }

  handleNameChange = (event) => {

    if (event.key === 'Enter' && this.props.initialName !== this.refs.namebox.value) {
      this.props.userNameEnter(event);
    }
  }

  render() {
    console.log("Rendering <App/>");
    return (
      <footer>
        <input id="username" ref="namebox" type="text" onKeyUp = {this.handleNameChange} />
        <input id="new-message" ref="messagebox" type="text" onKeyPress = {this.handleOnKeyPress} />
      </footer>
    )
  }
}
export default ChatBar;