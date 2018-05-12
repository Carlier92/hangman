import React, { Component } from 'react';
import './App.css';
import StartNewGameBtn from './components/StartNewGameBtn'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Welcome to the death of hangman</h1>
           <StartNewGameBtn />
      </div>
    )
  }
}

export default App;
