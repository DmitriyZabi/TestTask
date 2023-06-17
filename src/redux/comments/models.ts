import {
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_LOADING,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
} from '../constants'

export interface IComment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export interface ICommentsState {
  data: { [key: string]: IComment[] } | null
  error: string | null
  isLoading: boolean
}

export interface IActionFetchCommentsRequest {
  type: typeof FETCH_COMMENTS_REQUEST
  payload: string
}

export interface IActionFetchCommentsSuccessPayload {
  postId: string
  data: IComment[]
}

export interface IActionFetchCommentsSuccess {
  type: typeof FETCH_COMMENTS_SUCCESS
  payload: IActionFetchCommentsSuccessPayload
}

export interface IActionFetchCommentsFailure {
  type: typeof FETCH_COMMENTS_FAILURE
  payload: string
}

export interface IActionFetchCommentsLoading {
  type: typeof FETCH_COMMENTS_LOADING
  payload: boolean
}

export type CommentsActions =
  | IActionFetchCommentsRequest
  | IActionFetchCommentsSuccess
  | IActionFetchCommentsFailure
  | IActionFetchCommentsLoading
