import styles from './modal-order.module.css';
import React from 'react';
import orderAcceptedIcon from '../../../images/order_accepted.svg'

export default function ModalOrderInfo ({order}) {
 
  return (
    <div className={styles.card}>
      <h3 className='text text_type_main-large pt-3'>{order.number}</h3>
      <p>идентификатор заказа</p>
      <img src={orderAcceptedIcon} alt='Заказ принят!' width='120px'/>
      <p>Ваш заказ начали готовить</p>
      <p>Дождитесь готовности на орбитальной станции</p>
    </div>
  )
};