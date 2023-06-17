import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_LOADING,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from '../constants'

export interface IUser {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: { lat: string; lng: string }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export interface IUsersState {
  data: { [key: string]: IUser } | null
  error: string | null
  isLoading: boolean
}

export interface IActionFetchUsersRequest {
  type: typeof FETCH_USERS_REQUEST
  payload: string
}

export interface IActionFetchUsersSuccessPayload {
  userId: number
  data: IUser
}

export interface IActionFetchUsersSuccess {
  type: typeof FETCH_USERS_SUCCESS
  payload: IActionFetchUsersSuccessPayload
}

export interface IActionFetchUsersFailure {
  type: typeof FETCH_USERS_FAILURE
  payload: string
}

export interface IActionFetchUsersLoading {
  type: typeof FETCH_USERS_LOADING
  payload: boolean
}

export type UsersActions =
  | IActionFetchUsersRequest
  | IActionFetchUsersSuccess
  | IActionFetchUsersFailure
  | IActionFetchUsersLoading
