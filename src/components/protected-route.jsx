import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

export function ProtectedRoute({ children, ...rest }) {
  const { user } = useSelector((store) => store.authReducer)
  const refreshToken = window.localStorage.getItem('refreshToken') || ''

  if (!user && !refreshToken) {
    return <Redirect to='/login/' />
  }
  return <Route {...rest} render={() => children} />
}
