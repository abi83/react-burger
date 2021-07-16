import React, {useContext} from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import BunWrapper from './bun-wrapper/bun-wrapper';
import InnerIngredients from './inner-ingredients/inner-ingredients';
// import {ConstructorContext} from '../../context/constructor-context'
import styles from './burger-constructor.module.css';
import {useSelector} from 'react-redux';

export default function BurgerConstructor ({onClick, onDeleteClick}){
  const {inner, bun} = useSelector(store=>{
    // console.log('In CONSTRUCTOR Selector!', store);
    return store.constructor
  })
  // const { selectedIngredients } = useContext(ConstructorContext);
  let totalPrice = inner.reduce((acc,el)=>acc+el.price, 0)
  if (bun) {totalPrice += (2 * bun.price)}

  return (
    <section className='column pt-25'>
        <BunWrapper bun={bun}>
          <InnerIngredients items={inner} onDeleteClick={onDeleteClick} />
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