import React, { useState } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import styles from './login.module.css'
import {
  Button,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { fetchCallPasswordReset } from '../../services/api'
import { useSelector } from 'react-redux'

export function ForgotPassword() {
  const history = useHistory()
  const auth = useSelector((store) => store.authReducer)
  const [form, setValue] = useState({ email: '' })

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value })
  }
  const reset = async (event) => {
    event.preventDefault()
    await fetchCallPasswordReset(form.email)
    history.push('/reset-password/')
  }

  if (auth.user) {
    return <Redirect to="/" />
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={`text text_type_main mt-10 mb-5`}>
          Восстановление пароля
        </h1>
        <form className={styles.form}>
          <Input
            placeholder="Укажите email"
            type={'email'}
            value={form.email}
            name="email"
            className={styles.input}
            onChange={onChange}
          />
          <Button onClick={reset} type={'primary'}>
            Восстановить
          </Button>
        </form>
        <p className={'text text_color_inactive mt-2'}>
          Вспомнили пароль?
          <Link to="/login/" className={`text text_color_accent pl-3`}>
            Войти
          </Link>
        </p>
      </div>
    </div>
  )
}
