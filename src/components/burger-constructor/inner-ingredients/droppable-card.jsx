import React from 'react'
import { useDrag, useDrop } from 'react-dnd'

import styles from './inner-ingredients.module.css'
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

export default function DroppableCard({
  moveCard,
  findCard,
  ingredient,
  onDeleteClick,
}) {
  const originalIndex = findCard(ingredient.id).index
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'dropable-card',
      item: { id: ingredient.id, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { id: droppedId, originalIndex } = item
        const didDrop = monitor.didDrop()
        if (!didDrop) {
          moveCard(droppedId, originalIndex)
        }
      },
    }),
    [ingredient, originalIndex, moveCard]
  )
  const [, drop] = useDrop(
    () => ({
      accept: 'dropable-card',
      canDrop: () => false,
      hover({ id: draggedId }) {
        if (draggedId !== ingredient.id) {
          const { index: overIndex } = findCard(ingredient.id)
          moveCard(draggedId, overIndex)
        }
      },
    }),
    [findCard, moveCard]
  )
  const opacity = isDragging ? 0 : 1

  return (
    <div
      className={styles.row}
      ref={(node) => drag(drop(node))}
      style={{ opacity }}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        isLocked={false}
        text={ingredient.name}
        handleClose={(e) => {
          onDeleteClick(ingredient)
          e.stopPropagation()
        }}
        thumbnail={ingredient.image}
        price={ingredient.price}
      />
    </div>
  )
}