import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_LOADING,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
} from '../constants'

export interface IPost {
  userId: number
  id: number
  title: string
  body: string
}

export interface IPostsState {
  data: IPost[] | null
  error: string | null
  isLoading: boolean
}

export interface IActionFetchPostsRequest {
  type: typeof FETCH_POSTS_REQUEST
}

export interface IActionFetchPostsSuccess {
  type: typeof FETCH_POSTS_SUCCESS
  payload: IPost[]
}

export interface IActionFetchPostsFailure {
  type: typeof FETCH_POSTS_FAILURE
  payload: string
}

export interface IActionFetchPostsLoading {
  type: typeof FETCH_POSTS_LOADING
  payload: boolean
}

export type PostsActions =
  | IActionFetchPostsRequest
  | IActionFetchPostsSuccess
  | IActionFetchPostsFailure
  | IActionFetchPostsLoading
