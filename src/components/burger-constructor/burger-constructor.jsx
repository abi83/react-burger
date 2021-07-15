import React, {useContext} from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import BunWrapper from './bun-wrapper/bun-wrapper';
import InnerIngredients from './inner-ingredients/inner-ingredients';
import {ConstructorContext} from '../../context/constructor-context'
import styles from './burger-constructor.module.css';

export default function BurgerConstructor ({onClick, onDeleteClick}){
  const { selectedIngredients } = useContext(ConstructorContext);
  let totalPrice = selectedIngredients.inner.reduce((acc,el)=>acc+el.price, 0)
  if (selectedIngredients.bun) {totalPrice += (2 * selectedIngredients.bun.price)}

  return (
    <section className='column pt-25'>
        <BunWrapper bun={selectedIngredients.bun}>
          <InnerIngredients items={selectedIngredients.inner} onDeleteClick={onDeleteClick} />
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