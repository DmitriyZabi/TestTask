import {
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_LOADING,
  FETCH_COMMENTS_SUCCESS,
} from '../constants'
import { CommentsActions, ICommentsState } from './models'

const initialState: ICommentsState = {
  data: null,
  error: null,
  isLoading: false,
}

export const commentsReducer = (
  state = initialState,
  action: CommentsActions
) => {
  switch (action.type) {
    case FETCH_COMMENTS_SUCCESS:
      const newData = state.data === null ? {} : { ...state.data }
      newData[action.payload.postId] = action.payload.data
      return { ...state, data: newData, isLoading: false, error: null }
    case FETCH_COMMENTS_FAILURE:
      return { error: action.payload, data: state.data, isLoading: false }
    case FETCH_COMMENTS_LOADING:
      return { isLoading: true, data: state.data, error: null }

    default:
      return state
  }
}
