import { all, fork } from 'redux-saga/effects'
import { watchFetchPosts } from './posts/sagas'
import { watchFetchComments } from './comments/sagas'

export function* rootSaga() {
  yield all([fork(watchFetchPosts), fork(watchFetchComments)])
}
