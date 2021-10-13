import React, { memo, useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import update from 'immutability-helper'
import { useDrop } from 'react-dnd'
import DroppableCard from './droppable-card'
import { ingredientPropTypes } from '../../../utils/dataPropTypes'

export const InnerIngredients = memo(
  function InnerIngredients({ items, onDeleteClick}) {
  items.forEach((el) => {
    if (el.type === 'bun') {
      throw new Error('No \'buns\' in InnerIngredients allowed!')
    }
  })
  const [cards, setCards] = useState(items)
  useEffect(() => {
    setCards(items)
  }, [items])
  const findCard = useCallback(
    (id) => {
      const card = cards.filter((c) => `${c.id}` === id)[0]
      return {
        card,
        index: cards.indexOf(card),
      }
    },
    [cards]
  )
  const moveCard = useCallback(
    (id, atIndex) => {
      const { card, index } = findCard(id)
      setCards(
        update(cards, {
          $splice: [
            [index, 1],
            [atIndex, 0, card],
          ],
        }),
      )
    },
    [findCard, cards, setCards],
  )
  const [, drop] = useDrop(() => ({ accept: 'dropable-card' }))

  return (
    <div className='container' ref={drop}>
      {cards.map((el, index) => (
        <DroppableCard
          key={`${el._id}_${index}`}
          ingredient={el}
          onDeleteClick={onDeleteClick}
          moveCard={moveCard}
          findCard={findCard}
        />
      ))}
    </div>
  )
})

InnerIngredients.propTypes = {
  items: PropTypes.arrayOf(ingredientPropTypes),
}
