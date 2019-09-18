import React from 'react';
import logo from './logo.svg';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <UserInput />
      <UserOutput />
      <UserOutput />
      <UserOutput />
    
      </header>
     
    </div>
  );
}

export default App;
