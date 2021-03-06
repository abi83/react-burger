import styles from './modal-order.module.css'
import PropTypes from 'prop-types'
import orderAcceptedIcon from '../../../images/order_accepted.svg'
import { useSelector } from 'react-redux'

export default function ModalOrderInfo() {
  const { order } = useSelector((store) => {
    return store.orderReducer
  })

  return (
    <div className={`${styles.card} pt-10 pb-10`}>
      <h3 className='pt-3 text text_type_digits-large'>{order.number}</h3>
      <p className='text text_type_main-medium pt-1'>идентификатор заказа</p>
      <img
        className='pt-15 pb-15'
        src={orderAcceptedIcon}
        alt='Заказ принят!'
        width='120px'
      />
      <p className='text text_type_main-default'>Ваш заказ начали готовить</p>
      <p className='text text_type_main-default text_color_inactive pb-10 pt-2'>
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  )
}

ModalOrderInfo.propTypes = {
  onClick: PropTypes.exact({
    number: PropTypes.number,
  }),
}
