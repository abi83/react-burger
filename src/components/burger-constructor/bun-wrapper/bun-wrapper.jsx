import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import styles from './bun-wrapper.module.css';

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