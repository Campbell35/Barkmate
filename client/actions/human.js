export const SET_HUMAN = 'SET_HUMAN'
export const CLEAR_HUMAN = 'CLEAR_HUMAN'

export function setHuman (human) {
  return {
    type: SET_HUMAN,
    human
  }
}

export function clearHuman () {
  return {
    type: CLEAR_HUMAN
  }
}
