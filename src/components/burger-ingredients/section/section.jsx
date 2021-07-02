import IngredientCard from '../ingredient-card/ingredient-card';
import style from './section.module.css';
import React from 'react';
import PropTypes from 'prop-types';

import {ingredientPropTypes} from '../../../utils/dataPropTypes';

const Section = React.forwardRef((props, ref) => {
  return(
      <>
        <h3 className={`${style.header} text text_type_main-medium mt-6 mb-2`} ref={ref}>{props.title}</h3>
        <ul className={`${style.ingredientsContainer} pl-4 pr-4`}>
          {props.items.map((ingredient, index)=><IngredientCard key={ingredient._id} ingredient={ingredient} />)}
        </ul>
      </>)})

Section.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(ingredientPropTypes)
}
export default Section