import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import PropTypes from 'prop-types'

import { ingredientPropTypes } from '../../../utils/dataPropTypes'

export default function BunWrapper({ bun, children }) {
  if (bun && bun.type !== 'bun') {
    throw new Error('Give only bun into BunWrapper')
  }

  return bun ? (
    <>
      <ConstructorElement
        type="top"
        isLocked={true}
        text={bun.name}
        thumbnail={bun.image}
        price={bun.price}
      />
      {children}
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text={bun.name}
        thumbnail={bun.image}
        price={bun.price}
      />
    </>
  ) : (
    <div>Выберите хотя бы одну булку</div>
  )
}

BunWrapper.propTypes = {
  bun: ingredientPropTypes,
  children: PropTypes.element,
}
