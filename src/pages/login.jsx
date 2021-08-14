import React, { useCallback, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import styles from './login.module.css';
// import { useAuth } from '../services/auth';
import {
  Button,
    Input,
    PasswordInput
} from '@ya.praktikum/react-developer-burger-ui-components';// import { Input } from '../components/input';
// import { PasswordInput } from '../components/password-input';

export function LoginPage() {
  // let auth = useAuth();
  const [form, setValue] = useState({ email: '', password: '' });

  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };
  const register = event =>{
    event.preventDefault();

  }
  // let login = useCallback(
  //   e => {
  //     e.preventDefault();
  //     auth.signIn(form);
  //   },
  //   [auth, form]
  // );
  //
  // if (auth.user) {
  //   return (
  //     <Redirect
  //       to={{
  //         pathname: '/'
  //       }}
  //     />
  //   );
  // }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={`text text_type_main mt-10 mb-5`}>Вход</h1>

        <form className={styles.form}>
          <Input placeholder="E-mail"
                 type={'email'}
                 value={form.email}
                 name="email"
                 className={styles.input}
                 onChange={onChange} />

          <PasswordInput
            placeholder="Password"
            value={form.password}
            name="password"
            onChange={onChange}
          />
          <Button onClick={()=>{console.log('CLICK')}} primary={true}>
            Войти
          </Button>
        </form>
        <p className={'text text_color_inactive mt-2'}>
          Вы - новый пользователь?
          <Link to='/register' className={`${styles.link} pl-3`}>
            Зарегистрироваться
          </Link>
        </p>
        <p className={'text text_color_inactive mt-2'}>
          Забыли пароль
          <Link to='forgot-password' className={`${styles.link} pl-3`}>
            Восстановить пароль
          </Link>
        </p>
      </div>
    </div>
  );
}
