import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { showGuess, wrongGuessCount, gameFinished } from '../lib/gameLogic'

class Word extends PureComponent {
  static propTypes = {
    hiddenWord: PropTypes.string.isRequired,
    lettersGuessed: PropTypes.string.isRequired,
    numberOfTries: PropTypes.number.isRequired
  }

  render() {
    return (
      <div className="gameStuff">
        <h2>{this.props.hiddenWord}</h2>
        <p>This many tries already newb: {this.props.numberOfTries}</p>
        <p>These letters you already used : {this.props.lettersGuessed}</p>
      </div>
    )
  }
}

const mapStateToProps = ({ selectedWord, lettersGuessed }) => {
  return {
    hiddenWord: showGuess(selectedWord, lettersGuessed),
    numberOfTries: wrongGuessCount(selectedWord, lettersGuessed),
    lettersGuessed: lettersGuessed.join(', '),
    gameFinished: gameFinished(selectedWord, lettersGuessed)
  }
}

export default connect(mapStateToProps)(Word)
