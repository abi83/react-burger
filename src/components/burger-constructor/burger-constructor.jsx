import React from 'react';
import PropTypes from 'prop-types';
import {ingredientPropTypes} from '../../utils/dataPropTypes';

import {
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import BunWrapper from './bun-wrapper/bun-wrapper';
import styles from './burger-constructor.module.css';

export default class BurgerConstructor extends React.Component{
  render() {
    return (
    <section className='column pt-25'>
        <BunWrapper bun={this.props.ingredients[0]} items={this.props.ingredients} />
        <div className={`${styles.price} pt-4 pb-4`}>
          <span className='text text_type_digits-medium'>
            {6789}
          </span>
          <CurrencyIcon type="primary" />
          <Button type="primary" size="large">
            Оформить заказ
          </Button>
        </div>
    </section>
  )}
}

BurgerConstructor.propTypes = PropTypes.arrayOf(ingredientPropTypes).isRequired;