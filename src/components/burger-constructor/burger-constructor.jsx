import React from 'react';
import style from './burger-constructor.module.css';
import Tabs from './tabs';

export default class BurgerConstructor extends React.Component{
  render() {
    return (
    <section className={'container'} style={{backgroundColor: 'red'}}>
      <h2 className={style.header}>Соберите бургер</h2>
      <Tabs />
      {'Constructor!'}
    </section>
  )}
}