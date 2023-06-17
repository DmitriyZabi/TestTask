import { AxiosError, AxiosResponse } from 'axios'
import { fetchComments } from '../../api/comments'
import { call, delay, put, takeEvery } from 'redux-saga/effects'
import {
  fetchCommentsFailure,
  fetchCommentsLoading,
  fetchCommentsSuccess,
} from './actions'
import { IComment } from './models'
import { FETCH_COMMENTS_REQUEST } from '../constants'

function* handleFetchComments({ payload }: { payload: string; type: string }) {
  try {
    yield put(fetchCommentsLoading(true))
    yield delay(500)
    const response: AxiosResponse<IComment[]> = yield call(
      fetchComments,
      payload
    )
    yield put(fetchCommentsSuccess({ postId: payload, data: response.data }))
  } catch (e) {
    const error = e as AxiosError
    yield put(fetchCommentsFailure(error.message))
  }
}

export function* watchFetchComments() {
  yield takeEvery(FETCH_COMMENTS_REQUEST, handleFetchComments)
}
