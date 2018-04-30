import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button';



class App extends Component {
  appHandleClick = () => console.log("you have clicked the button inside the App");

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button
          className={'btn'}
          handleClick={this.appHandleClick}
          disabled={false}
          name={`appButton`}
          value={`text`}
        >
          Button One
        </Button>
        <Button
          className={'btn-red'}
          handleClick={this.appHandleClick}
          disabled={true}
          name={`appButton`}
          value={`text`}
        > 
          Button Two
        </Button>
      </div>
    );
  }
}

export default App;
