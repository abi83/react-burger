import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './bun-wrapper.module.css';
import {ingredientPropTypes} from '../../../utils/dataPropTypes';

export default function BunWrapper({bun, items}){
  
  return(
      <>
        <ConstructorElement type='top' isLocked={true} text = {bun.name} thumbnail={bun.image} price={bun.price} />
        <div className='container'>
          {items
          .map(el =>
            <div key={el._id} className={styles.row}>
              <DragIcon type='primary' />
              <ConstructorElement
                isLocked={false}
                text ={el.name}
                thumbnail={el.image}
                price={el.price}
              />
            </div>
          )
          }
        </div>
        <ConstructorElement type='bottom' isLocked={true} text = {bun.name} thumbnail={bun.image} price={bun.price} />
      </>
  )
}

BunWrapper.propTypes = {
  items: PropTypes.arrayOf(ingredientPropTypes),
  bun: ingredientPropTypes
}