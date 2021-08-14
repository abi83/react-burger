import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './login.module.css';
import {
  Button,
  Input,
  PasswordInput
} from '@ya.praktikum/react-developer-burger-ui-components';

export function ResetPassword() {
  // let auth = useAuth();
  const [form, setValue] = useState({ password: '', code: '' });

  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };
  const reset = event =>{
    event.preventDefault();
    console.log('Register', form)
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
          <PasswordInput
            placeholder="Введите новый пароль"
            value={form.password}
            name="password"
            onChange={onChange}
          />
          <Input placeholder="Введите код из письма"
           type={'text'}
           value={form.code}
           name="name"
           className={styles.input}
           onChange={onChange} />
          <Button onClick={reset} primary={true}>
            Зарегистрироваться
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
