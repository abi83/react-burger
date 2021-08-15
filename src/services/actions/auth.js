import {fetchRefreshAccessToken, fetchRegister, fetchLogin} from '../api'

export const REFRESH_ACCESS_TOKEN = 'REFRESH_ACCESS_TOKEN';
export const UPDATE_USER = 'UPDATE_USER';
export const USER_CHECKOUT_REQUEST = 'USER_CHECKOUT_REQUEST';
export const USER_REQUEST_FAILED = 'USER_REQUEST_FAILED';


export const refreshAccessToken = (refreshToken) => {
  return function(dispatch) {
    dispatch({type: USER_CHECKOUT_REQUEST});
    fetchRefreshAccessToken(refreshToken)
    .then(res => {
      return dispatch({type:REFRESH_ACCESS_TOKEN, accessToken: res.accessToken})})
    .catch(()=>dispatch({type: USER_REQUEST_FAILED}))
  };
}

export const registerAction = (userData) => {
  return function (dispatch) {
    dispatch({type: USER_CHECKOUT_REQUEST});
    fetchRegister(userData)
    .then(res => {
      dispatch({type:UPDATE_USER, user: res.user})
      dispatch({type:REFRESH_ACCESS_TOKEN, accessToken: res.accessToken})})
    .catch(()=>dispatch({type: USER_REQUEST_FAILED}))
  }
}

export const loginAction = (formData) => {
  return function (dispatch){
    dispatch({type: USER_CHECKOUT_REQUEST});
    fetchLogin(formData)
    .then(res => {
      console.log(res)
      dispatch({type:UPDATE_USER, user: res.user})
      dispatch({type:REFRESH_ACCESS_TOKEN, accessToken: res.accessToken})})
    .catch(()=>dispatch({type: USER_REQUEST_FAILED}))
  }
}