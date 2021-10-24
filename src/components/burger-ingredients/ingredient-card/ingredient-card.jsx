import styles from './ingredient-card.module.css'
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { memo } from 'react'

import { useDrag } from 'react-dnd'

import { ingredientPropTypes } from '../../../utils/dataPropTypes'
import { Link, useLocation } from 'react-router-dom'

const IngredientCard = memo(
  ({ ingredient }) => {
    let location = useLocation()
    const [{ opacity }, ref] = useDrag({
      type: 'ingredient',
      item: ingredient,
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    })

    return (
      <li
        className={styles.card}
        ref={ref}
        style={{ opacity }}
      >
        <Link
          to={{
            pathname: `/ingredients/${ingredient._id}`,
            state: { background: location }}
          }
          className='link'
        >
          <Counter count={ingredient.count} size='default' />
          <img
            className={`${styles.mainImage} ml-4 mr-4`}
            src={ingredient.image_large}
            alt={ingredient.name}
          />
          <div className={`${styles.price} mt-1 mb-1`}>
            <span className='pr-3 text text_type_digits-default'>
              {ingredient.price}
            </span>
            <CurrencyIcon type='primary' />
          </div>
          <p
            className={`${styles.name} pt-3 pr-4 pb-6 pl-4 text text_type_main-default`}
          >
            {ingredient.name}
          </p>
        </Link>
      </li>
    )
  },
  (prevProps, nextProps) => {
    return (
      prevProps.ingredient._id === nextProps.ingredient._id &&
      prevProps.ingredient.count === nextProps.ingredient.count
    )
  },
)

IngredientCard.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
}

export default IngredientCard
