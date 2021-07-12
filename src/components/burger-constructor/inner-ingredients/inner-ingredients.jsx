import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './inner-ingredients.module.css';
import {ingredientPropTypes} from '../../../utils/dataPropTypes';

export default function InnerIngredients({items}){
  items.forEach(el => {if (el.type==='bun') {throw new Error('No \'buns\' in InnerIngredients allowed!');}
  })
  
  
  
  return(
    <div className='container'>
      {items.map(el =>
        <div key={el._id} className={styles.row}>
          <DragIcon type='primary' />
          <ConstructorElement
            isLocked={false}
            text ={el.name}
            thumbnail={el.image}
            price={el.price}
          />
        </div>
      )}
    </div>
  )
}

InnerIngredients.propTypes = {
  items: PropTypes.arrayOf(ingredientPropTypes),
}