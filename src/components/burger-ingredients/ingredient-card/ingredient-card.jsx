// import HeadButton from '../head-button/head-button';
import styles from './ingredient-card.module.css'
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';

export default function IngredientCard ({ingredient}) {
  return (
    <li key={ingredient._id} className={styles.card}>
      <Counter count={1} size="default" />
      <img className={styles.mainImage} src={ingredient.image_large} alt={ingredient.name}/>
      <div className={styles.price}>
        <span>
          {ingredient.price}
        </span>
        <CurrencyIcon type="primary" />
      </div>
      <p className={styles.name}>
        {ingredient.name}
      </p>
    </li>
  )
};