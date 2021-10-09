import React, { useState } from 'react';
import {Link, Redirect} from 'react-router-dom';
import styles from './login.module.css';
import {
  Button,
  Input,
  PasswordInput
} from '@ya.praktikum/react-developer-burger-ui-components';
import {fetchPasswordReset} from "../../services/api";
import {useSelector} from "react-redux";

export function ResetPassword() {
  const auth = useSelector(store => store.authReducer)
  const [form, setValue] = useState({ password: '', code: '' });

  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };
  const reset = async event =>{
    event.preventDefault()
    const data = await fetchPasswordReset(form.password, form.code)
    console.log("Password reset answer", data)
  }

  if (auth.user) {
    return (<Redirect to='/' />);
  }

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
           name="code"
           className={styles.input}
           onChange={onChange} />
          <Button onClick={reset} type={"primary"}>
            Восстановить
          </Button>
        </form>
        <p className={'text text_color_inactive mt-2'}>
          Вспомнили пароль?
          <Link to='/login/' className={`text text_color_accent pl-3`}>
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
}
