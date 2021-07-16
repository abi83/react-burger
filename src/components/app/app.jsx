import React, {useEffect, useReducer} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './app.module.css';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal';
import ModalIngredient from '../modal/modal-ingredient/modal-ingredient';
import ModalOrderInfo from '../modal/modal-order-info/modal-order-info';
// import {ConstructorContext} from '../../context/constructor-context';
import {ADD_INGREDIENT, REMOVE_INGREDIENT} from '../../services/actions/burger-constructor'
import {getIngredients} from '../../services/actions/burger-ingredients'

export default function App() {
  
  const dispatch = useDispatch();

  const {ingredientsRequest, ingredientsFailed} = useSelector(store=>store.ingredients)
  
  const[modal, manageModal] = React.useState({isOpened:false, content: null})

  const handleModalClose = () => {
    manageModal({...modal, isOpened: false})
  }

  const handleCardClick = (ingredient) => {
    manageModal({
      isOpened: true,
      content: <ModalIngredient ingredient={ingredient} />})
    dispatch({type: ADD_INGREDIENT, item: ingredient})
  }
  
  const handleDeleteClick = (ingredient) => {
    dispatch({type: REMOVE_INGREDIENT, item: ingredient})
  }
  
  const handleOrderClick = async () => {
    // const apiEndpoint = 'https://norma.nomoreparties.space/api/orders';
    // if (!selectedIngredients.bun) {
    //   manageModal({isOpened: true, content: 'Добавьте хотя бы одну булку!'})
    //   return
    // }
    //
    // const ingredients = [...selectedIngredients.inner.map(ing=>ing._id),
    //                         selectedIngredients.bun._id]
    // const response = await fetch(apiEndpoint, {
    //   method:'POST',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify({ingredients: ingredients})})
    //     .then(res => {
    //         if (!res.ok) {
    //           console.log('Recieved response:', res)
    //           throw new Error(`Something is wrong with response: ${res}`)
    //         }
    //         return res})
    //     .then(res=>res.json())
    //     .catch(error => console.error('Fetch error: ', error))
    
    manageModal({isOpened: true, content: <ModalOrderInfo order={{number: 999}} />})
  }
  
  // const [selectedIngredients, selectedIngredientsDispatcher] = useReducer(selectedIngredientsReducer, {bun: null, inner: []}, undefined);

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
                {/*<ConstructorContext.Provider value={{selectedIngredients, selectedIngredientsDispatcher}}>*/}
                  <BurgerConstructor onClick={handleOrderClick} onDeleteClick={handleDeleteClick}/>
                {/*</ConstructorContext.Provider>*/}
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