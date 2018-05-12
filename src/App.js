import React, { Component } from 'react';
import './App.css';
import StartNewGameBtn from './components/StartNewGameBtn'
import Word from './components/wrongGuess'
import LettersToClick from './components/lettersToClick'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Welcome to the death of hangman</h1>
          <Word />
          <LettersToClick />
           <StartNewGameBtn />
      </div>
    )
  }
}

export default App;
