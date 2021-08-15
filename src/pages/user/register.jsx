import React, { useState } from 'react';
import {Link, Redirect} from 'react-router-dom';
import styles from './login.module.css';
import {fetchRegister} from "../../services/api";
import {registerAction} from "../../services/actions/auth";
// import { useAuth } from '../services/auth';
import {
  Button,
  Input,
  PasswordInput
} from '@ya.praktikum/react-developer-burger-ui-components';
import {useDispatch} from "react-redux";


export function RegisterPage() {
  // let auth = useAuth();
  const [form, setValue] = useState({ name: '', email: '', password: '' });
  const dispatch = useDispatch();

  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };
  const register = async event =>{
    event.preventDefault();
    dispatch(registerAction(form));
    return (<Redirect to='/login/' />)
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


// accessToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMThiYjk4OWQ5NTJmMDAxYjgyNGFlMCIsImlhdCI6MTYyOTAxMDg0MCwiZXhwIjoxNjI5MDEyMDQwfQ.zYs56X4lRNCYoYsSEWeDr2j8FBY_S9NVhVZfA6o7944"
// refreshToken: "dcec369bed581f2268fff5614dedb98f489253ce7f0280b4061fab235882b33cee34c078a86c6811"
// success: true
// user: {email: "vladimir.kromm@yandex.ru", name: "Vladimir"}


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
