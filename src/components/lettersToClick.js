import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { lettersGuessed } from '../actions/game'
import { wrongGuessLimit } from '../lib/gameLogic'
import './lettersToClick.css';


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
            <div className='allBtns'>
                {alphabet.map( letter => {
                    let used = this.props.usedLetters.includes(letter)
                    return <button className='lettersBtn' key={letter} disabled={this.props.lost || used} onClick={() => {this.props.lettersGuessed(letter)}}>{letter}</button>
                })}
            </div>
        )
    }
}

const mapStateToProps = ({ selectedWord, lettersGuessed }) => {
    return {
        usedLetters: lettersGuessed,
        lost: wrongGuessLimit(selectedWord, lettersGuessed)
    }
}

export default connect(mapStateToProps, { lettersGuessed })(LettersToClick)
