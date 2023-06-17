import { combineReducers } from 'redux'
import { postsReducer } from './posts/reducer'
import { commentsReducer } from './comments/reducer'
import { usersReducer } from './users/reducer'

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  users: usersReducer,
})

export default rootReducer
