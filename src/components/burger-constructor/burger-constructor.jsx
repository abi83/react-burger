import {
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import BunWrapper from './bun-wrapper/bun-wrapper'
import { InnerIngredients } from './inner-ingredients/inner-ingredients'
import styles from './burger-constructor.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useDrop } from 'react-dnd'
import { ADD_INGREDIENT } from '../../services/actions/burger-constructor'
import { OPEN_MODAL } from '../../services/actions/modal'
import ModalOrderInfo from '../modal/modal-order-info/modal-order-info'
import { placeOrder } from '../../services/actions/order'
import {useHistory} from 'react-router-dom'


export default function BurgerConstructor() {
  const history = useHistory()
  const { user } = useSelector((store) => store.authReducer)
  const { inner, bun } = useSelector((store) => {
    return store.selectedIngredientsReducer
  })
  let totalPrice = inner.reduce((acc, el) => acc + el.price, 0)
  if (bun) {
    totalPrice += 2 * bun.price
  }

  const handleOrderClick = () => {
    if (!user){
      history.push('/login/')
      return
    }
    if (!bun) {
      dispatch({ type: OPEN_MODAL, content: 'Добавьте хотя бы одну булку!' })
      return
    }
    const ingredients = [...inner.map((ing) => ing._id), bun._id]
    dispatch(placeOrder(ingredients))
    dispatch({ type: OPEN_MODAL, content: <ModalOrderInfo /> })
  }

  const dispatch = useDispatch()

  const [{ isHover }, dropTarget] = useDrop({
    accept: 'ingredient',
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(item) {
      dispatch({ type: ADD_INGREDIENT, item: item })
    },
  })
  const className = `column pt-25 + ${isHover ? styles.droppable : ''}`
  return (
    <section className={className} ref={dropTarget}>
      <BunWrapper bun={bun}>
        <InnerIngredients items={inner} />
      </BunWrapper>
      <div className={`${styles.price} pt-4 pb-4`}>
        <span className='text text_type_digits-medium'>{totalPrice}</span>
        <CurrencyIcon type='primary' />
        <Button type='primary' size='large' onClick={handleOrderClick}>
          Оформить заказ
        </Button>
      </div>
    </section>
  )
}
