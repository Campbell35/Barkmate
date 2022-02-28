import { combineReducers } from 'redux'

import human from './human'
import user from './user'
import likes from './likes'
import matches from './matches'

export default combineReducers({
  human,
  user,
  likes,
  matches
})
