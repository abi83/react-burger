import React from 'react';
import style from './burger-constructor.module.css';

import Tab from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab';

export default class BurgerConstructor extends React.Component{
  render() {
    return (
    <section className={'container'} style={{backgroundColor: 'red'}}>
      <h2 className={style.header}>Соберите бургер</h2>
      {'Constructor!'}
      <Tab value={'hh'} key={1} />
      <Tab />
      <Tab />
    </section>
  )}
}