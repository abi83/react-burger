import React from 'react';
import style from './burger-ingredients.module.css';
import Tabs from './tabs/tabs';
import PropTypes from 'prop-types';
import {ingredientPropTypes} from '../../utils/dataPropTypes';
import Section from './section/section';

export default class BurgerIngredients extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'bun',
      tabs: [
        {bun: 'Булки'},
        {main: 'Начинки'},
        {sauce: 'Соусы'},
      ]}
  };
  render() {
    return (
    <section className='column'>
      <h2 className={`${style.header} text text_type_main-large mt-10 mb-5`}>Соберите бургер</h2>
      <Tabs tabs={this.state.tabs}/>
      <div className="container">
        {this.state.tabs
        .map(tab =>  <Section title={Object.values(tab)[0]}
                        items={this.props.ingredients.filter(ing=>ing.type===Object.keys(tab)[0])}
                        />)}
        
      </div>
    </section>
  )}
}

BurgerIngredients.propTypes = PropTypes.arrayOf(ingredientPropTypes).isRequired;