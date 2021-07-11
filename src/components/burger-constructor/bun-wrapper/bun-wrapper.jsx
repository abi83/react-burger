import {
  ConstructorElement,
} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import PropTypes from 'prop-types';

import {ingredientPropTypes} from '../../../utils/dataPropTypes';

export default function BunWrapper({bun, children}){
  
  return(
    <>
      <ConstructorElement type='top' isLocked={true} text = {bun.name} thumbnail={bun.image} price={bun.price} />
        {children}
      <ConstructorElement type='bottom' isLocked={true} text = {bun.name} thumbnail={bun.image} price={bun.price} />
    </>
  )
}

BunWrapper.propTypes = {
  bun: ingredientPropTypes,
  children: PropTypes.element
}