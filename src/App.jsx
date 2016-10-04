import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Bob"},
      messages: [
        {id: 1,
         username: "Bob",
         content: "Has anyone seen my marbles?"},
        {id: 2,
         username: "Anonymous",
         content: "No, I think you lost them. You lost your marbles Bob, you lost them for good"}
      ],
      inputText: ""
    }
    // this.handleMsgEnter = this.handleMsgEnter.bind(this);
  }

  msgEnter(event) {
    let newMsg = event.target.value
    this.state.messages.push({id: this.state.messages.length + 1 , username: this.state.currentUser.name, content: newMsg});
    this.setState(this.state);
  }

  componentDidMount() {
  console.log("componentDidMount <App />");
  setTimeout(() => {
    console.log("Simulating incoming message");
    // Add a new message to the list of messages in the data store
    this.state.messages.push({id: 3, username: "Michelle", content: "Hello there!"});
    // Update the state of the app component. This will call render()
    this.setState(this.state)
  }, 3000);
}
  render() {
    console.log("Rendering <App/>");
    return (
      <div>
        <div>
          <h1>Hello React :)</h1>
        </div>
        <MessageList msglist= {this.state.messages}/>
        <ChatBar
          currentuser={this.state.currentUser.name}
          handleMsgEnter={this.msgEnter.bind(this)}
        />
      </div>
    )
  }
}
export default App;


