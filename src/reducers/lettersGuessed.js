import { MAKE_GUESS, NEW_GAME } from '../actions/game'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case MAKE_GUESS :
      return state.concat(payload)
    case NEW_GAME :
      return []
    default:
      return state
  }
}
