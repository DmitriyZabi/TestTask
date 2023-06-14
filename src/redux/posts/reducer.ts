import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_LOADING,
  FETCH_POSTS_SUCCESS,
} from '../constants'
import { IPostsState, PostsActions } from './models'

const initialState: IPostsState = {
  data: null,
  error: null,
  isLoading: false,
}

export const postsReducer = (state = initialState, action: PostsActions) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return { ...initialState, data: action.payload }
    case FETCH_POSTS_FAILURE:
      return { ...initialState, error: action.payload }
    case FETCH_POSTS_LOADING:
      return { ...initialState, isLoading: true }

    default:
      return state
  }
}
