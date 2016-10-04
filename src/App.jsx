import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

const App = React.createClass({
  render: function() {
    console.log("Rendering <App/>");
    return (
      <div>
        <div>
          <h1>Hello React :)</h1>
        </div>
        <MessageList />
        <ChatBar />
      </div>
    )
  }
})
export default App;


