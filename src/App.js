// import React from 'react';
import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';




class App extends Component {
  state = {
    username: 'superjames'
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <UserInput />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="James" />
    
      </header>
     
    </div>
  );
}
}

export default App;
