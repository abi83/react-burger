import { Redirect, Route } from 'react-router-dom'
import React, { useEffect } from 'react'
import { getUserInfoAction, refreshAccessToken } from '../services/actions/auth'
import { useDispatch, useSelector } from 'react-redux'

export function ProtectedRoute({ children, ...rest }) {
  const { user, accessToken, requestFailed } = useSelector(
    (store) => store.authReducer
  )
  const refreshToken = window.localStorage.getItem('refreshToken') || ''
  const dispatch = useDispatch()

  useEffect(() => {
    if (!accessToken && refreshToken) {
      dispatch(refreshAccessToken(refreshToken))
    }
    if (!user && accessToken) {
      dispatch(getUserInfoAction(accessToken))
    }
    // if (user) {
    //   setValue({ ...form, name: user.name, email: user.email })
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshToken, accessToken, dispatch, user])

  if ((!refreshToken && !user) || requestFailed) {
    return <Redirect to="/login/" />
  }
  console.log('Protected route')
  return (
    <Route
      {...rest}
      render={() => (
        children
      )
      }
    />
  )
}