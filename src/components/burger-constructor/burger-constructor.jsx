import React from 'react'
import PropTypes from 'prop-types'

import {
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import BunWrapper from './bun-wrapper/bun-wrapper'
import { InnerIngredients } from './inner-ingredients/inner-ingredients'
import styles from './burger-constructor.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useDrop } from 'react-dnd'
import { ADD_INGREDIENT } from '../../services/actions/burger-constructor'

export default function BurgerConstructor({ onClick, onDeleteClick }) {
  const { inner, bun } = useSelector((store) => {
    return store.selectedIngredientsReducer
  })
  let totalPrice = inner.reduce((acc, el) => acc + el.price, 0)
  if (bun) {
    totalPrice += 2 * bun.price
  }

  const dispatch = useDispatch()

  const [{ isHover }, dropTarget] = useDrop({
    accept: 'ingredient',
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(item) {
      dispatch({ type: ADD_INGREDIENT, item: item })
    },
  })
  const className = `column pt-25 + ${isHover ? styles.droppable : ''}`
  return (
    <section className={className} ref={dropTarget}>
      <BunWrapper bun={bun}>
        <InnerIngredients items={inner} onDeleteClick={onDeleteClick} />
      </BunWrapper>
      <div className={`${styles.price} pt-4 pb-4`}>
        <span className="text text_type_digits-medium">{totalPrice}</span>
        <CurrencyIcon type="primary" />
        <Button type="primary" size="large" onClick={onClick}>
          Оформить заказ
        </Button>
      </div>
    </section>
  )
}

BurgerConstructor.propTypes = {
  onClick: PropTypes.func.isRequired,
}
