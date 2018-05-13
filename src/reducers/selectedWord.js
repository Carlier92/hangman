import {NEW_GAME} from '../actions/game'
import { randomWord } from '../lib/gameLogic'

export default (state = randomWord(), { type } = {}) => {
    switch (type) {
        case NEW_GAME :
            return randomWord()
        default:
            return state
    }
}
