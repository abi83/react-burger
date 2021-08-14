import React, { useState } from 'react';
import {Link, Redirect} from 'react-router-dom';
import styles from './login.module.css';
import {fetchRegister} from "../../services/api";
// import { useAuth } from '../services/auth';
import {
  Button,
    Input,
    PasswordInput
} from '@ya.praktikum/react-developer-burger-ui-components';


export function RegisterPage() {
  // let auth = useAuth();
  const [form, setValue] = useState({ name: '', email: '', password: '' });

  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };
  const register = async event =>{
    event.preventDefault();
    console.log('Register', form)
    const user = await fetchRegister(form)
    console.log(user)
    return (<Redirect to={{pathname: '/login/'}} />)
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
        <h1 className={`text text_type_main mt-10 mb-5`}>Регистрация</h1>

        <form className={styles.form}>
          <Input placeholder="Имя"
                 type={'text'}
                 value={form.name}
                 name="name"
                 className={styles.input}
                 onChange={onChange} />
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
          <Button onClick={register} primary={true}>
            Зарегистрироваться
          </Button>
        </form>
        <p className={'text text_color_inactive mt-2'}>
          Уже зарегистрированы?
          <Link to='/login/' className={`${styles.link} pl-3`}>
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
}
