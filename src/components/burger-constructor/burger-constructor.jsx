import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {ingredientPropTypes} from '../../utils/dataPropTypes';

import {
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import BunWrapper from './bun-wrapper/bun-wrapper';
import InnerIngredients from './inner-ingredients/inner-ingredients';
import {ConstructorContext} from '../../context/constructor-context'
import styles from './burger-constructor.module.css';

export default function BurgerConstructor ({onClick}){
  const { selectedIngredients, selectedIngredientsDispatcher } = useContext(ConstructorContext);
  const totalPrice = selectedIngredients.reduce((acc,el)=>acc+el.price, 0);
  return (
    <section className='column pt-25'>
        <BunWrapper bun={selectedIngredients.find(el=>el.type==='bun')}>
          <InnerIngredients items={selectedIngredients.filter(el=>el.type!=='bun')} />
        </BunWrapper>
        <div className={`${styles.price} pt-4 pb-4`}>
          <span className='text text_type_digits-medium'>
            {totalPrice}
          </span>
          <CurrencyIcon type="primary" />
          <Button type="primary" size="large" onClick={onClick}>
            Оформить заказ
          </Button>
        </div>
    </section>
  )
}

BurgerConstructor.propTypes = {
  onClick: PropTypes.func.isRequired
}