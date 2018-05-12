import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { newGameStart } from '../actions/game'

class StartNewGameBtn extends PureComponent {
  static propTypes = {
    newGameStart: PropTypes.func.isRequired
  }

  handleOnClick = () => {
    this.props.newGameStart()
  }

  render() {
    return (
      <button className="btn" onClick={this.handleOnClick}>New Game</button>
    )
  }
}

export default connect(null, { newGameStart })(StartNewGameBtn)
