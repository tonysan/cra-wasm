import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/App.css';

class App extends Component {
  wasmFn = () => {
    const randomNumber = window._generateRandom();
    console.log(`onClickGenerateRandom: ${randomNumber}`);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" onClick={this.wasmFn}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload!
        </p>
      </div>
    );
  }
}

export default App;
