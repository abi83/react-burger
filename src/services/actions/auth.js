import {
  fetchRefreshAccessToken,
  fetchRegister,
  fetchLogin,
  fetchUserInfo,
  fetchExit,
} from '../api'

export const REFRESH_ACCESS_TOKEN = 'REFRESH_ACCESS_TOKEN'
export const UPDATE_USER = 'UPDATE_USER'
export const USER_CHECKOUT_REQUEST = 'USER_CHECKOUT_REQUEST'
export const USER_REQUEST_FAILED = 'USER_REQUEST_FAILED'

export const refreshAccessToken = (refreshToken) => {
  return function (dispatch) {
    dispatch({ type: USER_CHECKOUT_REQUEST })
    fetchRefreshAccessToken(refreshToken)
      .then((res) => {
        window.localStorage.setItem('refreshToken', res.refreshToken)
        dispatch({ type: REFRESH_ACCESS_TOKEN, accessToken: res.accessToken })
      })
      .catch(() => {
        dispatch({ type: USER_REQUEST_FAILED })
        window.localStorage.removeItem('refreshToken')
      })
  }
}

export const getUserInfoAction = (accessToken) => {
  return function (dispatch) {
    dispatch({ type: USER_CHECKOUT_REQUEST })
    fetchUserInfo(accessToken)
      .then((res) => {
        dispatch({ type: UPDATE_USER, user: res.user })
      })
      .catch(() => {
        dispatch({ type: USER_REQUEST_FAILED })
        window.localStorage.removeItem('refreshToken')
      })
  }
}

export const exitUserAction = (refreshToken) => {
  return function (dispatch) {
    dispatch({ type: USER_CHECKOUT_REQUEST })
    fetchExit(refreshToken)
      .then(() => {
        dispatch({ type: REFRESH_ACCESS_TOKEN, accessToken: null })
        dispatch({ type: UPDATE_USER, user: null })
      })
      .catch(() => {
        dispatch({ type: USER_REQUEST_FAILED })
      })
  }
}

export const registerAction = ({ name, email, password }) => {
  return function (dispatch) {
    dispatch({ type: USER_CHECKOUT_REQUEST })
    fetchRegister(name, email, password)
      .then((res) => {
        window.localStorage.setItem('refreshToken', res.refreshToken)
        dispatch({ type: UPDATE_USER, user: res.user })
        dispatch({ type: REFRESH_ACCESS_TOKEN, accessToken: res.accessToken })
      })
      .catch(() => dispatch({ type: USER_REQUEST_FAILED }))
  }
}

export const loginAction = (email, password) => {
  return function (dispatch) {
    dispatch({ type: USER_CHECKOUT_REQUEST })
    fetchLogin(email, password)
      .then((res) => {
        window.localStorage.setItem('refreshToken', res.refreshToken)
        dispatch({ type: UPDATE_USER, user: res.user })
        dispatch({ type: REFRESH_ACCESS_TOKEN, accessToken: res.accessToken })
      })
      .catch(() => dispatch({ type: USER_REQUEST_FAILED }))
  }
}
