import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import styles from './app.module.css'

import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import Modal from '../modal/modal'
import IngredientDetail from '../ingredient-detail/ingredient-detail'
import { LoginPage } from '../../pages/user/login'
import { RegisterPage } from '../../pages/user/register'
import { ResetPassword } from '../../pages/user/reset-password'
import { ForgotPassword } from '../../pages/user/forgot-passwd'
import { getIngredients } from '../../services/actions/burger-ingredients'
import { ProfilePage } from '../../pages/user/profile'
import { ProtectedRoute } from '../protected-route'
import { getUserInfoAction, refreshAccessToken } from '../../services/actions/auth'
import IngredientModal from '../modal/ingredient-modal'

export default function App(){
  return(
    <Router>
      <Main />
    </Router>
  )
}

function Main() {
  const dispatch = useDispatch()

  const { ingredientsRequest, ingredientsFailed } = useSelector(
    (store) => store.ingredientsReducer,
  )

  const { content } = useSelector((store)=>{
    return store.modal
  })
  const { user, accessToken } = useSelector(
    (store) => store.authReducer,
  )
  const refreshToken = window.localStorage.getItem('refreshToken') || ''
  useEffect(() => {
    if (!accessToken && refreshToken) {
      dispatch(refreshAccessToken(refreshToken))
    }
    if (!user && accessToken) {
      dispatch(getUserInfoAction(accessToken))
    }
  }, [refreshToken, accessToken, dispatch, user])


  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch])
  let location = useLocation()
  console.log('location', location)
  let background = location.state && location.state.background
  console.log('background', background)

  return (
    <>
      <div className={styles.app}>
        <Router>
          <AppHeader />
          <main>
            <Switch location={background || location}>
              <Route exact path='/'>
                {ingredientsRequest || ingredientsFailed ? (
                  ingredientsRequest ? (
                    <div className='message'>Данные загружаются</div>
                  ) : (
                    <div className='message'>Ошибка сервера</div>
                  )
                ) : (
                  <DndProvider backend={HTML5Backend}>
                    <BurgerIngredients />
                    <BurgerConstructor />
                  </DndProvider>
                )}
              </Route>
              <Route path='/login/'>
                <LoginPage />
              </Route>
              <Route path='/register/'>
                <RegisterPage />
              </Route>
              <Route path='/forgot-password/'>
                <ForgotPassword />
              </Route>
              <Route path='/reset-password/'>
                <ResetPassword />
              </Route>
              <Route path='/ingredients/:id' >
                <IngredientDetail />
              </Route>
              <ProtectedRoute path='/profile'>
                <ProfilePage />
              </ProtectedRoute>
            </Switch>
            {background &&
              <Route path="/ingredients/:id">
                <IngredientModal />
              </Route>
            }
          </main>
        </Router>
      </div>
      {content && <Modal>{content}</Modal>}
    </>
  )
}
