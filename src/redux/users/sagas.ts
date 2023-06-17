import { AxiosError, AxiosResponse } from 'axios'
import { fetchUser } from '../../api/users'
import { call, delay, put, takeEvery } from 'redux-saga/effects'
import {
  fetchUsersFailure,
  fetchUsersLoading,
  fetchUsersSuccess,
} from './actions'
import { IUser } from './models'
import { FETCH_USERS_REQUEST } from '../constants'

function* handleFetchUsers({ payload }: { payload: number; type: string }) {
  try {
    yield put(fetchUsersLoading(true))
    yield delay(500)
    const response: AxiosResponse<IUser> = yield call(fetchUser, payload)
    yield put(fetchUsersSuccess({ userId: payload, data: response.data }))
  } catch (e) {
    const error = e as AxiosError
    yield put(fetchUsersFailure(error.message))
  }
}

export function* watchFetchUsers() {
  yield takeEvery(FETCH_USERS_REQUEST, handleFetchUsers)
}
