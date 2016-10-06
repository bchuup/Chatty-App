import React, {Component} from 'react';

class Nav extends Component {

  render() {
    console.log("Rendering <App/>");
    return (
      <nav>
        <h1>Chatty</h1>
        <h2> Number of chatters: {this.props.userCount} </h2>
      </nav>
    )
  }
}
export default Nav;