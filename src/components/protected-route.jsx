import { Redirect, Route, useHistory, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

export function ProtectedRoute({ children, ...rest }) {
  const { user } = useSelector((store) => store.authReducer)
  const refreshToken = window.localStorage.getItem('refreshToken') || ''

  // let location = useLocation()
  // let history = useHistory()
  // TODO: organize router in proper way
  // console.log('Location', location)
  // console.log('History', history)

  if (!user && !refreshToken) {
    return <Redirect to='/login/' />
  }
  return <Route {...rest} render={() => children} />
}
