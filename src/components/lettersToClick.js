import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { lettersGuessed } from '../actions/game'


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
                    return <button key={letter} onClick={() => {this.props.lettersGuessed(letter)}}>{letter}</button>
                })}
            </div>
        )
    }
}

export default connect(null, { lettersGuessed })(LettersToClick)
