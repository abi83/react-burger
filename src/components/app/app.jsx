import React, {useEffect, useReducer} from 'react';

import styles from './app.module.css';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal';
import ModalIngredient from '../modal/modal-ingredient/modal-ingredient';
import ModalOrderInfo from '../modal/modal-order-info/modal-order-info';
import {ConstructorContext} from '../../context/constructor-context';
import {ADD_INGREDIENT, REMOVE_INGREDIENT} from '../../services/actions/burger-constructor'

export default function App() {
  const[serverState, setServerState] = React.useState({
    serverErrors: false,
    loading: true
  })
  const [ingredients, setIngredients] = React.useState([])
  
  const[modal, manageModal] = React.useState({isOpened:false, content: null})

  const handleModalClose = () => {
    manageModal({...modal, isOpened: false})
  }

  const handleCardClick = (ingredient) => {
    manageModal({
      isOpened: true,
      content: <ModalIngredient ingredient={ingredient} />})
    selectedIngredientsDispatcher({type: ADD_INGREDIENT, item: ingredient})
  }
  
  const handleDeleteClick = (ingredient) => {
    selectedIngredientsDispatcher({type: REMOVE_INGREDIENT, item: ingredient})
  }
  
  const handleOrderClick = async () => {
    const apiEndpoint = 'https://norma.nomoreparties.space/api/orders';
    if (!selectedIngredients.bun) {
      manageModal({isOpened: true, content: 'Добавьте хотя бы одну булку!'})
      return
    }

    const ingredients = [...selectedIngredients.inner.map(ing=>ing._id),
                            selectedIngredients.bun._id]
    const response = await fetch(apiEndpoint, {
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ingredients: ingredients})})
        .then(res => {
            if (!res.ok) {
              console.log('Recieved response:', res)
              throw new Error(`Something is wrong with response: ${res}`)
            }
            return res})
        .then(res=>res.json())
        .catch(error => console.error('Fetch error: ', error))
    
    manageModal({isOpened: true, content: <ModalOrderInfo order={response.order} />})
  }
  
  function selectedIngredientsReducer(state, action){
    // blank function for adding or removing items from selectedIngredients
    switch (action.type) {
      case ADD_INGREDIENT:{
        if (action.item.type === 'bun') {
          return {...state, bun: action.item};
        }
        return {...state, inner: [...state.inner, action.item]};
      }
      case REMOVE_INGREDIENT:{
        console.log('Remove!', action);
        return {...state, inner: state.inner.filter(item=>item._id !== action.item._id)};
      }
      default:
        return {state};
    }
  }

  const [selectedIngredients, selectedIngredientsDispatcher] = useReducer(selectedIngredientsReducer, {bun: null, inner: []}, undefined);

  const getIngredients = () => {
    const apiEndpoint = 'https://norma.nomoreparties.space/api/ingredients'

    fetch(apiEndpoint)
      .then(response => {
            if (response.ok) {
              return response;
            }
            return Promise.reject(response.status);
      })
      .then(res=>res.json())
      .then(result => {
          setIngredients(result.data);
          setServerState({loading: false, serverErrors: false})
        })
      .catch(() => setServerState({loading: false, serverErrors: true}))
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(getIngredients,[] )

  return (
    <>
      <div className={styles.app}>
        <AppHeader />
        <main>
          {serverState.loading || serverState.serverErrors
            ? serverState.loading
              ? <div className='message'>Данные загружаются</div>
              : <div className='message'>Ошибка сервера</div>
            : <>
                <BurgerIngredients ingredients={ ingredients } onClick={handleCardClick}/>
                <ConstructorContext.Provider value={{selectedIngredients, selectedIngredientsDispatcher}}>
                  <BurgerConstructor onClick={handleOrderClick} onDeleteClick={handleDeleteClick}/>
                </ConstructorContext.Provider>
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