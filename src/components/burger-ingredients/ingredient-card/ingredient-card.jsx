import styles from './ingredient-card.module.css'
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';

export default function IngredientCard ({ingredient}) {
  return (
    <li key={ingredient._id} className={styles.card}>
      <Counter count={1} size='default' />
      <img className={`${styles.mainImage} ml-4 mr-4`} src={ingredient.image_large} alt={ingredient.name}/>
      <div className={`${styles.price} mt-1 mb-1`}>
        <span className='pr-3 text text_type_digits-default'>
          {ingredient.price}
        </span>
        <CurrencyIcon type='primary' />
      </div>
      <p className={`${styles.name} pt-3 pr-4 pb-6 pl-4 text text_type_main-default`}>
        {ingredient.name}
      </p>
    </li>
  )
};