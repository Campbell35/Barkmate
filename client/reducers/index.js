import { combineReducers } from 'redux'

import human from './human'
import user from './user'
import likes from './likes'

export default combineReducers({
  human,
  user,
  likes
})
