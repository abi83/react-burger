import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import styles from './app.module.css'

import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import Modal from '../modal/modal'
import IngredientDetail from '../ingredient-detail/ingredient-detail'
import ModalOrderInfo from '../modal/modal-order-info/modal-order-info'
import { LoginPage } from '../../pages/user/login'
import { RegisterPage } from '../../pages/user/register'
import { ResetPassword } from '../../pages/user/reset-password'
import { ForgotPassword } from '../../pages/user/forgot-passwd'
import { REMOVE_INGREDIENT } from '../../services/actions/burger-constructor'
import {
  CLOSE_DETAIL_INGREDIENT,
  OPEN_DETAIL_INGREDIENT,
} from '../../services/actions/ingredient-detail'
import { getIngredients } from '../../services/actions/burger-ingredients'
import { placeOrder } from '../../services/actions/order'
import { ProfilePage } from '../../pages/user/profile'
import { ProtectedRoute } from '../protected-route'
import { getUserInfoAction, refreshAccessToken } from '../../services/actions/auth'

export default function App() {
  const dispatch = useDispatch()

  const { ingredientsRequest, ingredientsFailed } = useSelector(
    (store) => store.ingredientsReducer,
  )
  const { inner, bun } = useSelector((store) => {
    return store.selectedIngredientsReducer
  })

  const [modal, manageModal] = React.useState({
    isOpened: false,
    content: null,
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


  const handleModalClose = () => {
    manageModal({ ...modal, isOpened: false })
    dispatch({ type: CLOSE_DETAIL_INGREDIENT })
  }

  const handleCardClick = (ingredient) => {
    dispatch({ type: OPEN_DETAIL_INGREDIENT, item: ingredient })
    manageModal({
      isOpened: true,
      content: <IngredientDetail />,
    })
  }

  const handleDeleteClick = (ingredient) => {
    dispatch({ type: REMOVE_INGREDIENT, item: ingredient })
  }

  const handleOrderClick = () => {
    if (!bun) {
      manageModal({ isOpened: true, content: 'Добавьте хотя бы одну булку!' })
      return
    }
    const ingredients = [...inner.map((ing) => ing._id), bun._id]
    dispatch(placeOrder(ingredients))
    manageModal({ isOpened: true, content: <ModalOrderInfo /> })
  }

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch])

  return (
    <>
      <div className={styles.app}>
        <Router>
          <AppHeader />
          <main>
            <Switch>
              <Route path='/' exact={true}>
                {ingredientsRequest || ingredientsFailed ? (
                  ingredientsRequest ? (
                    <div className='message'>Данные загружаются</div>
                  ) : (
                    <div className='message'>Ошибка сервера</div>
                  )
                ) : (
                  <DndProvider backend={HTML5Backend}>
                    <BurgerIngredients onClick={handleCardClick} />
                    <BurgerConstructor
                      onClick={handleOrderClick}
                      onDeleteClick={handleDeleteClick}
                    />
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
              <Route
                path='/ingredients/:id'
                render={(props) => <IngredientDetail {...props} />}
              />
              <ProtectedRoute path='/profile'>
                <ProfilePage />
              </ProtectedRoute>
            </Switch>
          </main>
        </Router>
      </div>
      {modal.isOpened && (
        <Modal close={handleModalClose}>{modal.content}</Modal>
      )}
    </>
  )
}
