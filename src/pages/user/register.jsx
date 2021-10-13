import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import styles from './login.module.css'
import { registerAction } from '../../services/actions/auth'
import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch, useSelector } from 'react-redux'

export function RegisterPage() {
  const { user } = useSelector((store) => store.authReducer)
  const [form, setValue] = useState({ name: '', email: '', password: '' })
  const dispatch = useDispatch()

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value })
  }
  const register = async (event) => {
    event.preventDefault()
    dispatch(registerAction(form))
  }

  if (user) {
    return <Redirect to='/' />
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={'text text_type_main mt-10 mb-5'}>Регистрация</h1>

        <form className={styles.form}>
          <Input
            placeholder='Имя'
            type={'text'}
            value={form.name}
            name='name'
            onChange={onChange}
          />
          <Input
            placeholder='E-mail'
            type={'email'}
            value={form.email}
            name='email'
            onChange={onChange}
          />
          <PasswordInput
            placeholder='Password'
            value={form.password}
            name='password'
            onChange={onChange}
          />
          <Button onClick={register} type={'primary'}>
            Зарегистрироваться
          </Button>
        </form>
        <p className={'text text_color_inactive mt-2'}>
          Уже зарегистрированы?
          <Link to='/login/' className={'text text_color_accent pl-3'}>
            Войти
          </Link>
        </p>
      </div>
    </div>
  )
}
