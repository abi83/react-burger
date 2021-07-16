import styles from './ingredient-card.module.css';
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import {useSelector} from 'react-redux';

import {useDrag} from 'react-dnd';

import {ingredientPropTypes} from '../../../utils/dataPropTypes';
import PropTypes from 'prop-types';

export default function IngredientCard({ingredient, onClick}) {
  const onCartClick = (e) => {
    onClick(ingredient);
    e.stopPropagation();
  };
  const {inner, bun} = useSelector(store=>{
    return store.selectedIngredientsReducer
  })
  const count = [...inner, bun].reduce(
      (acc,item) => {
        return item && item._id === ingredient._id
        ? acc+1
        : acc
      }, 0)
  const [{opacity}, ref] = useDrag({
    type: 'ingredient',
    item: ingredient,
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });
  
  return (
      <li className={styles.card} onClick={onCartClick} ref={ref} style = {{opacity}}>
        <Counter count={count} size='default'/>
        <img className={`${styles.mainImage} ml-4 mr-4`}
             src={ingredient.image_large} alt={ingredient.name}/>
        <div className={`${styles.price} mt-1 mb-1`}>
        <span className='pr-3 text text_type_digits-default'>
          {ingredient.price}
        </span>
          <CurrencyIcon type='primary'/>
        </div>
        <p className={`${styles.name} pt-3 pr-4 pb-6 pl-4 text text_type_main-default`}>
          {ingredient.name}
        </p>
      </li>
  );
};

IngredientCard.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
  onClick: PropTypes.func.isRequired,
};