import { SET_LIKES, CLEAR_LIKES } from '../actions/likes'

const initial = []

export default function likes (state = initial, action) {
  switch (action.type) {
    case SET_LIKES:
      return action.likes

    case CLEAR_LIKES:
      return initial

    default:
      return state
  }
}
