import React, {useEffect, useReducer} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './app.module.css';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal';
import ModalIngredient from '../modal/modal-ingredient/modal-ingredient';
import ModalOrderInfo from '../modal/modal-order-info/modal-order-info';
import {ADD_INGREDIENT, REMOVE_INGREDIENT} from '../../services/actions/burger-constructor'
import {OPEN_DETAIL_INGREDIENT, CLOSE_DETAIL_INGREDIENT} from '../../services/actions/ingredient-detail'
import {getIngredients} from '../../services/actions/burger-ingredients'
import {placeOrder} from '../../services/actions/order'

export default function App() {
  
  const dispatch = useDispatch();

  const {ingredientsRequest, ingredientsFailed} = useSelector(store=>store.ingredientsReducer)
  const {inner, bun} = useSelector(store=>{return store.selectedIngredientsReducer})
  
  const[modal, manageModal] = React.useState({isOpened:false, content: null})

  const handleModalClose = () => {
    manageModal({...modal, isOpened: false})
    dispatch({type: CLOSE_DETAIL_INGREDIENT})
  }

  const handleCardClick = (ingredient) => {
    dispatch({type: OPEN_DETAIL_INGREDIENT, item: ingredient})
    manageModal({
      isOpened: true,
      content: <ModalIngredient />})
    dispatch({type: ADD_INGREDIENT, item: ingredient})
  }
  
  const handleDeleteClick = (ingredient) => {
    dispatch({type: REMOVE_INGREDIENT, item: ingredient})
  }
  
  const handleOrderClick = () => {
    if (!bun) {
      manageModal({isOpened: true, content: 'Добавьте хотя бы одну булку!'})
      return
    }
    const ingredients = [...inner.map(ing=>ing._id),
                            bun._id]
    dispatch(placeOrder(ingredients));
    manageModal({isOpened: true, content: <ModalOrderInfo />})
  }
  
  useEffect(()=>{
    dispatch(getIngredients());
    },[dispatch] )

  return (
    <>
      <div className={styles.app}>
        <AppHeader />
        <main>
          {ingredientsRequest || ingredientsFailed
            ? ingredientsRequest
              ? <div className='message'>Данные загружаются</div>
              : <div className='message'>Ошибка сервера</div>
            : <>
                <BurgerIngredients onClick={handleCardClick}/>
                <BurgerConstructor onClick={handleOrderClick} onDeleteClick={handleDeleteClick}/>
              </>}
        </main>
      </div>
      {
        modal.isOpened &&
          <Modal close={handleModalClose}>{modal.content}</Modal>
      }
    </>
  )
}