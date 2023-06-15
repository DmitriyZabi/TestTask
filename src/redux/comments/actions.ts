import {
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_LOADING,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
} from '../constants'
import {
  CommentsActions,
  IActionFetchCommentsSuccessPayload,
  IComment,
} from './models'

export const fetchCommentsRequest = (payload: string): CommentsActions => {
  return { type: FETCH_COMMENTS_REQUEST, payload }
}

export const fetchCommentsSuccess = (
  payload: IActionFetchCommentsSuccessPayload
): CommentsActions => {
  return { type: FETCH_COMMENTS_SUCCESS, payload }
}

export const fetchCommentsFailure = (payload: string): CommentsActions => {
  return { type: FETCH_COMMENTS_FAILURE, payload }
}

export const fetchCommentsLoading = (payload: boolean): CommentsActions => {
  return { type: FETCH_COMMENTS_LOADING, payload }
}
