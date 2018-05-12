import { MAKE_GUESS, NEW_GAME } from '../actions/game'

export default (state = [], { type, guess } = {}) => {
  switch (type) {
    case MAKE_GUESS :
      return state.concat(guess)
    case NEW_GAME :
      return []
    default:
      return state
  }
}
