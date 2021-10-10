import React, { useState, useEffect } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import styles from './profile.module.css'
import {
  exitUserAction,
  getUserInfoAction,
  refreshAccessToken,
} from '../../services/actions/auth'
import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUpdateUser } from '../../services/api'

export function ProfilePage() {
  const [form, setValue] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [changed, setChanged] = useState(false)
  const [currentTab, setCurrentTab] = useState('profile')
  const { user, accessToken, requestFailed } = useSelector(
    (store) => store.authReducer
  )
  const dispatch = useDispatch()
  const refreshToken = window.localStorage.getItem('refreshToken') || ''
  const history = useHistory()

  useEffect(() => {
    if (!accessToken && refreshToken) {
      dispatch(refreshAccessToken(refreshToken))
    }
    if (!user && accessToken) {
      dispatch(getUserInfoAction(accessToken))
    }
    if (user) {
      setValue({ ...form, name: user.name, email: user.email })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshToken, accessToken, dispatch, user])

  if ((!refreshToken && !user) || requestFailed) {
    return <Redirect to="/login/" />
  }

  const onChange = (e) => {
    if (
      //state changes inside function have no effect inside function
      user[e.target.name] !== e.target.value ||
      form.password !== '' ||
      ( form.name !== user.name && form.email !== user.email ))
    {
      setChanged(true)
    } else {
      setChanged(false)
    }
    setValue({ ...form, [e.target.name]: e.target.value })
  }
  const updateProfile = async () => {
    console.log('update profile', form)
    await fetchUpdateUser(form, accessToken)
  }
  const cancelUpdate = () =>{
    setValue({ ...form, name: user.name, email: user.email, password: '' })
    setChanged(false)
  }
  const exit = () => {
    dispatch(exitUserAction(refreshToken))
    history.push('/login/')
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.menu}>
        <h2 className={`text text_type_main mt-10 mb-5 ${styles.tab}`}>Профайл</h2>
        <h2 className={`text text_type_main mt-10 mb-5 ${styles.tab}`}>Orders</h2>
        <h2 className={`text text_type_main mt-10 mb-5 ${styles.tab}`} onClick={exit}>
          Exit
        </h2>
        <p className={'text text_color_inactive mt-2'}>
          В этом разделе вы можете сменить свои персональные данные
        </p>
      </div>
      {
        currentTab === 'profile'
          ?
          <div className={styles.form}>
            <form>
              <Input
                placeholder="Имя"
                icon="EditIcon"
                type={'text'}
                value={form.name}
                name="name"
                onChange={onChange}
              />
              <Input
                placeholder="Логин"
                icon="EditIcon"
                type={'email'}
                value={form.email}
                name="email"
                onChange={onChange}
              />
              <PasswordInput
                placeholder="Пароль"
                value={form.password}
                name="password"
                onChange={onChange}
              />
            </form>
            {
              changed &&
              <>
                <Button onClick={cancelUpdate} type={'secondary'}>
                  Отменить
                </Button>
                <Button onClick={updateProfile} type={'primary'}>
                  Обновить
                </Button>
              </>
            }
          </div>
          : <h3>Orders!</h3>
      }
    </div>
  )
}
