import React from 'react';
import CommitView from './CommitView';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <CommitView/>
    </div>
  );
}

export default App;
