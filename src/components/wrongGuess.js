import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { showGuess } from '../lib/gameLogic'

class Word extends PureComponent {
  static propTypes = {
    hiddenWord: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className="gameStuff">
        <h2>{this.props.hiddenWord}</h2>
      </div>
    )
  }
}

const mapStateToProps = ({ selectedWord, lettersGuessed }) => {
  return {
    hiddenWord: showGuess(selectedWord, lettersGuessed),
  }
}

export default connect(mapStateToProps)(Word)
