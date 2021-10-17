import styles from './ingredient-card.module.css'
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { memo } from 'react'

import { useDrag } from 'react-dnd'

import { ingredientPropTypes } from '../../../utils/dataPropTypes'
import { useDispatch } from 'react-redux'
import { OPEN_MODAL } from '../../../services/actions/modal'
import IngredientDetail from '../../ingredient-detail/ingredient-detail'

const IngredientCard = memo(
  ({ ingredient }) => {
    const dispatch = useDispatch()
    const onCardClick = () => {
      dispatch({
        type: OPEN_MODAL,
        content: <IngredientDetail ingredient={ingredient}/>
      })
    }
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
        onClick={onCardClick}
        ref={ref}
        style={{ opacity }}
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

export { IngredientCard }
