import {
  REFRESH_ACCESS_TOKEN,
  UPDATE_USER,
  USER_CHECKOUT_REQUEST,
  USER_REQUEST_FAILED,
} from '../actions/auth'

const initialState = {
  accessToken: null,
  user: null,
  pendingRequest: false,
  requestFailed: false,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REFRESH_ACCESS_TOKEN: {
      return {
        ...state,
        accessToken: action.accessToken,
        pendingRequest: false,
        requestFailed: false,
      }
    }
    case UPDATE_USER: {
      return {
        ...state,
        user: action.user,
        pendingRequest: false,
        requestFailed: false,
      }
    }
    case USER_CHECKOUT_REQUEST: {
      return {
        ...state,
        pendingRequest: true,
        requestFailed: false,
      }
    }
    case USER_REQUEST_FAILED: {
      return {
        ...state,
        pendingRequest: false,
        requestFailed: true,
      }
    }
    default: {
      return state
    }
  }
}
