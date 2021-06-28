import React from 'react';
import PropTypes from 'prop-types'
import {ingredientPropTypes} from '../../utils/dataPropTypes'

import {
  ConstructorElement,
  CurrencyIcon,
  Button, DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles
  from './burger-constructor.module.css';

export default class BurgerConstructor extends React.Component{
  render() {
    return (
    <section className={'column'}>
      <div className={'container'}>
        {
          this.props.ingredients.map((el,index, arr) => {
            let type;
            switch (index) {
              case 0:
                type = 'top'
                break;
              case arr.length-1:
                type = 'bottom'
                break;
              default:
                type = '';
            }
            return(
              <div key={el._id} className={styles.row}>
                {type === '' && <DragIcon type={'primary'} />}
                <ConstructorElement
                  type={type}
                  isLocked={type!==''}
                  // handleClose?: () => void;
                  text ={el.name}
                  thumbnail={el.image}
                  price={el.price}
                />
              </div>
            )})
        }
      </div>
      <div className={styles.price}>
        <span>
          {6789}
        </span>
        <CurrencyIcon type="primary" />
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  )}
}

BurgerConstructor.propTypes = PropTypes.arrayOf(ingredientPropTypes).isRequired;