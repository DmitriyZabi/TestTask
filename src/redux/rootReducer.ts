import { combineReducers } from 'redux'
import { postsReducer } from './posts/reducer'
import { commentsReducer } from './comments/reducer'

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
})

export default rootReducer
