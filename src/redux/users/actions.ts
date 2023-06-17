import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_LOADING,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from '../constants'
import { UsersActions, IActionFetchUsersSuccessPayload } from './models'

export const fetchUsersRequest = (payload: string): UsersActions => {
  return { type: FETCH_USERS_REQUEST, payload }
}

export const fetchUsersSuccess = (
  payload: IActionFetchUsersSuccessPayload
): UsersActions => {
  return { type: FETCH_USERS_SUCCESS, payload }
}

export const fetchUsersFailure = (payload: string): UsersActions => {
  return { type: FETCH_USERS_FAILURE, payload }
}

export const fetchUsersLoading = (payload: boolean): UsersActions => {
  return { type: FETCH_USERS_LOADING, payload }
}
