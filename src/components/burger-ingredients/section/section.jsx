import IngredientCard from '../ingredient-card/ingredient-card'
import style from './section.module.css'
import { forwardRef} from 'react'
import PropTypes from 'prop-types'

import { ingredientPropTypes } from '../../../utils/dataPropTypes'

const Section = forwardRef(({ title, items }, ref) => {
  return (
    <>
      <h3
        className={`${style.header} text text_type_main-medium mt-6 mb-2`}
        ref={ref}
      >
        {title}
      </h3>
      <ul
        className={`${style.ingredientsContainer} pl-4 pr-4`}
      >
        {items.map((ingredient) => (
          <IngredientCard
            key={ingredient._id}
            ingredient={ingredient}
          />
        ))}
      </ul>
    </>
  )
})

Section.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(ingredientPropTypes),
}
export default Section
