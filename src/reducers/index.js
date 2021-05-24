import { combineReducers } from 'redux'
import home from './home'
import posts from './posts'
import newpost from './newpost'
import detail from './detail'
import loading from './loading'

export default combineReducers({
  home,
  posts,
  newpost,
  detail,
  loading
})
