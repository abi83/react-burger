import React from 'react';
import style from './burger-ingredients.module.css';
import Tabs from './tabs';
import IngredientCard from './ingredient-card/ingredient-card';

export default class BurgerConstructor extends React.Component{
  render() {
    return (
    <section className={'container'} style={{backgroundColor: 'red'}}>
      <h2 className={style.header}>Соберите бургер</h2>
      <Tabs />
      <h3>Булки</h3>
      <IngredientCard ingredient={this.props.ingredients[0]} />
      <IngredientCard ingredient={this.props.ingredients[1]} />
    </section>
  )}
}