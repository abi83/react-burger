import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styles from './login.module.css';
import {
  Button,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components';
import {fetchCallPasswordReset} from "../../services/api";

export function ForgotPassword() {
  // let auth = useAuth();
  const [form, setValue] = useState({ email: '' });

  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };
  const reset = async event =>{
    event.preventDefault();
    await fetchCallPasswordReset(form.email)
    return (<Redirect to={{pathname: '/reset-password/'}} />)
  }

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
        <h1 className={`text text_type_main mt-10 mb-5`}>Восстановление пароля</h1>
        <form className={styles.form}>
          <Input placeholder="Укажите email"
           type={'email'}
           value={form.email}
           name="email"
           className={styles.input}
           onChange={onChange} />
          <Button onClick={reset} primary={true}>
            Восстановить
          </Button>
        </form>
        <p className={'text text_color_inactive mt-2'}>
          Вспомнили пароль?
          <Link to='/login/' className={`${styles.link} pl-3`}>
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
}
