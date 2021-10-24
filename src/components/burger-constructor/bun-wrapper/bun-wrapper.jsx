import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'

import { ingredientPropTypes } from '../../../utils/dataPropTypes'

export default function BunWrapper({ bun, children }) {
  if (bun && bun.type !== 'bun') {
    throw new Error('Give only bun into BunWrapper')
  }
  return bun ? (
    <>
      <div style={{ maxHeight: '80px' }}>
        <ConstructorElement
          type='top'
          isLocked={true}
          text={bun.name + ' (верх)'}
          thumbnail={bun.image}
          price={bun.price}
        />
      </div>
      {children}
      <div style={{ maxHeight: '80px' }}>
        <ConstructorElement
          type='bottom'
          isLocked={true}
          text={bun.name + ' (низ)'}
          thumbnail={bun.image}
          price={bun.price}
        />
      </div>
    </>
  ) : (
    <div>Выберите хотя бы одну булку</div>
  )
}

BunWrapper.propTypes = {
  bun: ingredientPropTypes,
  children: PropTypes.element,
}
