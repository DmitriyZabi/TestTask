import { AxiosError, AxiosResponse } from 'axios'
import { fetchPosts } from '../../api/posts'
import { call, delay, put, takeEvery } from 'redux-saga/effects'
import { IPost } from './models'
import {
  fetchPostsFailure,
  fetchPostsLoading,
  fetchPostsSuccess,
} from './actions'
import { FETCH_POSTS_REQUEST } from '../constants'

function* handleFetchPosts({
  payload,
}: {
  payload: string | null
  type: string
}) {
  try {
    yield put(fetchPostsLoading(true))
    yield delay(500)
    const response: AxiosResponse<IPost[]> = yield call(fetchPosts, payload)
    yield put(fetchPostsSuccess(response.data))
  } catch (e) {
    const error = e as AxiosError
    yield put(fetchPostsFailure(error.message))
  }
}

export function* watchFetchPosts() {
  yield takeEvery(FETCH_POSTS_REQUEST, handleFetchPosts)
}
