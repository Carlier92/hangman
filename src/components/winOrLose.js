import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { isWinner, wrongGuessLimit } from '../lib/gameLogic'

class WinOrLose extends PureComponent {
      static propTypes = {
        selectedWord: PropTypes.string.isRequired,
        victor: PropTypes.bool.isRequired,
        moron: PropTypes.bool.isRequired
      }

    seeWinOrLose = () => {
        if (this.props.victor) {
            return <p>Whoop!</p>
        }
        else if (this.props.moron) {
            return <p>This is the word you didnt guess: {this.props.selectedWord}.</p>
        }
    }

    render() {
        console.log(this.props);
        return (
            <div className="winLose">
                <h2>{this.seeWinOrLose()}</h2>
            </div>
        )
    }
}

const mapStateToProps = ({ selectedWord, lettersGuessed }) => {
    return {
        selectedWord,
        victor: isWinner(selectedWord, lettersGuessed),
        moron: wrongGuessLimit(selectedWord, lettersGuessed)
    }
}

export default connect(mapStateToProps)(WinOrLose)




// import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { isWinner, wrongGuessLimit } from '../lib/gameLogic'
//
// class WinOrLose extends PureComponent {
//   static propTypes = {
//     selectedWord: PropTypes.string.isRequired,
//     victor: PropTypes.bool.isRequired,
//     moron: PropTypes.bool.isRequired
//   }
//
//   seeWinOrLose = () => {
//     if (this.props.victor) return <p>Whoop!</p>
//     if (this.props.moron) return <p>This is the word you didnt guess: {this.props.selectedWord}.</p>
//   }
//
//   render() {
//       return (
//           <div class='WinLose'>
//             <h2>{this.seeWinOrLose()}</h2>
//           <div/>
//       )
//     }
//   }
//
// const mapStateToProps = ({ selectedWord, lettersGuessed }) => {
//   return {
//     selectedWord,
//     victor: isWinner(selectedWord, lettersGuessed),
//     moron: wrongGuessLimit(selectedWord, lettersGuessed)
//   }
// }
//
// export default connect(mapStateToProps)(WinOrLose)
