import { SET_MATCHES, CLEAR_MATCHES } from '../actions/matches'

const initial = []

export default function matches (state = initial, action) {
  switch (action.type) {
    case SET_MATCHES:
      return action.matches

    case CLEAR_MATCHES:
      return initial

    default:
      return state
  }
}
