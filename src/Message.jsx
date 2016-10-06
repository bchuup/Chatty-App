import React, {Component} from 'react';

class Message extends Component{
  render() {
    console.log("Rendering <App/>");
    switch (this.props.type){

      case "incomingMessage":
        return (
          <div>
            <div className="message">
              <span className="username">{this.props.username}</span>
              <span className="content">{this.props.content}</span>
            </div>
          </div>
        )
      break;

      case "nameChange":
        return (
          <div>
            <div className="message">
              <span className="content">{this.props.content}</span>
            </div>
          </div>
        )
      break;
    }
  }
}
export default Message;