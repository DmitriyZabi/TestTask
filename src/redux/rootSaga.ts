import { all, fork } from 'redux-saga/effects'
import { watchFetchPosts } from './posts/sagas'

export function* rootSaga() {
  yield all([fork(watchFetchPosts)])
}
