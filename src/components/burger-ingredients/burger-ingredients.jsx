import React from 'react';
import style from './burger-ingredients.module.css';
import Tabs from './tabs';
import IngredientCard from './ingredient-card/ingredient-card';

export default class BurgerConstructor extends React.Component{
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
    console.log(this.translatedCategories());
    return (
    <section className={'container'} style={{backgroundColor: 'red'}}>
      <h2 className={style.h2}>Соберите бургер</h2>
      <Tabs />
      <h3 className={style.h3}>Булки</h3>
      <div className={style.ingredientsContainer}>
        
        
        <IngredientCard key={1} ingredient={this.props.ingredients[0]} />
        <IngredientCard key={2} ingredient={this.props.ingredients[1]} />
        <IngredientCard key={3} ingredient={this.props.ingredients[2]} />
      </div>
    </section>
  )}
}