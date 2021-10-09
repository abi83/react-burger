import React, { useState, useEffect } from 'react';
import {Link, Redirect} from 'react-router-dom';
import styles from './profile.module.css';
import {refreshAccessToken} from "../../services/actions/auth";
// import {registerAction} from "../../services/actions/auth";
import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import {useDispatch, useSelector} from "react-redux";
import {authReducer} from '../../services/reducers/auth';


export function ProfilePage() {
  const [form, setValue] = useState({ name: '', email: ''});
  const auth = useSelector(store => store.authReducer)
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log('Auth inside effect', auth)
    if (auth.user){
      setValue(prevState => {
        return {name:auth.user.name, email: auth.user.email}
      })
    }
  }, [auth])

  useEffect(()=> {
    console.log('Dispatching effect', refreshToken)
    dispatch(refreshAccessToken(refreshToken))
  }, [dispatch])

  const refreshToken = window.localStorage.getItem('refreshToken')
  console.log('RefreshToken', refreshToken)
  if (!refreshToken && !auth.user){
    console.log('No token, no user')
    return (<Redirect to='/login/' />);
  }

  // if (!auth.user) {
  //   console.log('Yes token, no user')
  //   dispatch(refreshAccessToken(refreshToken))
  // }

  if (auth.user) {
    return (<Redirect to='/' />);
  }

  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };
  const updateProfile = async event =>{
    event.preventDefault();
    console.log('updateProfile')
    // dispatch(registerAction(form));
    // return (<Redirect to='/login/' />)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.menu}>
        <h1 className={`text text_type_main mt-10 mb-5`}>Профайл</h1>
        <p className={'text text_color_inactive mt-2'}>
          В этом разделе вы можете сменить свои персональные данные
        </p>
      </div>
      <div className={styles.form}>
        <form className={styles.form}>
          <Input placeholder="Имя"
                 icon="EditIcon"
                 type={'text'}
                 value={form.name}
                 name="name"
                 className={styles.input}
                 onChange={onChange} />
          <Input placeholder="Логин"
                 icon="EditIcon"
                 type={'email'}
                 value={form.email}
                 name="email"
                 className={styles.input}
                 onChange={onChange} />
          <PasswordInput
            placeholder="Пароль"
            value={form.password}
            name="password"
            onChange={onChange}
          />
          <Button onClick={updateProfile} type={'secondary'}>
            Отменить
          </Button>
          <Button onClick={updateProfile} type={'primary'}>
            Обновить
          </Button>
        </form>
      </div>
    </div>
  );
}
