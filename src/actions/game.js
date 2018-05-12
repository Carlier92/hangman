export const MAKE_GUESS = 'MAKE_GUESS'
export const NEW_GAME = 'NEW_GAME'

export const lettersGuessed = (guess) => {
  return {
    type: MAKE_GUESS,
    payload: guess
  }
}

export const newGameStart = (RandomWord) => {
  return {
    type: NEW_GAME,
    payload: RandomWord
  }
}
