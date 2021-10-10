import React, { useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom';
import styles from './profile.module.css';
import {exitUserAction, getUserInfoAction, refreshAccessToken} from "../../services/actions/auth";
// import {registerAction} from "../../services/actions/auth";
import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import {useDispatch, useSelector} from "react-redux";


export function ProfilePage() {
  const [form, setValue] = useState({ name: '', email: '', password: ''});
  const {user, accessToken, pendingRequest, requestFailed} = useSelector(store => store.authReducer)
  const dispatch = useDispatch();
  const refreshToken = window.localStorage.getItem('refreshToken') || ""
  useEffect(()=>{
    if (user){
      setValue(() => {
        return {name:user.name, email: user.email, password: ''}
      })
    }
  }, [user])

  useEffect(()=> {
    if (!accessToken && !pendingRequest && refreshToken){
      dispatch(refreshAccessToken(refreshToken))
    }
  }, [accessToken, pendingRequest, refreshToken, dispatch])

  useEffect(()=>{
    if (!user && accessToken){
      dispatch(getUserInfoAction(accessToken))
    }
  }, [user, accessToken, dispatch])

  if ((!refreshToken && !user) || requestFailed) {
    return (<Redirect to='/login/' />);
  }

  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };
  const updateProfile = async event =>{
    event.preventDefault();
    console.log('PATCH!!!', form)
  }
  const exit = () =>{
    dispatch(exitUserAction(accessToken))
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.menu}>
        <h2 className={`text text_type_main mt-10 mb-5`}>Профайл</h2>
        <h2 className={`text text_type_main mt-10 mb-5`}>Orders</h2>
        <h2 className={`text text_type_main mt-10 mb-5`} onClick={exit}>Exit</h2>
        <p className={'text text_color_inactive mt-2'}>
          В этом разделе вы можете сменить свои персональные данные
        </p>
      </div>
      <form className={styles.form}>
          <Input placeholder="Имя"
                 icon="EditIcon"
                 type={'text'}
                 value={form.name}
                 name="name"
                 onChange={onChange} />
          <Input placeholder="Логин"
                 icon="EditIcon"
                 type={'email'}
                 value={form.email}
                 name="email"
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
  );
}
