import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Nav from './Nav.jsx';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Anonymous"},
      messages: [],
      userCount: 0
    }
  }

  handleServerMessage = (msgEvent) => {
    let msg = msgEvent.data
    let servermessage = JSON.parse(msg)
    if (servermessage.count){
      this.state.userCount = servermessage.count
      this.setState(this.state)
    } else {
    this.state.messages.push(servermessage)
    this.setState(this.state)
    }
  }

  componentDidMount = () => {
    this.socket = new WebSocket("ws://192.168.33.10:4000");
    this.socket.onopen = () => {
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
    let userChange = {username: oldName, content: `${oldName} changed their name to ${newName}` , type: "nameChange"}
    this.state.currentUser.name = newName
    this.setState(this.state)
    this.socket.send(JSON.stringify(userChange))
  }

  render() {
    console.log("Rendering <App/>");
    return (
      <div>
        <Nav userCount= {this.state.userCount} />
        <MessageList msglist= {this.state.messages}/>
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


