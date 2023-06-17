import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_LOADING,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
} from '../constants'
import { IPost, PostsActions } from './models'

export const fetchPostsRequest = (payload: string | null): PostsActions => {
  return { type: FETCH_POSTS_REQUEST, payload }
}

export const fetchPostsSuccess = (payload: IPost[]): PostsActions => {
  return { type: FETCH_POSTS_SUCCESS, payload }
}

export const fetchPostsFailure = (payload: string): PostsActions => {
  return { type: FETCH_POSTS_FAILURE, payload }
}

export const fetchPostsLoading = (payload: boolean): PostsActions => {
  return { type: FETCH_POSTS_LOADING, payload }
}
