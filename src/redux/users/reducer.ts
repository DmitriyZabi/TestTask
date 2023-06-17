import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_LOADING,
  FETCH_USERS_SUCCESS,
} from '../constants'
import { UsersActions, IUsersState } from './models'

const initialState: IUsersState = {
  data: null,
  error: null,
  isLoading: false,
}

export const usersReducer = (state = initialState, action: UsersActions) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      const newData = state.data === null ? {} : { ...state.data }
      newData[action.payload.userId] = action.payload.data
      return { ...state, data: newData, isLoading: false, error: null }
    case FETCH_USERS_FAILURE:
      return { error: action.payload, data: state.data, isLoading: false }
    case FETCH_USERS_LOADING:
      return { isLoading: true, data: state.data, error: null }

    default:
      return state
  }
}
