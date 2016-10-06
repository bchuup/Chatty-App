import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    console.log("Rendering <App/>");
    return (
      <div id="message-list" nameChangeText = {this.props.nameChangeNotification}>
      {
        this.props.msglist.map((objmsg) => (
            <Message
              key = {objmsg.id}
              username = {objmsg.username}
              content = {objmsg.content}
              nameChangeText = {objmsg.nameChangeText}
              type = {objmsg.type}
            />
        ))
      }
      </div>
    )
  }
}
export default MessageList;