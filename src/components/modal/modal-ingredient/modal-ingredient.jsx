import styles from './modal-ingredient.module.css';
import React from 'react';
import {ingredientPropTypes} from '../../../utils/dataPropTypes';

export default function ModalIngredient ({ingredient}) {
 
  return (
    <div className={styles.card}>
      <h3 className='text text_type_main-large pt-3'>Детали ингредиента</h3>
      <img className={`${styles.mainImage} ml-4 mr-4`} src={ingredient.image_large} alt={ingredient.name}/>
      <p className={`${styles.name} pt-4 pb-8 text text_type_main-medium`}>
        {ingredient.name}
      </p>
      <ul className={styles.info}>
        <li>
          <span className='text text_type_main-default text_color_inactive mb-2'>Калории, ккал</span>
          <span className='text text_type_digits-default text_color_inactive'>{ingredient.calories}</span>
        </li>
        <li>
          <span className='text text_type_main-default text_color_inactive mb-2'>Белки, г</span>
          <span className='text text_type_digits-default text_color_inactive'>{ingredient.proteins}</span>
        </li>
        <li>
          <span className='text text_type_main-default text_color_inactive mb-2'>Жиры, г</span>
          <span className='text text_type_digits-default text_color_inactive'>{ingredient.fat}</span>
        </li>
        <li>
          <span className='text text_type_main-default text_color_inactive mb-2'>Углеводы, г</span>
          <span className='text text_type_digits-default text_color_inactive'>{ingredient.carbohydrates}</span>
        </li>

      </ul>
    </div>
  )
};

ModalIngredient.propTypes = {
  ingredient: ingredientPropTypes.isRequired
}