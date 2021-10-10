import styles from './modal-ingredient.module.css'
import React from 'react'
import { useSelector } from 'react-redux'

export default function ModalIngredient() {
  const { ingredientDetail } = useSelector((store) => {
    return store.ingredientDetailReducer
  })

  return (
    <div className={styles.card}>
      <h3 className="text text_type_main-large">Детали ингредиента</h3>
      <img
        className={`${styles.mainImage} ml-4 mr-4`}
        src={ingredientDetail.image_large}
        alt={ingredientDetail.name}
      />
      <p className={`${styles.name} pt-4 pb-6 text text_type_main-medium`}>
        {ingredientDetail.name}
      </p>
      <ul className={styles.info}>
        <li>
          <span className="text text_type_main-default text_color_inactive mb-2">
            Калории, ккал
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {ingredientDetail.calories}
          </span>
        </li>
        <li>
          <span className="text text_type_main-default text_color_inactive mb-2">
            Белки, г
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {ingredientDetail.proteins}
          </span>
        </li>
        <li>
          <span className="text text_type_main-default text_color_inactive mb-2">
            Жиры, г
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {ingredientDetail.fat}
          </span>
        </li>
        <li>
          <span className="text text_type_main-default text_color_inactive mb-2">
            Углеводы, г
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {ingredientDetail.carbohydrates}
          </span>
        </li>
      </ul>
    </div>
  )
}
