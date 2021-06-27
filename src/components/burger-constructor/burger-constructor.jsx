import React from 'react';
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';

export default class BurgerIngredients extends React.Component{
  render() {
    return (
    <section className={'container'}>
      {
        this.props.ingredients.map(el=>
          < ConstructorElement
            // type={'top'}
            isLocked={false}
            // handleClose?: () => void;
            text ={el.name}
            thumbnail={el.image}
            price={el.price}
          />
        )}
    </section>
  )}
}