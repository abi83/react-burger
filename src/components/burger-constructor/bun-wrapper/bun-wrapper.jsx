import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './bun-wrapper.module.css';
import {ingredientPropTypes} from '../../../utils/dataPropTypes';

export default function BunWrapper(props){
  return(
      <>
        <ConstructorElement type={'top'} isLocked={true} text = {props.bun.name} thumbnail={props.bun.image} price={props.bun.price} />
        <div className='container'>
          {props.items
          .map(el =>
            <div key={el._id} className={styles.row}>
              <DragIcon type='primary' />
              <ConstructorElement
                className={'xxx'}
                isLocked={false}
                text ={el.name}
                thumbnail={el.image}
                price={el.price}
              />
            </div>
          )
          }
        </div>
        <ConstructorElement type={'bottom'} isLocked={true} text = {props.bun.name} thumbnail={props.bun.image} price={props.bun.price} />
      </>
  )
}

BunWrapper.propTypes = {
  items: PropTypes.arrayOf(ingredientPropTypes),
  bun: ingredientPropTypes
}