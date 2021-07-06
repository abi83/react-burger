import styles from './modal-order.module.css';
import React from 'react';
import orderAcceptedIcon from '../../../images/order_accepted.svg';

export default function ModalOrderInfo ({order}) {
 
  return (
    <div className={`${styles.card} pt-10 pb-10`}>
      <h3 className='pt-3 text text_type_digits-large'>{order.number}</h3>
      <p className='text text_type_main-medium pt-1'>идентификатор заказа</p>
      <img className='pt-15 pb-15' src={orderAcceptedIcon} alt='Заказ принят!' width='120px'/>
      <p className='text text_type_main-default'>Ваш заказ начали готовить</p>
      <p className='text text_type_main-default text_color_inactive pb-10 pt-2'>Дождитесь готовности на орбитальной станции</p>
    </div>
  )
};