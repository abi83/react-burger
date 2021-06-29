import React from 'react';
import style from './burger-ingredients.module.css';
import Tabs from './tabs/tabs';
import IngredientCard from './ingredient-card/ingredient-card';
import PropTypes from 'prop-types';
import {ingredientPropTypes} from '../../utils/dataPropTypes';

export default class BurgerIngredients extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      ingCategoriesKeys: Array.from(new Set(this.props.ingredients.map(ing=>ing.type))),
    }
    this.translatedCategories = this.translatedCategories.bind(this)
  };
  translatedCategories = ()=>{
    const known = {
        bun: 'Булки',
        main: 'Начинки',
        sauce: 'Соусы',
      }
    return this.state.ingCategoriesKeys.map(cat=>known[cat])
  }
  //TODO: category component
  render() {
    return (
    <section className='column container'>
      <h2 className={`${style.header} text text_type_main-large mt-10 mb-5`}>Соберите бургер</h2>
      <Tabs />
      <h3 className={`${style.header} text text_type_main-medium mt-6 mb-2`}>Булки</h3>
      <ul className={`${style.ingredientsContainer} pl-4 pr-4`}>
        <IngredientCard ingredient={this.props.ingredients[0]} />
        <IngredientCard ingredient={this.props.ingredients[1]} />
        <IngredientCard ingredient={this.props.ingredients[2]} />
      </ul>
      <h3 className={`${style.header} text text_type_main-medium mt-6 mb-2`}>Начинки</h3>
      <ul className={`${style.ingredientsContainer} pl-4 pr-4`}>
        <IngredientCard ingredient={this.props.ingredients[3]} />
        <IngredientCard ingredient={this.props.ingredients[4]} />
        <IngredientCard ingredient={this.props.ingredients[5]} />
        <IngredientCard ingredient={this.props.ingredients[6]} />
      </ul>
    </section>
  )}
}

BurgerIngredients.propTypes = PropTypes.arrayOf(ingredientPropTypes).isRequired;