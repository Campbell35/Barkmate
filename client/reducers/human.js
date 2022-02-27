import { SET_HUMAN, CLEAR_HUMAN } from '../actions/human'

const emptyUser = {
  id: null,
  auth0Id: '',
  email: '',
  token: '',
  name: '',
  post_code: ''
}

export default function human (state = emptyUser, action) {
  switch (action.type) {
    case SET_HUMAN:
      return action.human

    case CLEAR_HUMAN:
      return emptyUser

    default:
      return state
  }
}
