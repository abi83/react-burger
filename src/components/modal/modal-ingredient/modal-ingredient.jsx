import styles from './modal-ingredient.module.css';
import {
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import {ingredientPropTypes} from '../../../utils/dataPropTypes';

export default function ModalIngredient ({ingredient}) {
 
  return (
    <div className={styles.card}>
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
    </div>
  )
};

ModalIngredient.propTypes = {
  ingredient: ingredientPropTypes.isRequired
}