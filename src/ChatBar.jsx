import React, {Component} from 'react';

class ChatBar extends Component {

  handleOnKeyPress = (event) => {
    if (event.key == 'Enter') {
      this.props.handleMsgEnter(event);
      this.refs.messagebox.value = "";
    }
  }

  render() {
    console.log("Rendering <App/>");
    return (
      <footer>
        <input id="username" type="text" value = {this.props.currentuser} />
        <input id="new-message" ref="messagebox" type="text" onKeyPress={this.handleOnKeyPress} />
      </footer>
    )
  }
}
export default ChatBar;