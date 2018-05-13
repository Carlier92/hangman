import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { lettersGuessed } from '../actions/game'
import { wrongGuessLimit } from '../lib/gameLogic'

class LettersToClick extends PureComponent {
    static propTypes = {
        lettersGuessed: PropTypes.func.isRequired
    }

    handleOnClick = () => {
        this.props.lettersGuessed()
    }

    render() {
        const alphabet = Array.from({length: 26}, (_, i) => String.fromCharCode(97 + i))

        return (
            <div>
                {alphabet.map( letter => {
                    return <button key={letter} disabled={this.props.lost} onClick={() => {this.props.lettersGuessed(letter)}}>{letter}</button>
                })}
            </div>
        )
    }
}

const mapStateToProps = ({ selectedWord, lettersGuessed }) => {
    return {
        lost: wrongGuessLimit(selectedWord, lettersGuessed)
    }
}

export default connect(mapStateToProps, { lettersGuessed })(LettersToClick)
