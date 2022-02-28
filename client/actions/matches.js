import { getMatches as apiGetMatches } from '../api.js'

export const SET_MATCHES = 'SET_MATCHES'
export const CLEAR_MATCHES = 'CLEAR_MATCHES'

export function setMatches (matches) {
  return {
    type: SET_MATCHES,
    matches
  }
}

export function clearMatches () {
  return {
    type: CLEAR_MATCHES
  }
}

export function getMatches () {
  return async dispatch => {
    const matches = await apiGetMatches()

    dispatch(setMatches(matches))
  }
}
