import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './profile.module.css'
import { exitUserAction, getUserInfoAction } from '../../services/actions/auth'
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
  const { user, accessToken } = useSelector(
    (store) => store.authReducer,
  )
  const dispatch = useDispatch()
  const refreshToken = window.localStorage.getItem('refreshToken') || ''
  const history = useHistory()

  useEffect(() => {
    if (user) {
      setValue({ ...form, name: user.name, email: user.email })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const onChange = (e) => {
    if (
      //state changes inside function have no effect inside function
      user[e.target.name] !== e.target.value ||
      form.password !== '' ||
      (form.name !== user.name && form.email !== user.email)) {
      setChanged(true)
    } else {
      setChanged(false)
    }
    setValue({ ...form, [e.target.name]: e.target.value })
  }
  const updateProfile = async () => {
    const userData = {}
    for (const field in form) {
      if (form[field] && form[field] !== user[field]) {
        userData[field] = form[field]
      }
    }
    await fetchUpdateUser({ ...userData }, accessToken)
    dispatch(getUserInfoAction(accessToken))
  }
  const cancelUpdate = () => {
    setValue({ ...form, name: user.name, email: user.email, password: '' })
    setChanged(false)
  }
  const exit = () => {
    window.localStorage.removeItem('refreshToken')
    dispatch(exitUserAction(refreshToken))
    history.push('/login/')
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.menu}>
        <h2 className={`text text_type_main mt-10 mb-5 ${styles.tab}`}>??????????????</h2>
        <h2 className={`text text_type_main mt-10 mb-5 ${styles.tab}`}>Orders</h2>
        <h2 className={`text text_type_main mt-10 mb-5 ${styles.tab}`} onClick={exit}>
          Exit
        </h2>
        <p className={'text text_color_inactive mt-2'}>
          ?? ???????? ?????????????? ???? ???????????? ?????????????? ???????? ???????????????????????? ????????????
        </p>
      </div>
      <div className={styles.form}>
        <form>
          <Input
            placeholder='??????'
            icon='EditIcon'
            type={'text'}
            value={form.name}
            name='name'
            onChange={onChange}
          />
          <Input
            placeholder='??????????'
            icon='EditIcon'
            type={'email'}
            value={form.email}
            name='email'
            onChange={onChange}
            disabled={true}
          />
          <PasswordInput
            placeholder='????????????'
            value={form.password}
            name='password'
            onChange={onChange}
          />
        </form>
        {
          changed &&
          <>
            <Button onClick={cancelUpdate} type={'secondary'}>
              ????????????????
            </Button>
            <Button onClick={updateProfile} type={'primary'}>
              ????????????????
            </Button>
          </>
        }
      </div>
    </div>
  )
}
