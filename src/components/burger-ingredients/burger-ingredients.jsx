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
        {id: 'bun', name: 'Булки'},
        {id: 'main', name: 'Начинки'},
        {id: 'sauce', name: 'Соусы'},
      ]
    }};
  render() {
    return (
    <section className='column'>
      <h2 className={`${style.header} text text_type_main-large mt-10 mb-5`}>Соберите бургер</h2>
      <Tabs tabs={this.state.tabs}/>
      <div className="container">
        {this.state.tabs
          .map( (tab) => {
            return <Section title={tab.name}
                   items={this.props.ingredients.filter(ing=>ing.type===tab.id)}
                   key={tab.id}/>})}
      </div>
    </section>
  )}
}

BurgerIngredients.propTypes = PropTypes.arrayOf(ingredientPropTypes).isRequired;