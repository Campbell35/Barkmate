export const SET_LIKES = 'SET_LIKES'
export const CLEAR_LIKES = 'CLEAR_LIKES'

export function setLikes (likes) {
  return {
    type: SET_LIKES,
    likes
  }
}

export function clearLikes () {
  return {
    type: CLEAR_LIKES
  }
}
