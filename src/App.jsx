import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Anonymous"},
      messages: []
    }
  }

  handleServerMessage = (msgEvent) => {
    let msg = msgEvent.data
    let servermessage = JSON.parse(msg)
    this.state.messages.push(servermessage)
    this.setState(this.state)
  }

  componentDidMount = () => {
    this.socket = new WebSocket("ws://192.168.33.10:4000");
    this.socket.onopen = () => {
      // this.socket.send("Here's some text that the server is urgently awaiting!");
      this.socket.onmessage = this.handleServerMessage
    };
  }

  msgEnter = (event) => {
    // let newMsg = event.target.value
    let packageMsg = {username: this.state.currentUser.name, content: event.target.value, type: "incomingMessage"}
    this.socket.send(JSON.stringify(packageMsg))
  }

  userNameEnter = (event) => {
    let oldName = this.state.currentUser.name
    let newName = event.target.value
    let userChange = {username: oldName, nameChangeText: `${oldName} changed their name to ${newName}` , type: "nameChange"}
    this.socket.send(JSON.stringify(userChange))
    this.state.currentUser.name = newName
    this.setState(this.state)
  }

  render() {
    console.log("Rendering <App/>");
    return (
      <div>
        <div>
          <h1>Hello React :)</h1>
        </div>
        <MessageList
          msglist= {this.state.messages}
        />
        <ChatBar
          initialName={this.state.currentUser.name}
          handleMsgEnter={this.msgEnter.bind(this)}
          userNameEnter={this.userNameEnter.bind(this)}
        />
      </div>
    )
  }
}
export default App;


