import React, { Component } from 'react';
import CommitView from './CommitView';
import logo from './logo.svg';
import './App.css';

const state = [
    {
        id: "1",
        description: "pool"
    },{
        id: "2",
        description: "table"
    }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CommitView commits={state}/>
      </div>
    );
  }
}

export default App;
