import React, { useState, useEffect } from 'react';
import {Link, Redirect} from 'react-router-dom';
import styles from './profile.module.css';
import {refreshAccessToken} from "../../services/actions/auth";
// import {registerAction} from "../../services/actions/auth";
import {
  Button,
  Input,
  PasswordInput
} from '@ya.praktikum/react-developer-burger-ui-components';
import {useDispatch, useSelector} from "react-redux";


export function ProfilePage() {
  const [form, setValue] = useState({ name: '', email: '', password: '*****' });
  const auth = useSelector(store => store.authReducer)
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log('Auth inside effect', auth)
    if (auth.user){
      setValue(prevState => {
        return {...prevState, name:auth.user.name, email: auth.user.email}
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

  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };
  const updateProfile = async event =>{
    event.preventDefault();
    console.log('updateProfile')
    // dispatch(registerAction(form));
    // return (<Redirect to='/login/' />)
  }

// accessToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMThiYjk4OWQ5NTJmMDAxYjgyNGFlMCIsImlhdCI6MTYyOTAxMDg0MCwiZXhwIjoxNjI5MDEyMDQwfQ.zYs56X4lRNCYoYsSEWeDr2j8FBY_S9NVhVZfA6o7944"
// refreshToken: "dcec369bed581f2268fff5614dedb98f489253ce7f0280b4061fab235882b33cee34c078a86c6811"
// success: true
// user: {email: "vladimir.kromm@yandex.ru", name: "Vladimir"}


  return (
    <div className={styles.wrapper}>
      <div className={styles.menu}>
        <h1 className={`text text_type_main mt-10 mb-5`}>Регистрация</h1>
        <p className={'text text_color_inactive mt-2'}>
          В этом разделе вы можете сменить свои персональные данные
        </p>
      </div>
      <div className={styles.form}>
        <form className={styles.form}>
          <Input placeholder="Имя"
                 type={'text'}
                 value={form.name}
                 name="name"
                 className={styles.input}
                 onChange={onChange} />
          <Input placeholder="Логин"
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
          <Button onClick={updateProfile} primary={true}>
            Зарегистрироваться
          </Button>
        </form>
      </div>
    </div>
  );
}
